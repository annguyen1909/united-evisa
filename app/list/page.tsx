"use client";
import { useEffect, useState } from "react";

type Application = {
  id: string;
  applicationId: string;
  status: string;
  createdAt: string;
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    fetch("/api/list")
      .then(res => res.json())
      .then(data => setApplications(data.applications || []));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">My Applications</h1>
      <table className="w-full border">
        <thead>
          <tr className="text-left">
            <th className="p-2 border">Application ID</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Submitted</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td className="p-2 border">{app.applicationId}</td>
              <td className="p-2 border">{app.status}</td>
              <td className="p-2 border">{new Date(app.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}