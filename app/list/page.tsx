"use client";
import { JSX, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Calendar, FileText, Users, DollarSign, Clock, ChevronRight, XCircle, CheckCircle } from 'lucide-react';
import { useSession } from 'next-auth/react';

interface Application {
  id: string;
  applicationId: string;
  status: string;
  paymentStatus: string;
  passengerCount: number;
  stayingStart: string;
  stayingEnd: string;
  createdAt: string;
  updatedAt: string;
  total: number;
  VisaType?: {
    name: string;
    fees: number;
  };
  passengers?: Array<{
    fullName: string;
  }>;
}

export default function ApplicationsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isLoggedIn = !!session?.user;
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchApplications();
    } else {
      setIsLoading(false);
      setApplications([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const fetchApplications = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/applications');
      if (response.ok) {
        const data = await response.json();
        setApplications(data.applications || []);
      } else {
        setError('Failed to load applications');
      }
    } catch (error) {
      setError('An error occurred while loading applications');
    } finally {
      setIsLoading(false);
    }
  };

  // Status helpers remain the same
  const getDisplayStatus = (application: Application): string => {
    // Your existing getDisplayStatus function
    const { status } = application;

    if (!status || status === 'Not Started') return 'Not Finished';
    if (status === 'Lead Open') return 'Not Finished';
    if (status === 'Waiting for Payment') return 'Payment Needed';
    if (status === 'Collecting Documents') return 'Collecting Documents';
    if (status === 'Processing') return 'Processing';
    if (status === 'Deferred') return 'Deferred';
    if (status === 'Send Visa Result') return 'Processing';
    if (status === 'Visa Result Sent') return 'Visa Result Sent';
    if (status === 'Closed - Chargeback') return 'Chargeback Detected';
    if (status === 'Cancelled') return 'Cancelled';
    if (status === 'Refunded') return 'Refunded';

    return status || 'Unknown';
  };

  const getStatusColor = (status: string): { bg: string, text: string, icon: JSX.Element } => {
    switch (status) {
      case 'Not Finished':
        return { 
          bg: 'bg-amber-50', 
          text: 'text-amber-700',
          icon: <Clock className="w-4 h-4 mr-1.5" />
        };
      case 'Payment Needed':
        return { 
          bg: 'bg-orange-50', 
          text: 'text-orange-700',
          icon: <DollarSign className="w-4 h-4 mr-1.5" />
        };
      case 'Collecting Documents':
        return { 
          bg: 'bg-blue-50', 
          text: 'text-blue-700',
          icon: <FileText className="w-4 h-4 mr-1.5" />
        };
      case 'Processing':
        return { 
          bg: 'bg-indigo-50', 
          text: 'text-indigo-700',
          icon: <Clock className="w-4 h-4 mr-1.5" />
        };
      case 'Deferred':
        return { 
          bg: 'bg-purple-50', 
          text: 'text-purple-700',
          icon: <XCircle className="w-4 h-4 mr-1.5" />
        };
      case 'Visa Result Sent':
        return { 
          bg: 'bg-blue-50', 
          text: 'text-blue-700',
          icon: <FileText className="w-4 h-4 mr-1.5" />
        };
      case 'Cancelled':
        return { 
          bg: 'bg-gray-50', 
          text: 'text-gray-700',
          icon: <XCircle className="w-4 h-4 mr-1.5" />
        };
      case 'Refunded':
        return { 
          bg: 'bg-green-50', 
          text: 'text-green-700',
          icon: <CheckCircle className="w-4 h-4 mr-1.5" />
        };
      case 'Chargeback Detected':
        return { 
          bg: 'bg-red-50', 
          text: 'text-red-700',
          icon: <XCircle className="w-4 h-4 mr-1.5" />
        };
      default:
        return { 
          bg: 'bg-slate-50', 
          text: 'text-slate-700',
          icon: <FileText className="w-4 h-4 mr-1.5" />
        };
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  function navigateToApplicationStep(application: Application) {
    const applicationId = application.applicationId;

    switch (application.status) {
      case "Not Finished":
        router.push(`/apply/passengers?applicationId=${applicationId}`);
        break;
      case "Waiting for Payment":
        router.push(`/apply/payment?applicationId=${applicationId}`);
        break;
      case "Collecting Documents":
        router.push(`/apply/documents?applicationId=${applicationId}`);
        break;
      case "Processing":
        router.push(`/apply/status?applicationId=${applicationId}`);
        break;
      case "Deferred":
        router.push(`/apply/documents?applicationId=${applicationId}`);
        break;
      case "Send Visa Result":
      case "Visa Result Sent":
        router.push(`/apply/status?applicationId=${applicationId}`);
        break;
      case "Completed":
      case "Approved":
        router.push(`/apply/summary?applicationId=${applicationId}`);
        break;
      case "Rejected":
      case "Cancellation Requested":
      case "Cancelled":
        router.push(`/apply/summary?applicationId=${applicationId}`);
        break;
      case "Closed - Chargeback":
        router.push(`/apply/chargeback?applicationId=${applicationId}`);
        break;
      case "Refunded":
        router.push(`/apply/refunded?applicationId=${applicationId}`);
        break;
      default:
        router.push(`/apply/passengers?applicationId=${applicationId}`);
    }
  }

  // Note: If you manually change the URL to /confirmation, the information may be wrong if that page relies on state or query params that are not set by navigation. Always use the app's navigation buttons to ensure correct data is loaded.

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-2">My Applications</h1>
              <p className="text-slate-500 text-sm md:text-base">
                {isLoggedIn
                  ? 'Track and manage your eVisa applications in one place'
                  : 'You must be logged in to view your applications.'}
              </p>
            </div>
            {isLoggedIn ? (
              <button
                onClick={() => router.push('/apply')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors duration-200 font-medium text-sm md:text-base flex items-center justify-center shadow-sm"
              >
                Apply for New eVisa
              </button>
            ) : (
              <button
                onClick={() => router.push('/login')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition-colors duration-200 font-medium text-sm md:text-base flex items-center justify-center shadow-sm"
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Applications List */}
        {isLoggedIn ? (
          <div className="space-y-6">
            {isLoading ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12">
                <div className="flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-200 border-t-blue-600"></div>
                  <span className="mt-4 text-slate-600">Loading your applications...</span>
                </div>
              </div>
            ) : error ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-red-600 mb-4">{error}</p>
                  <button
                    onClick={fetchApplications}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-2 rounded-lg transition-colors font-medium"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            ) : applications.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-4">
                    <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">No Applications Yet</h3>
                  <p className="text-slate-500 mb-8 max-w-md mx-auto">
                    You haven't started any visa applications yet. Create your first application to get started.
                  </p>
                  <button
                    onClick={() => router.push('/apply')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium shadow-sm"
                  >
                    Start Your First Application
                  </button>
                </div>
              </div>
            ) : (
              applications.map((application) => {
                const displayStatus = getDisplayStatus(application);
                const { bg, text, icon } = getStatusColor(displayStatus);

                return (
                  <div
                    key={application.id}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <h3 className="text-lg font-medium text-slate-800">
                            <span className="text-slate-500 font-normal">#</span>{application.applicationId}
                          </h3>
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${bg} ${text}`}>
                            {icon}
                            {displayStatus}
                          </div>
                        </div>
                        
                        <div className="text-sm text-slate-500">
                          <span className="inline-flex items-center">
                            <Clock className="w-4 h-4 mr-1.5" />
                            {formatDate(application.createdAt)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="border-t border-b border-slate-100 py-4 my-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          <div className="flex flex-col">
                            <div className="flex items-center text-slate-500 text-sm mb-1.5">
                              <FileText className="w-4 h-4 mr-2" />
                              <span>Visa Type</span>
                            </div>
                            <span className="font-medium text-slate-800">
                              {application.VisaType?.name || 'eVisa'}
                            </span>
                          </div>
                          
                          <div className="flex flex-col">
                            <div className="flex items-center text-slate-500 text-sm mb-1.5">
                              <Users className="w-4 h-4 mr-2" />
                              <span>Travelers</span>
                            </div>
                            <span className="font-medium text-slate-800">
                              {application.passengerCount || 1}{' '}
                              {(application.passengerCount || 1) === 1 ? 'person' : 'people'}
                            </span>
                          </div>
                          
                          <div className="flex flex-col">
                            <div className="flex items-center text-slate-500 text-sm mb-1.5">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>Travel Dates</span>
                            </div>
                            <span className="font-medium text-slate-800">
                              {application.stayingStart ? formatDate(application.stayingStart) : 'N/A'}
                              {application.stayingEnd ? ` - ${formatDate(application.stayingEnd)}` : ''}
                            </span>
                          </div>
                          
                          <div className="flex flex-col">
                            <div className="flex items-center text-slate-500 text-sm mb-1.5">
                              <DollarSign className="w-4 h-4 mr-2" />
                              <span>Total Amount</span>
                            </div>
                            <span className="font-medium text-slate-800">
                              {formatCurrency(application.total || 0)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {application.passengers && application.passengers.length > 0 && (
                        <div className="mb-5">
                          <div className="flex items-center text-slate-500 text-sm mb-2">
                            <Users className="w-4 h-4 mr-1.5" />
                            <span>Passengers</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {application.passengers.map((passenger, index) => (
                              <span
                                key={index}
                                className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium"
                              >
                                {passenger.fullName}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                        <div className="flex space-x-3 order-2 sm:order-1">
                          <button
                            onClick={() => navigateToApplicationStep(application)}
                            className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium text-sm"
                          >
                            View Details
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                          {displayStatus === 'Payment Needed' && (
                            <button
                              onClick={() => router.push(`/apply/payment?applicationId=${application.applicationId}`)}
                              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                            >
                              Complete Payment
                              <DollarSign className="w-4 h-4 ml-1" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 mb-4">
                <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Login Required</h3>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                You must be logged in to view and manage your visa applications.
              </p>
              <button
                onClick={() => router.push('/login')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium shadow-sm"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}