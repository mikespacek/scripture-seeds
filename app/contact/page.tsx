"use client";

import { useState } from "react";
import { Star, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    // Simulate form submission
    setTimeout(() => {
      try {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        setIsSubmitting(false);
        setSubmitError(true);
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-[#fff9f3]">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-16 h-16 text-[#ffd700] animate-pulse">
          <Star className="w-full h-full fill-current" />
        </div>
        <div className="absolute bottom-20 left-10 w-12 h-12 text-[#ffd700] animate-pulse delay-300">
          <Star className="w-full h-full fill-current" />
        </div>
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[150px]">
          <div className="w-full h-full rounded-t-full bg-gradient-to-r from-[#87CEEB] via-[#e6d5d2] to-[#ba8f95] opacity-20"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto slide-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#e6d5d2] text-[#ba8f95] font-medium text-sm mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#443736] mb-6 leading-tight">
              We'd Love to <span className="text-[#ba8f95]">Hear from You</span>
            </h1>
            <p className="text-lg text-[#8a7370] mb-8">
              Have questions about our products or need support? We're here to help you on your journey of nurturing faith.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 slide-up">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                {submitSuccess && (
                  <div className="bg-[#f5ebe0] border border-[#ba8f95] text-[#443736] px-6 py-4 rounded-2xl mb-6">
                    <p>Your message has been sent successfully! We'll get back to you soon. 💖</p>
                  </div>
                )}
                
                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl mb-6">
                    <p>There was an error sending your message. Please try again later.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#443736] font-medium mb-2">
                      Your Name <span className="text-[#ba8f95]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-[#e6d5d2] rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#ba8f95] text-[#443736]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#443736] font-medium mb-2">
                      Email Address <span className="text-[#ba8f95]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-[#e6d5d2] rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#ba8f95] text-[#443736]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-[#443736] font-medium mb-2">
                      Subject <span className="text-[#ba8f95]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-[#e6d5d2] rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#ba8f95] text-[#443736]"
                      required
                    >
                      <option value="">Please select</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Status</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[#443736] font-medium mb-2">
                      Message <span className="text-[#ba8f95]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-[#e6d5d2] rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#ba8f95] text-[#443736]"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ba8f95] hover:bg-[#8e5f66] text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="lg:w-1/3 space-y-8 slide-up stagger-1">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-serif font-bold text-[#443736] mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start slide-up stagger-2">
                    <div className="w-12 h-12 bg-[#f5ebe0] rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-[#ba8f95]" />
                    </div>
                    <div>
                      <h3 className="text-[#443736] font-medium">Email</h3>
                      <p className="text-[#8a7370]">support@scriptureseeds.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start slide-up stagger-3">
                    <div className="w-12 h-12 bg-[#f5ebe0] rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-[#ba8f95]" />
                    </div>
                    <div>
                      <h3 className="text-[#443736] font-medium">Phone</h3>
                      <p className="text-[#8a7370]">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start slide-up stagger-4">
                    <div className="w-12 h-12 bg-[#f5ebe0] rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-[#ba8f95]" />
                    </div>
                    <div>
                      <h3 className="text-[#443736] font-medium">Business Hours</h3>
                      <p className="text-[#8a7370]">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl shadow-xl p-8 slide-up stagger-5">
                <h2 className="text-2xl font-serif font-bold text-[#443736] mb-6">FAQ</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#443736] font-medium mb-2">How long does shipping take?</h3>
                    <p className="text-[#8a7370]">Standard shipping typically takes 3-5 business days within the continental US.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#443736] font-medium mb-2">Do you offer international shipping?</h3>
                    <p className="text-[#8a7370]">Yes! We ship worldwide. International shipping times vary by location.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#443736] font-medium mb-2">Can I track my order?</h3>
                    <p className="text-[#8a7370]">Yes, you'll receive a tracking number via email once your order ships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 