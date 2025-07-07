'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ChevronUp, AlertTriangle, Check, FileText, Download } from 'lucide-react';
import Link from 'next/link';
// Types
interface ApplicationData {
    applicationId?: string;
    fullName?: string;
    email?: string;
    areaCode?: string;
    phoneNumber?: string;
    gender?: string;
    stayingStart?: string;
    stayingEnd?: string;
    passengers?: Passenger[];
    status?: string;
}

interface Passenger {
    id?: string;
    fullName: string;
    dateOfBirth?: string;
    nationality?: string;
    passportNumber?: string;
}

interface DocumentRequirement {
    id: string;
    name: string;
    description: string;
    required: boolean;
    source: 'visaType' | 'custom';
    passengerId?: string;
}

interface UploadedDocument {
    id: string;
    fileName: string;
    fileSize: number;
    uploadDate: string;
    passengerName: string;
    documentType: string;
}

type UploadError = string | null | { type: 'AUTH'; message: string; applicationId: string };

export default function DocumentsPage() {
    const searchParams = useSearchParams();
    const applicationId = searchParams.get('applicationId');

    const [applicationData, setApplicationData] = useState<ApplicationData>({});
    const [isApplicationInfoExpanded, setIsApplicationInfoExpanded] = useState(false);
    const [uploadedDocuments, setUploadedDocuments] = useState<UploadedDocument[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState<UploadError>(null);
    const [documentRequirements, setDocumentRequirements] = useState<DocumentRequirement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { data: session } = useSession();
    
    useEffect(() => {
        const fetchApplicationData = async () => {
            if (!applicationId) {
                setIsLoading(false);
                return;
            }

            try {
                // Fetch application data
                const response = await fetch(`/api/applications/${applicationId}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data); // <-- Add this to see the structure

                    setApplicationData(data);

                    // Load document requirements
                    const requirementsResponse = await fetch(`/api/applications/${applicationId}/document-requirements`);
                    if (requirementsResponse.ok) {
                        const requirementsData = await requirementsResponse.json();
                        setDocumentRequirements(requirementsData.requirements || []);
                    }

                    // Load existing documents
                    const documentsResponse = await fetch(`/api/applications/${applicationId}/documents`);
                    if (documentsResponse.ok) {
                        const documentsData = await documentsResponse.json();
                        setUploadedDocuments(documentsData.documents || []);
                    }
                } else {
                    console.error('Failed to load application data');
                }
            } catch (error) {
                console.error('Error fetching application data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchApplicationData();
    }, [applicationId]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0 || !applicationId) return;

        const maxFileSize = 20 * 1024 * 1024; // 20MB
        const maxFiles = 15 * (applicationData.passengers?.length || 1);
        const allowedTypes = [
            'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp',
            'application/pdf', 'text/plain', 'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ];

        // Validate files
        if (files.length > maxFiles) {
            setUploadError(`Maximum ${maxFiles} files allowed`);
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.size > maxFileSize) {
                setUploadError(`${file.name} exceeds 20MB limit`);
                return;
            }
            if (!allowedTypes.includes(file.type)) {
                setUploadError(`${file.name} has an unsupported file type`);
                return;
            }
        }

        setIsUploading(true);
        setUploadError(null);

        try {
            const formData = new FormData();
            Array.from(files).forEach((file) => {
                formData.append('file', file);
                formData.append('name', file.name);
                formData.append('type', file.type);
            });
            formData.append('applicationId', applicationId);

            const response = await fetch(`/api/applications/${applicationId}/documents`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.error === 'AUTHENTICATION_REQUIRED') {
                    setUploadError({
                        type: 'AUTH',
                        message: errorData.message,
                        applicationId: errorData.applicationId,
                    });
                    return;
                }
                throw new Error(errorData.error || 'Upload failed');
            }

            // Add uploaded files to the list
            const newDocuments: UploadedDocument[] = Array.from(files).map((file, index) => ({
                id: `doc-${Date.now()}-${index}`,
                fileName: file.name,
                fileSize: file.size,
                uploadDate: new Date().toISOString(),
                passengerName: applicationData.passengers?.[0]?.fullName || 'Unknown',
                documentType: 'Passport', // Default type
            }));

            setUploadedDocuments((prev) => [...prev, ...newDocuments]);
        } catch (error) {
            setUploadError(error instanceof Error ? error.message : 'Upload failed. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    const handleDownload = async (documentId: string, fileName: string) => {
        if (!applicationId) return;

        try {
            const response = await fetch(`/api/applications/${applicationId}/documents/${documentId}/download`);

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } else {
                alert('Failed to download document. Please try again.');
            }
        } catch (error) {
            console.error('Error downloading document:', error);
            alert('Failed to download document. Please try again.');
        }
    };

    // Authentication error case
      if (!session?.user?.email) {
        return (
            <div className="min-h-screen bg-slate-50 py-10">
                <div className="max-w-4xl mx-auto px-4">
                    <Card className="bg-white shadow-sm border border-slate-200">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-2xl font-bold pt-5 text-slate-800">Secure Document Upload</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-slate-600">
                                For your security, document uploads are only available through our secure portal when you're logged in.
                                We've automatically created an account for you using the email you provided in Step 1.
                            </p>
                            <ol className="space-y-2 text-slate-700">
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">1</span>
                                    <span>Click <span className="font-semibold">Login Now</span> below</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">2</span>
                                    <span>Use your email from Step 1</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">3</span>
                                    <span>Click <span className="font-semibold">Forgot Password</span> to set up your account password</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">4</span>
                                    <span>Once logged in, return to your application to upload documents</span>
                                </li>
                            </ol>
                            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                                <h3 className="font-semibold text-blue-800 mb-2">Alternative: Email Submission</h3>
                                <p className="text-blue-700">
                                    You can also email your documents directly to{' '}
                                    <a href={`mailto:Visa@Srilanka-Immigration.com?subject=Documents for Application ${applicationId}`} className="text-blue-600 underline">
                                        UnitedEvisa@immigration.com
                                    </a>{' '}
                                    with the subject line: <span className="font-semibold">Documents for Application {applicationId}</span>
                                </p>
                            </div>
                            <p className="text-slate-600">
                                At any point, you can log in to our portal to track your documents and application status.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <Link href="/login">
                                    <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
                                        Login Now
                                    </Button>
                                </Link>
                                <Link href={`mailto:Visa@Srilanka-Immigration.com?subject=Documents for Application ${applicationId}`}>
                                    <Button variant="outline" className="w-full sm:w-auto">
                                        Email Documents
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 py-10">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-200 border-t-emerald-600"></div>
                        <span className="mt-4 text-slate-600">Loading application data...</span>
                    </div>
                </div>
            </div>
        );
    }

    // Main content
    return (
        <div className="min-h-screen bg-slate-50 py-10">
            <div className="max-w-4xl mx-auto px-4">
                <Card className="bg-white shadow-sm border border-slate-200">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-2xl font-bold p-4 pt-6 text-slate-800">Step 4: Document Upload</CardTitle>
                        <p className="text-slate-600 mt-2">
                            Please upload the required documents for your visa application. All documents must be clear and legible.
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-8">
                        {/* Application Information */}
                        <div>
                            <button
                                onClick={() => setIsApplicationInfoExpanded(!isApplicationInfoExpanded)}
                                className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition"
                            >
                                <span className="font-medium text-slate-800">Application Information</span>
                                {isApplicationInfoExpanded ? (
                                    <ChevronUp className="h-5 w-5 text-slate-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-slate-500" />
                                )}
                            </button>

                            {isApplicationInfoExpanded && (
                                <div className="mt-4 p-5 rounded-lg border border-slate-200 bg-slate-50">
                                    <div className="space-y-6">
                                        {/* Contact & Visa Details */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-800 mb-3">Contact & Visa Details</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm text-slate-500">Full Name</p>
                                                    <p className="font-medium text-slate-800">{applicationData.fullName || 'Not provided'}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">Email</p>
                                                    <p className="font-medium text-slate-800">{applicationData.email || 'Not provided'}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">Phone</p>
                                                    <p className="font-medium text-slate-800">
                                                        {applicationData.areaCode} {applicationData.phoneNumber}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-slate-500">Travel Dates</p>
                                                    <p className="font-medium text-slate-800">
                                                        {applicationData.stayingStart ? new Date(applicationData.stayingStart).toLocaleDateString() : 'Not set'}
                                                        {' to '}
                                                        {applicationData.stayingEnd ? new Date(applicationData.stayingEnd).toLocaleDateString() : 'Not set'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Passenger Information */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-800 mb-3">Passenger Information</h3>
                                            <div className="space-y-4">
                                                {applicationData.passengers?.map((passenger, index) => (
                                                    <Card key={passenger.id || index} className="bg-white">
                                                        <CardContent className="p-4">
                                                            <h4 className="font-medium text-slate-700 mb-2">Passenger {index + 1}</h4>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                                <div>
                                                                    <p className="text-slate-500">Full Name</p>
                                                                    <p className="font-medium text-slate-800">{passenger.fullName}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-slate-500">Date of Birth</p>
                                                                    <p className="font-medium text-slate-800">
                                                                        {passenger.dateOfBirth ? new Date(passenger.dateOfBirth).toLocaleDateString() : 'Not provided'}
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-slate-500">Nationality</p>
                                                                    <p className="font-medium text-slate-800">{passenger.nationality || 'Not provided'}</p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-slate-500">Passport Number</p>
                                                                    <p className="font-medium text-slate-800">{passenger.passportNumber || 'Not provided'}</p>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Required Documents */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Required Documents</h3>

                            {documentRequirements.length === 0 ? (
                                <div className="space-y-4">
                                    <Card className="bg-white">
                                        <CardContent className="p-4">
                                            <h4 className="font-medium text-slate-800 mb-3">Required Documents</h4>
                                            <div className="space-y-4">
                                                <div className="flex gap-3">
                                                    <Badge className="bg-red-100 hover:bg-red-100 text-red-800 border-transparent">Required</Badge>
                                                    <div>
                                                        <p className="font-medium text-slate-800">A Valid Passport</p>
                                                        <p className="text-sm text-slate-600">
                                                            Your passport must be valid for at least 6 months from your date of arrival.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3">
                                                    <Badge className="bg-red-100 hover:bg-red-100 text-red-800 border-transparent">Required</Badge>
                                                    <div>
                                                        <p className="font-medium text-slate-800">A Portrait Photo</p>
                                                        <p className="text-sm text-slate-600">
                                                            A recent passport-sized photo with a clear view of your face.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {applicationData.passengers?.map((passenger, index) => (
                                        <Card key={passenger.id || index} className="bg-white">
                                            <CardContent className="p-4">
                                                <h4 className="font-medium text-slate-800 mb-3">
                                                    Documents for {passenger.fullName}
                                                </h4>
                                                <div className="space-y-4">
                                                    {documentRequirements
                                                        .filter(req => !req.passengerId || req.passengerId === passenger.id)
                                                        .map((req) => (
                                                            <div key={req.id} className="flex gap-3">
                                                                {req.required ? (
                                                                    <Badge className="bg-red-100 hover:bg-red-100 text-red-800 border-transparent">Required</Badge>
                                                                ) : (
                                                                    <Badge className="bg-slate-100 hover:bg-slate-100 text-slate-800 border-transparent">Optional</Badge>
                                                                )}
                                                                <div>
                                                                    <p className="font-medium text-slate-800">{req.name}</p>
                                                                    <p className="text-sm text-slate-600">{req.description}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Upload Documents */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Upload Documents</h3>

                            <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center">
                                <input
                                    type="file"
                                    multiple
                                    accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.txt,.doc,.docx,.xls,.xlsx"
                                    onChange={handleFileUpload}
                                    disabled={isUploading}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="inline-flex items-center px-4 py-2 rounded-md font-medium text-white bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                                >
                                    {isUploading ? (
                                        <>
                                            <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                                            Uploading...
                                        </>
                                    ) : (
                                        'Choose Files'
                                    )}
                                </label>

                                <p className="mt-3 text-sm text-slate-500">
                                    Accepted formats: JPG, JPEG, PNG, GIF, BMP, PDF, TXT, DOC, DOCX, XLS, XLSX
                                </p>
                                <p className="text-sm text-slate-500">
                                    Maximum file size: 20MB per file | Maximum files:{' '}
                                    {15 * (applicationData.passengers?.length || 1)}
                                </p>
                            </div>

                            {uploadError && typeof uploadError === 'string' && (
                                <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg">
                                    <div className="flex items-center gap-2 text-red-700">
                                        <AlertTriangle className="h-4 w-4" />
                                        <p className="text-sm">{uploadError}</p>
                                    </div>
                                </div>
                            )}

                            {/* Document Retention Policy */}
                            <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-lg">
                                <div className="flex gap-3">
                                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-amber-800">Document Retention Policy</h4>
                                        <p className="mt-1 text-sm text-amber-700">
                                            All uploaded documents will be automatically deleted from our servers 7 days after your visa result is sent.
                                            Please ensure you have backup copies of all important documents for your records.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Uploaded Documents */}
                        {uploadedDocuments.length > 0 && (
                            <div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Uploaded Documents</h3>
                                <div className="space-y-3">
                                    {uploadedDocuments.map((doc) => (
                                        <div
                                            key={doc.id}
                                            className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg"
                                        >
                                            <div className="flex items-center gap-3">
                                                <FileText className="h-5 w-5 text-slate-400" />
                                                <div>
                                                    <p className="font-medium text-slate-800">{doc.fileName}</p>
                                                    <p className="text-xs text-slate-500">
                                                        {doc.passengerName} • {formatDate(doc.uploadDate)}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                onClick={() => handleDownload(doc.id, doc.fileName)}
                                            >
                                                <Download className="h-4 w-4 mr-1" />
                                                Download
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Support Contact */}
                        <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                            <div className="flex gap-3">
                                <div className="p-2 rounded-full bg-blue-100 text-blue-700">
                                    <Check className="h-4 w-4" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-800 mb-1">Need Assistance?</h3>
                                    <p className="text-sm text-blue-700">
                                        Our support team is available to help with your document upload.
                                        Contact us at <a href="mailto:support@unitedevisa.com" className="font-medium underline">support@unitedevisa.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}