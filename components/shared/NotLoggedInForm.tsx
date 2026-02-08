import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotLoggedInInstructions({ applicationId, email }: { applicationId: string, email?: string }) {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Secure Document Upload</h2>
        <p className="mb-4 text-center">
          For your security, document uploads are only available through our secure portal when you're logged in.
          We've automatically created an account for you using the email you provided in Step 1.
        </p>
        <ol className="list-decimal list-inside mb-4 text-gray-700">
          <li>Click <b>Login Now</b> below</li>
          <li>Use your email from Step 1: <b>{email || "[your email]"}</b></li>
          <li>Click <b>Forgot Password</b> to set up your account password</li>
          <li>Once logged in, return to your application to upload documents</li>
        </ol>
        <div className="mb-4 text-center">
          <span className="font-semibold">Alternative: Email Submission</span>
          <br />
                          You can also email your documents directly to <a href="mailto:visa@unitedevisa.com" className="text-blue-600 underline">visa@unitedevisa.com</a> with the subject line: <b>Documents for Application {applicationId}</b>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <Link href={`/login${email ? `?email=${encodeURIComponent(email)}` : ""}`}>
            <Button>Login Now</Button>
          </Link>
                          <a href={`mailto:visa@unitedevisa.com?subject=Documents for Application ${applicationId}`}>
            <Button variant="outline">Email Documents</Button>
          </a>
        </div>
        <p className="text-xs text-gray-500 text-center mt-4">
          At any point, you can log in to our portal to track your documents and application status.
        </p>
      </Card>
    </div>
  );
}