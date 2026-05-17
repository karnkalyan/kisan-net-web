"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast, Toaster } from "react-hot-toast";
import GradientBackground from "@/components/gradient-background";
import { Meteors } from "@/components/meteors";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    inquiryType: "general",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/sendContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          district: "",
          inquiryType: "general",
          message: "",
        });
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <GradientBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-700/70 to-green-600/70 z-10" />
        <div className="container relative z-20 px-4 mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl font-bold tracking-tight md:text-6xl mb-4">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Us</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-300 mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
              Get in touch with our team for inquiries, support, or to join the Kisan Net family
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white relative overflow-hidden md:py-24">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
              <div className="w-20 h-1 mt-4 bg-gradient-to-r from-green-400 to-green-600"></div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 mt-1 rounded-full bg-gradient-to-br from-green-100 to-green-200 transition-colors shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">Our Location</h3>
                    <p className="mt-1 text-gray-600">Kisan Net Headquarters, Baluwatar, Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 mt-1 rounded-full bg-gradient-to-br from-green-100 to-green-200 transition-colors shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="mt-1 text-gray-600">9705403488</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex items-center justify-center w-12 h-12 mt-1 rounded-full bg-gradient-to-br from-green-100 to-green-200 transition-colors shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="mt-1 text-gray-600">support@kisan.net.np</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden border-none shadow-xl">
                <CardContent className="p-0">
                  <div className="p-6 bg-gradient-to-r from-green-600 to-green-500">
                    <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                    <p className="mt-2 text-green-100">
                      Fill out the form below and our team will get back to you as soon as possible
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="district">District</Label>
                        <Select
                          value={formData.district}
                          onValueChange={(value) => handleSelectChange("district", value)}
                        >
                          <SelectTrigger id="district">
                            <SelectValue placeholder="Select your district" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kathmandu">Kathmandu</SelectItem>
                            <SelectItem value="lalitpur">Lalitpur</SelectItem>
                            <SelectItem value="bhaktapur">Bhaktapur</SelectItem>
                            <SelectItem value="jhapa">Jhapa</SelectItem>
                            <SelectItem value="morang">Morang</SelectItem>
                            <SelectItem value="sunsari">Sunsari</SelectItem>
                            <SelectItem value="kavre">Kavre</SelectItem>
                            <SelectItem value="sindhupalchok">Sindhupalchok</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Inquiry Type</Label>
                      <RadioGroup value={formData.inquiryType} onValueChange={handleRadioChange} className="grid gap-2 mt-2 md:grid-cols-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support">Technical Support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="coverage" id="coverage" />
                          <Label htmlFor="coverage">Coverage Request</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="investment" id="investment" />
                          <Label htmlFor="investment">Investment Information</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-green-600 text-white">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
