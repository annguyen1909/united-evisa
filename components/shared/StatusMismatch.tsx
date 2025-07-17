import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface StatusMismatchProps {
  expectedStatus: string;
  actualStatus?: string;
  children?: React.ReactNode;
}

const StatusMismatch: React.FC<StatusMismatchProps> = ({ expectedStatus, actualStatus, children }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="bg-yellow-50 border border-yellow-200">
          <CardHeader>
            <CardTitle className="text-xl mt-4 font-bold text-yellow-700 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Wrong Application Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-700 mb-4">
              This page is only available for applications with status <b>{expectedStatus}</b>.<br />
              Your application is currently: <b>{actualStatus || 'Unknown'}</b>.<br />
              Please return to the application list or visit the correct status page.
            </p>
            {children}
            <Link href="/list">
              <Button className="bg-emerald-600 hover:bg-emerald-700">View All Applications</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatusMismatch;
