"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ChevronRight, MapPin, Phone, Globe } from "lucide-react";

interface FooterProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    paymentLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const defaultSections = [
    {
        title: "About Us",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Terms Of Service", href: "/terms" },
            { name: "Legal Agreements", href: "/legal" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Refund Policy", href: "/refund-policy" },
            { name: "Disclaimers", href: "/disclaimers" },
            { name: "Cookie Policy", href: "/cookie-policy" },
            { name: "Digital Services Act", href: "/digital-services-act" },
        ],
    },
    {
        title: "Our Services",
        links: [
            { name: "Visa Information", href: "/visa-info" },
            { name: "Check Visa Eligibility", href: "/check-requirements" },
            { name: "Check Visa Status", href: "/track" },
            { name: "Visa Process", href: "/process" },
            { name: "Pricing", href: "/pricing" },
        ],
    },
    {
        title: "Information",
        links: [
            { name: "Make Payment", href: "/payment" },
            { name: "Embassy List", href: "/embassies" },
            { name: "FAQs", href: "/faq" },
            { name: "Payment Guidelines", href: "/payment-guide" },
        ],
    },
    {
        title: "Most Requested",
        links: [
            { name: "Kenya Visa", href: "/destination/kenya" },
            { name: "Uganda Visa", href: "/destination/uganda" },
            { name: "Malaysia Visa", href: "/destination/malaysia" },
            { name: "Indonesia Visa", href: "/destination/indonesia" },
            { name: "Ethiopia Visa", href: "/destination/ethiopia" },
            { name: "Sri Lanka Visa", href: "/destination/sri-lanka" },
        ],
    },
];

const defaultSocialLinks = [
    { icon: <FaInstagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaFacebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaLinkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
];

const defaultPaymentLinks = [
    { icon: <FaCcVisa size={28} />, href: "#", label: "Visa" },
    { icon: <FaCcMastercard size={28} />, href: "#", label: "Mastercard" },
    { icon: <FaCcAmex size={28} />, href: "#", label: "American Express" },
    { icon: <FaPaypal size={28} />, href: "#", label: "PayPal" },
];

const defaultLegalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Legal Agreements", href: "/legal" },
    { name: "Disclaimers", href: "/disclaimers" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Digital Services Act", href: "/digital-services-act" },
];

export function Footer({
    sections = defaultSections,
    socialLinks = defaultSocialLinks,
    paymentLinks = defaultPaymentLinks,
    copyright = "© 2025 Unitedevisa.com All rights reserved.",
    legalLinks = defaultLegalLinks,
}: FooterProps) {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log("Subscribe email:", email);
        setEmail("");
        alert("Thank you for subscribing to our newsletter!");
    };

    return (
        <footer className="bg-slate-900 text-slate-300">
            {/* Newsletter Section */}
            <div className="bg-emerald-800 py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="md:max-w-md">
                            <h3 className="text-white text-xl font-bold mb-2">Stay Updated</h3>
                            <p className="text-emerald-100 text-sm">
                                Subscribe to our newsletter for the latest visa news, travel updates and special offers.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe} className="w-full md:w-auto flex gap-2">
                            <div className="relative flex-grow">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                                <Input
                                    type="email"
                                    placeholder="Your email address"
                                    className="pl-10 pr-3 py-2 bg-emerald-700 border-emerald-600 text-white placeholder:text-emerald-300 w-full md:min-w-[300px] focus:border-emerald-500 focus:ring-emerald-500"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="bg-white text-emerald-800 hover:bg-emerald-50">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="pt-16 pb-12 px-4 sm:px-6 border-b border-slate-800">
                <div className="max-w-6xl mx-auto">
                    {/* Top Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="inline-block mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src="/images/logo.png"
                                            alt="eVisa Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="text-white text-xl font-bold">UnitedEVISA</div>
                                </div>
                            </Link>
                            <p className="text-slate-400 mb-6 pr-8">
                                UnitedEVISA is a leading global visa service provider, helping travelers 
                                secure visas quickly and efficiently for destinations worldwide. With our 
                                expert team and streamlined process, your visa application is in good hands.
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => (
                                    <Link
                                        key={idx}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="bg-slate-800 hover:bg-emerald-700 text-slate-300 hover:text-white p-2 rounded-full transition-colors"
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Footer Links */}
                        {sections.map((section, idx) => (
                            <div key={idx} className="lg:col-span-3/4">
                                <h3 className="text-white text-lg font-semibold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link 
                                                href={link.href}
                                                className="text-slate-400 hover:text-emerald-400 flex items-center text-sm transition-colors"
                                            >
                                                <ChevronRight className="h-3 w-3 mr-1" />
                                                <span>{link.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact and Payment */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-800 pt-8">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-emerald-500 mt-0.5" />
                                    <span className="text-slate-400 text-sm">
                                        123 eVisa Street, International City, 10001
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-emerald-500" />
                                    <span className="text-slate-400 text-sm">
                                        +1 323 286 4541
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-emerald-500" />
                                    <span className="text-slate-400 text-sm">
                                        visa@unitedevisa.com
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Globe className="h-5 w-5 text-emerald-500" />
                                    <span className="text-slate-400 text-sm">
                                        www.unitedevisa.com
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Payment Methods */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">We Accept</h3>
                            <div className="flex flex-wrap gap-3">
                                {paymentLinks.map((payment, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-slate-800 text-white p-2 rounded-md"
                                        title={payment.label}
                                    >
                                        {payment.icon}
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-400 text-xs mt-4">
                                All payments are secure and encrypted. We never store your full payment details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-6 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">{copyright}</p>
                    <div className="flex gap-6">
                        {legalLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-slate-400 hover:text-emerald-400 text-sm transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}