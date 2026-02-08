'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatusMismatch from '@/components/shared/StatusMismatch';
import { AlertTriangle } from 'lucide-react';
import DeferredStatus from '@/components/shared/DeferredStatus';
import ProcessingStatus from '@/components/shared/ProcessingStatus';
import ResultStatus from '@/components/shared/ResultStatus';

import type { ApplicationData } from '@/lib/types';

function StatusContent() {
    const searchParams = useSearchParams();
    const applicationId = searchParams.get('applicationId');

    const [applicationData, setApplicationData] = useState<ApplicationData>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchApplicationData = async () => {
            if (!applicationId) {
                setError('No application ID provided');
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(`/api/applications/${applicationId}`);
                if (response.ok) {
                    const data = await response.json();
                    setApplicationData(data);
                } else {
                    setError('Failed to load application data');
                }
            } catch (error) {
                console.error('Error fetching application data:', error);
                setError('Failed to load application data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchApplicationData();
    }, [applicationId]);

    const handleRefresh = async () => {
        if (!applicationId) return;
        
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`/api/applications/${applicationId}`);
            if (response.ok) {
                const data = await response.json();
                setApplicationData(data);
            } else {
                setError('Failed to load application data');
            }
        } catch (error) {
            console.error('Error fetching application data:', error);
            setError('Failed to load application data');
        } finally {
            setIsLoading(false);
        }
    };

    // Modern Loading State
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-amber-50/20 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-semibold text-slate-700">Loading application status...</p>
                        <p className="text-sm text-slate-500">Please wait while we retrieve your information</p>
                    </div>
                </div>
            </div>
        );
    }

    // Modern Error State
    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-amber-50/20 py-12">
                <div className="max-w-2xl mx-auto px-4">
                    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-blue-100/50 overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-amber-500/5"></div>
                        <CardHeader className="text-center pb-6 relative z-10">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-amber-100 rounded-2xl flex items-center justify-center shadow-lg">
                                    <AlertTriangle className="h-8 w-8 text-blue-600" />
                                </div>
                            </div>
                            <CardTitle className="text-2xl font-bold text-blue-700">
                                Unable to Load Application
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center space-y-4 relative z-10">
                            <p className="text-blue-600 leading-relaxed">{error}</p>
                            <Button 
                                onClick={handleRefresh}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-all duration-200"
                            >
                                Try Again
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }

    // Determine which status component to render based on application status
    const normalizedStatus = applicationData.status?.toLowerCase();

    console.log('Status page - Original status:', applicationData.status);
    console.log('Status page - Normalized status:', normalizedStatus);

    switch (normalizedStatus) {
        case 'deferred':
            return <DeferredStatus applicationData={applicationData} onRefresh={handleRefresh} />;
        
        case 'processing':
        case 'send visa result':
            return <ProcessingStatus applicationData={applicationData} onRefresh={handleRefresh} />;
        
        case 'visa result sent':
            return <ResultStatus applicationData={applicationData} onRefresh={handleRefresh} />;
        
        case 'approved':
        case 'completed':
            return <ResultStatus applicationData={applicationData} onRefresh={handleRefresh} />;
        
        default:
            // If status doesn't match any expected status, show status mismatch
            return (
                <StatusMismatch 
                    expectedStatus="Deferred, Processing, or Visa Result Sent" 
                    actualStatus={applicationData.status} 
                />
            );
    }
}

export default function StatusPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-amber-50/20 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-6">
                        <div className="absolute inset-0 rounded-full border-4 border-slate-200"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-semibold text-slate-700">Loading application status...</p>
                        <p className="text-sm text-slate-500">Please wait while we retrieve your information</p>
                    </div>
                </div>
            </div>
        }>
            <StatusContent />
        </Suspense>
    );
}
