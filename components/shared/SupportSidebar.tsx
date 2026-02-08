"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  CheckCircle, 
  Sun, 
  Phone, 
  Globe, 
  Send, 
  ShieldCheck,
  Clock,
  CreditCard,
  RefreshCcw
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SupportSidebar() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }
        
        // Show success state
        setIsSubmitting(false);
        setIsSubmitted(true);
        
            // Reset form
            setFormState({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
            
            // Reset after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
        }, 5000);
        } catch (error) {
            console.error('Contact form error:', error);
            setIsSubmitting(false);
            // You might want to show an error message to the user here
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="space-y-6">
            {/* Contact Form */}
            <Card className="rounded-3xl overflow-hidden shadow-md border-blue-100">
                <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-amber-600 text-white px-6 py-5">
                    <div className="flex items-start gap-3">
                        <Mail className="w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold">Send Us a Message</h3>
                            <p className="text-sm opacity-90">Get expert help with your visa application</p>
                        </div>
                    </div>
                </div>
                <CardContent className="p-6 space-y-4">
                    <div className="bg-blue-50 text-blue-800 text-sm p-3 rounded-xl border border-blue-100">
                        Our visa experts are here to help you 24/7. Fill out the form below and we'll get back to you as soon as possible.
                    </div>
                    
                    {isSubmitted ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-green-50 border border-green-200 rounded-md p-4 text-center"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="bg-green-100 rounded-full p-2">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                </div>
                                <h4 className="font-medium text-green-800">Message Sent!</h4>
                                <p className="text-sm text-green-700">
                                    We'll get back to you as soon as possible.
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label htmlFor="support-name" className="block text-sm font-medium text-slate-700">Full Name *</label>
                                <Input 
                                    id="support-name"
                                    name="name"
                                    placeholder="Full Name *" 
                                    value={formState.name}
                                    onChange={handleChange}
                                    required 
                                    className="border-slate-200 focus:border-blue-500 rounded-xl"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label htmlFor="support-email" className="block text-sm font-medium text-slate-700">Email Address *</label>
                                <Input 
                                    id="support-email"
                                    name="email"
                                    type="email" 
                                    placeholder="Email Address *" 
                                    value={formState.email}
                                    onChange={handleChange}
                                    required 
                                    className="border-slate-200 focus:border-blue-500 rounded-xl"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label htmlFor="support-phone" className="block text-sm font-medium text-slate-700">Phone Number *</label>
                                <Input 
                                    id="support-phone"
                                    name="phone"
                                    type="tel" 
                                    placeholder="Phone Number *" 
                                    value={formState.phone}
                                    onChange={handleChange}
                                    required 
                                    className="border-slate-200 focus:border-blue-500 rounded-xl"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label htmlFor="support-message" className="block text-sm font-medium text-slate-700">Your Question *</label>
                                <Textarea 
                                    id="support-message"
                                    name="message"
                                    placeholder="Your Question *" 
                                    rows={4} 
                                    value={formState.message}
                                    onChange={handleChange}
                                    required 
                                    className="resize-none border-slate-200 focus:border-blue-500 rounded-xl"
                                />
                            </div>
                            
                            <Button 
                                type="submit" 
                                className={cn(
                                    "w-full bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 transition-colors flex items-center justify-center gap-2 rounded-full",
                                    isSubmitting && "opacity-80 pointer-events-none"
                                )}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <RefreshCcw className="h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="h-4 w-4 ml-1" />
                                    </>
                                )}
                            </Button>
                        </form>
                    )}
                </CardContent>
            </Card>

            {/* Expert Info */}
            <Card className="rounded-3xl shadow-sm border-blue-100 overflow-hidden">
                <div className="bg-blue-50 px-6 py-5 border-b border-blue-100">
                    <div className="flex items-center gap-2 text-blue-700 font-semibold">
                        <Sun className="w-5 h-5" />
                        <span>EXPERTS AVAILABLE 24/7</span>
                    </div>
                </div>
                <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                            <Mail className="w-4 h-4 text-blue-700" />
                        </div>
                        <a 
                            href="mailto:visa@unitedevisa.com" 
                            className="text-blue-700 hover:underline transition-colors"
                        >
                            visa@unitedevisa.com
                        </a>
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full">
                                <Phone className="w-4 h-4 text-slate-700" />
                            </div>
                            <div>
                                <p className="text-slate-700"><strong>US:</strong> +1 323 286 4541</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full">
                                <Phone className="w-4 h-4 text-slate-700" />
                            </div>
                            <div>
                                <p className="text-slate-700"><strong>UK:</strong> +1 323 286 4541</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pt-2">
                        <a 
                            href="#" 
                            className="flex items-center text-blue-700 hover:text-blue-800 transition-colors text-sm font-medium"
                        >
                            <Globe className="w-4 h-4 mr-1.5" />
                            View worldwide phone support
                        </a>
                    </div>
                </CardContent>
            </Card>

            {/* Confidence Checklist */}
            <Card className="rounded-xl shadow-sm border-slate-200 overflow-hidden">
                <div className="bg-blue-50 px-6 py-5 border-b border-blue-100">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-blue-700" />
                        <h4 className="font-semibold text-blue-800">APPLY WITH CONFIDENCE</h4>
                    </div>
                </div>
                <CardContent className="p-6">
                    <ul className="space-y-3 text-sm">
                        {[
                            { 
                                text: "Fast, secure, and reliable visa processing",
                                icon: <Clock className="w-4 h-4 text-blue-600" />
                            },
                            { 
                                text: "Safe online payment—no hidden fees",
                                icon: <CreditCard className="w-4 h-4 text-blue-600" />
                            },
                            { 
                                text: "Most visas approved within 3 working days",
                                icon: <CheckCircle className="w-4 h-4 text-blue-600" />
                            },
                            { 
                                text: "All applications processed urgently—no extra rush fees",
                                icon: <CheckCircle className="w-4 h-4 text-blue-600" />
                            },
                            { 
                                text: "Transparent pricing, no surprises",
                                icon: <CheckCircle className="w-4 h-4 text-blue-600" />
                            },
                            { 
                                text: "100% Service Fees Returned if Rejected",
                                icon: <ShieldCheck className="w-4 h-4 text-blue-600" />,
                                highlight: true
                            },
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="mt-0.5 shrink-0">
                                    {item.icon}
                                </div>
                                <span className={cn(
                                    "text-slate-700",
                                    item.highlight && "font-semibold text-blue-800"
                                )}>
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}