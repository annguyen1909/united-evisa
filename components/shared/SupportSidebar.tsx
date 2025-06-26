"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, CheckCircle, Sun } from "lucide-react";

export default function SupportSidebar() {
    return (
        <div className="space-y-6">
            {/* Contact Form */}
            <Card className="rounded-2xl shadow-md border bg-card text-foreground">
                <div className="bg-gradient-to-r from-primary to-[#16601E] text-white px-6 py-5 rounded-t-2xl">
                    <div className="flex items-start gap-3">
                        <Mail className="w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold">Send Us a Message</h3>
                            <p className="text-sm opacity-90">Get expert help with your visa application</p>
                        </div>
                    </div>
                </div>
                <CardContent className="space-y-4">
                    <div className="bg-[#16601E]/10 text-sm p-3 rounded-md text-black">
                        Our visa experts are here to help you 24/7. Fill out the form below and we'll get back to you as soon as possible.
                    </div>
                    <form className="space-y-3">
                        <Input placeholder="Full Name *" required />
                        <Input type="email" placeholder="Email Address *" required />
                        <Input type="tel" placeholder="Phone Number *" required />
                        <Textarea placeholder="Your Question *" rows={4} required />
                        <Button type="submit" className="w-full bg-[#16601E] hover:bg-[#16601E]/90 transition-bg duration-300">
                            Send Message →
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {/* Expert Info */}
            <Card className="rounded-2xl shadow-sm border bg-card text-foreground">
                <CardContent className="pt-6 space-y-4">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                        <Sun className="w-4 h-4" />
                        <span>EXPERTS AVAILABLE 24/7</span>
                    </div>
                    <div className="text-sm flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <a href="mailto:Visa@SriLanka-Immigration.com" className="text-[#16601E] hover:underline">
                            support@unitedevisa.com
                        </a>
                    </div>
                    <Separator />
                    <div className="text-sm space-y-1">
                        <p><strong>US:</strong> +1 555 000 0000</p>
                        <p><strong>UK:</strong> +44 5555 000000</p>
                        <a href="#" className="text-[#16601E] hover:underline">Worldwide phone support</a>
                    </div>
                </CardContent>
            </Card>

            {/* Confidence Checklist */}
            <Card className="rounded-2xl shadow-sm border bg-card text-foreground">
                <CardContent className="pt-6 space-y-4">
                    <h4 className="text-md font-semibold text-primary">APPLY WITH CONFIDENCE</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        {[
                            "Fast, secure, and reliable visa processing",
                            "Safe online payment—no hidden fees",
                            "Most visas approved within 3 working days",
                            "All applications processed urgently—no extra rush fees",
                            "Transparent pricing, no surprises",
                            "100% Service Fees Returned if Rejected",
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <svg
                                    className="text-green-600 w-5 h-5 mt-[2px] shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className={text.includes("100%") ? "font-semibold text-black" : "text-gray-700"}>
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>

                </CardContent>
            </Card>
        </div>
    );
}
