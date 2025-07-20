'use client';

import { X } from 'lucide-react';

export default function ChargebackPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 flex items-center justify-center">
            <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl mx-auto mb-8">
                    <X className="h-20 w-20 text-white" />
                </div>
            </div>
        </div>
    );
} 