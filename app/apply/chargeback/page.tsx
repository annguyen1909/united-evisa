'use client';

import { X } from 'lucide-react';

export default function ChargebackPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-amber-50/20 flex items-center justify-center">
            <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl mx-auto mb-8">
                    <X className="h-20 w-20 text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-4">
                    Chargeback Detected
                </h1>
                <p className="text-slate-600 max-w-md mx-auto">
                    A chargeback has been initiated for this transaction. Please contact our support team for assistance.
                </p>
            </div>
        </div>
    );
} 