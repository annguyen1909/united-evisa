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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setContactForm({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const regionOffices = {
    "Americas": {
      imageUrl: "/images/support/americas-support.jpg", // Placeholder for Americas region image
      offices: [
        {
          country: "USA",
          flag: "🇺🇸",
          address: "123 Business Ave, Suite 100, New York, NY 10001",
          phone: "+1 800 123 4567",
          email: "support-us@unitedvisa.com",
          hours: "24/7"
        },
        {
          country: "Canada", 
          flag: "🇨🇦",
          address: "789 Commerce Blvd, Toronto, ON M5H 3M7",
          phone: "+1 416 123 4567", 
          email: "support-ca@unitedvisa.com",
          hours: "24/7"
        },
        {
          country: "Brazil",
          flag: "🇧🇷", 
          address: "Av. Paulista 1000, São Paulo, SP 01310-100",
          phone: "+55 11 1234 5678",
          email: "support-br@unitedvisa.com", 
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
          address: "45 Business Street, London, SW1A 1AA",
          phone: "+44 20 7123 4567",
          email: "support-uk@unitedvisa.com",
          hours: "24/7"
        },
        {
          country: "Germany",
          flag: "🇩🇪",
          address: "Friedrichstraße 123, 10117 Berlin",
          phone: "+49 30 1234 5678",
          email: "support-de@unitedvisa.com",
          hours: "Mon-Fri 9AM-6PM"
        },
        {
          country: "UAE",
          flag: "🇦🇪",
          address: "Sheikh Zayed Road, Dubai",
          phone: "+971 4 123 4567",
          email: "support-ae@unitedvisa.com",
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
          address: "321 Corporate Plaza, Sydney, NSW 2000",
          phone: "+61 2 9123 4567",
          email: "support-au@unitedvisa.com",
          hours: "Mon-Fri 9AM-5PM"
        },
        {
          country: "Singapore",
          flag: "🇸🇬",
          address: "1 Marina Bay, Singapore 018989",
          phone: "+65 6123 4567",
          email: "support-sg@unitedvisa.com", 
          hours: "Mon-Fri 9AM-6PM"
        },
        {
          country: "Japan",
          flag: "🇯🇵",
          address: "Tokyo Station, Tokyo 100-0005",
          phone: "+81 3 1234 5678",
          email: "support-jp@unitedvisa.com",
          hours: "Mon-Fri 9AM-6PM"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in touch with United eVisa</h1>
          <p className="text-xl text-emerald-100">We're here to help with your visa application journey</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Can We Help You?</h2>
                <p className="text-slate-600">Feel free to contact us below!</p>
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
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium"
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
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">24/7 Support Center</h2>
                <p className="text-slate-600">We're available around the clock to assist you</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Customer Service */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <HeadphonesIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">Customer Service Center</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Call us for immediate assistance with your visa application or services.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">🇺🇸</span>
                        <span className="text-sm font-medium">+1 800 123 4567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3 text-slate-400" />
                        <span className="text-sm">support@unitedvisa.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suggestions or Complaint */}
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">Suggestions or Complaint</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Share your feedback or submit a complaint about our services.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">🇺🇸</span>
                        <span className="text-sm font-medium">+1 800 987 6543</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3 text-slate-400" />
                        <span className="text-sm">feedback@unitedvisa.com</span>
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
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Our Worldwide Network</h2>
                <p className="text-slate-600">United eVisa offices around the world ready to assist you</p>
              </div>

              {/* Region Tabs */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-slate-100 rounded-lg p-1">
                  {Object.keys(regionOffices).map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                        selectedRegion === region
                          ? "bg-emerald-600 text-white shadow-sm"
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
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Office Details Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left p-4 font-semibold text-slate-700">Country</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Contact Number</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Email</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Hours of Operation</th>
                      <th className="text-left p-4 font-semibold text-slate-700">Address</th>
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
                            <Phone className="h-4 w-4 text-emerald-600" />
                            <span className="text-emerald-600 font-medium">{office.phone}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-blue-600" />
                            <span className="text-blue-600">{office.email}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-slate-500" />
                            <span className="text-slate-600">{office.hours}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-slate-500" />
                            <span className="text-slate-600 text-sm">{office.address}</span>
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