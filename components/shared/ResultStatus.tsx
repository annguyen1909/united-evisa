'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail } from 'lucide-react';

import type { ApplicationData } from '@/lib/types';

interface ResultStatusProps {
    applicationData: ApplicationData;
    onRefresh: () => void;
}

export default function ResultStatus({ applicationData, onRefresh }: ResultStatusProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 py-12">
            <div className="max-w-2xl mx-auto px-4">
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
                    <CardHeader className="text-center pb-8 pt-8 relative z-10">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Mail className="h-12 w-12 text-blue-600" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
                                    <Mail className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                        <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                            Check Your Email
                        </CardTitle>
                        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                            Your visa application has been processed. Please check your email for the result and further instructions.
                        </p>
                        <div className="flex justify-center mt-4">
                            <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 text-sm px-4 py-2 rounded-full font-medium shadow-lg">
                                Status: Visa Result Sent
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6 px-8 pb-8">
                        {/* Email Instructions */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                </div>
                                What to do next
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                        1
                            </div>
                                    <p className="text-blue-700 font-medium leading-relaxed">
                                        Check your email inbox for the visa result
                                    </p>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                        2
                            </div>
                                    <p className="text-blue-700 font-medium leading-relaxed">
                                        If you don't see the email, check your spam folder
                                    </p>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-md">
                                        3
                                    </div>
                                    <p className="text-blue-700 font-medium leading-relaxed">
                                        Follow the instructions in the email for next steps
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Support */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                </div>
                                Need Help?
                            </h3>
                            <p className="text-blue-700 mb-4">
                                If you have any questions about your visa result, please contact our support team.
                            </p>
                            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200/50">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
                                    <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                    <p className="font-semibold text-blue-800">Email Support</p>
                                    <p className="text-blue-700">visa@worldmaxxing.com</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
