"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  HeadphonesIcon, 
  MessageCircle, 
  Mail, 
  Phone, 
  Send,
  CheckCircle,
  Clock,
  MapPin
} from "lucide-react";

export default function SupportPage() {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Americas");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setContactForm(prev => ({ ...prev, subject: value }));
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
        body: JSON.stringify({
          name: contactForm.fullName,
          email: contactForm.email,
          phone: contactForm.phoneNumber,
          message: contactForm.message,
          subject: contactForm.subject, // Send subject separately
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setContactForm({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Contact form error:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again.');
    }
  };

  const regionOffices = {
    "Americas": {
      imageUrl: "/images/support/americas-support.jpg", // Placeholder for Americas region image
      offices: [
        {
          country: "USA",
          flag: "🇺🇸",
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541",
          email: "visa@unitedevisa.com",
          hours: "24/7"
        },
        {
          country: "Canada", 
          flag: "🇨🇦",
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541", 
          email: "visa@unitedevisa.com",
          hours: "24/7"
        },
        {
          country: "Brazil",
          flag: "🇧🇷", 
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541",
          email: "visa@unitedevisa.com", 
          hours: "Mon-Fri 8AM-6PM"
        }
      ]
    },
    "EMEA": {
      imageUrl: "/images/support/emea-support.jpg", // Placeholder for EMEA region image
      offices: [
        {
          country: "UK",
          flag: "🇬🇧",
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541",
          email: "visa@unitedevisa.com",
          hours: "24/7"
        },
        {
          country: "Germany",
          flag: "🇩🇪",
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541",
          email: "visa@unitedevisa.com",
          hours: "Mon-Fri 9AM-6PM"
        },
        {
          country: "UAE",
          flag: "🇦🇪",
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541",
          email: "visa@unitedevisa.com",
          hours: "Sun-Thu 9AM-6PM"
        }
      ]
    },
    "Asia Pacific": {
      imageUrl: "/images/support/asia-pacific-support.jpg", // Placeholder for Asia Pacific region image
      offices: [
        {
          country: "Australia",
          flag: "🇦🇺", 
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541",
          email: "visa@unitedevisa.com",
          hours: "Mon-Fri 9AM-5PM"
        },
        {
          country: "Singapore",
          flag: "🇸🇬",
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541",
          email: "visa@unitedevisa.com", 
          hours: "Mon-Fri 9AM-6PM"
        },
        {
          country: "Japan",
          flag: "🇯🇵",
          address: "1308 E Colorado Blvd, #2244, Pasadena, CA 91106",
          phone: "+1 323 286 4541",
          email: "visa@unitedevisa.com",
          hours: "Mon-Fri 9AM-6PM"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-14 sm:py-18">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <HeadphonesIcon className="h-4 w-4" />
            Support Center
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Get help with your visa application
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
            Reach our team for application status, document questions, and account support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-sm border border-slate-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Can we help?</h2>
                <p className="text-slate-600">Send us a message and we’ll reply within one business day.</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-emerald-700 mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={contactForm.fullName}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phoneNumber" className="text-sm font-medium text-slate-700">
                        Phone Number *
                      </Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={contactForm.phoneNumber}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-slate-700">
                      Subject / Category *
                    </Label>
                    <Select value={contactForm.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Please select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="application-status">Application Status</SelectItem>
                        <SelectItem value="payment-issue">Payment Issue</SelectItem>
                        <SelectItem value="document-upload">Document Upload</SelectItem>
                        <SelectItem value="visa-requirements">Visa Requirements</SelectItem>
                        <SelectItem value="refund-request">Refund Request</SelectItem>
                        <SelectItem value="technical-support">Technical Support</SelectItem>
                        <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px]"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 text-lg font-medium"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>SUBMIT</span>
                        </div>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-slate-500 text-center">
                    By clicking Submit, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 24/7 Support Center */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-sm border border-slate-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">24/7 Support Center</h2>
                <p className="text-slate-600">We’re available around the clock for urgent requests.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Customer Service */}
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-100 p-3 rounded-full">
                    <HeadphonesIcon className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">Customer Service Center</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Call us for immediate assistance with your visa application or services.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">🇺🇸</span>
                        <span className="text-sm font-medium">+1 323 286 4541</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3 text-slate-400" />
                        <span className="text-sm">visa@unitedevisa.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suggestions or Complaint */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-50 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">Suggestions or Complaint</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Share your feedback or submit a complaint about our services.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">🇺🇸</span>
                        <span className="text-sm font-medium">+1 323 286 4541</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3 text-slate-400" />
                        <span className="text-sm">visa@unitedevisa.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Worldwide Network */}
        <div className="mt-16">
          <Card className="shadow-sm border border-slate-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Our worldwide network</h2>
                <p className="text-slate-600">Regional offices and support lines to help across time zones.</p>
              </div>

              {/* Region Tabs */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-slate-100 rounded-full p-1">
                  {Object.keys(regionOffices).map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                        selectedRegion === region
                          ? "bg-emerald-700 text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-800"
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Image */}
              <div className="mb-8">
                <img 
                  src={regionOffices[selectedRegion as keyof typeof regionOffices].imageUrl} 
                  alt={`${selectedRegion} Region`}
                  className="w-full h-56 object-cover rounded-2xl border border-slate-200"
                />
              </div>

              {/* Office Details - Responsive Design */}
              <div className="block md:hidden space-y-4">
                {/* Mobile Card Layout */}
                {regionOffices[selectedRegion as keyof typeof regionOffices].offices.map((office, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl">{office.flag}</span>
                      <span className="font-semibold text-slate-800 text-lg">{office.country}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Phone className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Contact Number</div>
                          <span className="text-emerald-600 font-medium text-sm">{office.phone}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Mail className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Email</div>
                          <span className="text-blue-600 text-sm break-all">{office.email}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Clock className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Hours of Operation</div>
                          <span className="text-slate-600 text-sm">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table Layout */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm table-fixed">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left p-4 font-semibold text-slate-700 w-1/4">Country</th>
                      <th className="text-left p-4 font-semibold text-slate-700 w-1/4">Contact Number</th>
                      <th className="text-left p-4 font-semibold text-slate-700 w-1/4">Email</th>
                      <th className="text-left p-4 font-semibold text-slate-700 w-1/4">Hours of Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionOffices[selectedRegion as keyof typeof regionOffices].offices.map((office, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{office.flag}</span>
                            <span className="font-medium text-slate-800">{office.country}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-emerald-600 font-medium">{office.phone}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span className="text-blue-600">{office.email}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-slate-500 flex-shrink-0" />
                            <span className="text-slate-600">{office.hours}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}