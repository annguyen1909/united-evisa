"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { PhoneCall, MessageSquare, Clock, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function TopBanner() {
  const { data: session, status } = useSession();
  const [isVisible, setIsVisible] = useState(true);
  
  // Optional: Add ability to dismiss the banner with localStorage memory
  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("topBannerDismissed", "true");
  };

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem("topBannerDismissed") === "true";
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  if (status === "loading" || !isVisible) return null;

  return (
    <div className="w-full bg-emerald-800 px-4 py-1.5 border-b border-emerald-700 max-md:hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-sm flex gap-8 text-white">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-amber-300" />
            <p>
              We are available <span className="text-amber-300 font-medium">24/7</span>
            </p>
          </div>
          
          <div className="flex items-center gap-1.5">
            <PhoneCall className="h-3.5 w-3.5 text-amber-300" />
            <p>+ 1 888 888 8888</p>
          </div>
          
          <Link href="/support" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <MessageSquare className="h-3.5 w-3.5 text-amber-300" />
            <p>Chat with Our Experts</p>
          </Link>
        </div>

        <div className="flex gap-3">
          <Link href="/list">
            <Button variant="secondary" size="sm" className="bg-white text-emerald-800 hover:bg-amber-50 flex gap-1.5 h-8">
              <ExternalLink className="h-3.5 w-3.5" />
              Check Visa Status
            </Button>
          </Link>

          {!session?.user && (
            <Link href="/login">
              <Button 
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white h-8"
              >
                Log In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}