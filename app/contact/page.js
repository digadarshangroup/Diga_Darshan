"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, MessageSquare, Clock, Users, 
  Shield, CheckCircle, ArrowRight, Send, Building,
  PhoneCall, MessageCircle, Headphones, Globe
} from "lucide-react";
import { Header } from "@/components/header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    district: "",
    message: "",
    serviceInterest: "",
  });

  const [selectedContact, setSelectedContact] = useState("whatsapp");

  const contactOptions = [
    {
      id: "whatsapp",
      name: "WhatsApp Business",
      icon: "💬",
      description: "Instant response, file sharing, voice messages",
      responseTime: "Within 5 minutes",
      availability: "24/7",
      color: "from-green-500 to-emerald-600",
      actionText: "On WhatsApp",
      details: "+91 9040626617",
      action: () => redirectToWhatsApp("Hello Diga Darshan Team, I need to discuss about my business requirements.")
    },
    {
      id: "call",
      name: "Direct Call",
      icon: "📞",
      description: "Voice consultation for detailed discussions",
      responseTime: "Immediate",
      availability: "9 AM - 8 PM",
      color: "from-blue-500 to-cyan-500",
      actionText: "Call Now",
      details: "+91 9040626617",
      action: () => window.location.href = "tel:+919040626617"
    },
    {
      id: "email",
      name: "Email Support",
      icon: "📧",
      description: "Detailed project discussions and documents",
      responseTime: "Within 2 hours",
      availability: "24/7",
      color: "from-red-500 to-pink-500",
      actionText: "Send Email",
      details: "contact@digadarshan.com",
      action: () => window.location.href = "mailto:contact@digadarshan.com?subject=Business Inquiry - Diga Darshan Group"
    },
    {
      id: "visit",
      name: "Office Visit",
      icon: "🏢",
      description: "In-person consultation at our headquarters",
      responseTime: "By appointment",
      availability: "Mon-Sat, 10 AM - 6 PM",
      color: "from-purple-500 to-violet-500",
      actionText: "Book Appointment",
      details: "Bhubaneswar",
      action: () => redirectToWhatsApp("Hello, I want to book an appointment for office visit at Bhubaneswar headquarters.")
    }
  ];

  const serviceInterests = [
    "Fisheries (Aqua-Nivesh)",
    "Trading Education",
    "MSME Business Setup",
    "Agriculture & Horticulture",
    "Infrastructure Development",
    "Government Schemes",
    "Loan Assistance",
    "DPR Preparation"
  ];

  const odishaDistricts = [
    "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack",
    "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur",
    "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha",
    "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada",
    "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"
  ];

  const businessTypes = [
    "New Startup",
    "Existing Business",
    "Expansion Planning",
    "Government Scheme Application",
    "Loan Requirement",
    "Infrastructure Development",
    "Training/Education",
    "Other"
  ];

  const officeLocations = [
    {
      city: "Bhubaneswar",
      type: "Headquarters",
      address: "Saheed Nagar, Bhubaneswar, Odisha - 751007",
      contact: "+91 9040626617",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM",
      services: ["All Services", "Executive Meetings", "Training Sessions"],
      mapLink: "https://maps.app.goo.gl/",
      color: "from-blue-600 to-emerald-600"
    },
    {
      city: "Berhampur",
      type: "Registered Office",
      address: "Berhampur, Ganjam District, Odisha",
      contact: "+91 9040626617",
      timing: "Mon-Sat: 10:00 AM - 7:00 PM",
      services: ["Fisheries Support", "Agriculture", "Local Projects"],
      mapLink: "https://maps.app.goo.gl/",
      color: "from-green-600 to-blue-600"
    },
    {
      city: "District Centers",
      type: "Service Centers",
      address: "Available in 30+ districts across Odisha",
      contact: "+91 9040626617",
      timing: "By Appointment",
      services: ["Field Visits", "Site Surveys", "Local Support"],
      mapLink: "",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const redirectToWhatsApp = (message = "Hello Diga Darshan Team, I want to contact you regarding business services.") => {
    const phoneNumber = "919040626617";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare WhatsApp message with form data
    const whatsappMessage = `*New Contact Form Submission*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Business Type:* ${formData.businessType}
*District:* ${formData.district}
*Service Interest:* ${formData.serviceInterest}
*Message:* ${formData.message}

Please contact me for further discussion.`;
    
    redirectToWhatsApp(whatsappMessage);
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      businessType: "",
      district: "",
      message: "",
      serviceInterest: "",
    });
    
    // Show success message
    alert("Thank you! Your details have been shared with our team. We'll contact you shortly on WhatsApp.");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickMessage = (message) => {
    redirectToWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm tracking-wider">CONNECT WITH DIGADARSHAN</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Let's Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200">
                Business Success
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get expert guidance for your business journey. Multiple contact options available for your convenience.
            </p>
            
            {/* Quick Contact Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                { value: "5 min", label: "Avg. Response Time", icon: <Clock className="w-5 h-5" /> },
                { value: "24/7", label: "WhatsApp Support", icon: <Headphones className="w-5 h-5" /> },
                { value: "95%", label: "Query Resolution", icon: <CheckCircle className="w-5 h-5" /> },
                { value: "10K+", label: "Clients Served", icon: <Users className="w-5 h-5" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                >
                  <div className="text-white">
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Preferred{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Contact Method
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're available through multiple channels for your convenience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`bg-gradient-to-br ${option.color} rounded-2xl p-6 text-white h-full`}>
                  <div className="text-4xl mb-4">{option.icon}</div>
                  
                  <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{option.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{option.responseTime} response</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Globe className="w-4 h-4" />
                      <span>{option.availability}</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-lg font-bold">{option.details}</div>
                  </div>
                  
                  <button
                    onClick={option.action}
                    className="w-full px-4 py-3 bg-white text-slate-900 font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {option.actionText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Message Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Quick Message Options
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                {
                  text: "🐟 Fisheries Business Query",
                  message: "Hello, I need information about fisheries business and PMMSY scheme."
                },
                {
                  text: "📈 Trading Course Details",
                  message: "Hello, I want to learn about your trading education programs."
                },
                {
                  text: "🏢 MSME Registration Help",
                  message: "Hello, I need assistance with MSME registration and loan process."
                },
                {
                  text: "🌱 Agriculture Subsidy Info",
                  message: "Hello, I want to know about agriculture subsidies and setup."
                },
                {
                  text: "📋 Government Schemes",
                  message: "Hello, please guide me about available government schemes."
                },
                {
                  text: "💼 Business Consultation",
                  message: "Hello, I need a detailed business consultation meeting."
                }
              ].map((button, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => handleQuickMessage(button.message)}
                  className="px-4 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:shadow-md hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
                >
                  {button.text}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send Detailed Inquiry
                  </h2>
                </div>
                
                <p className="text-slate-600 mb-8">
                  Fill this form and we'll contact you with customized solutions
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Business Type *
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Business Type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        District in Odisha *
                      </label>
                      <select
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Your District</option>
                        {odishaDistricts.map((district) => (
                          <option key={district} value={district}>{district}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Service</option>
                      {serviceInterests.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Briefly describe your requirements, investment capacity, and expectations..."
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-600 mb-6">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span>Your information is secure and confidential</span>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>
                  
                  <div className="text-center text-sm text-slate-500">
                    We'll contact you on WhatsApp within 5 minutes
                  </div>
                </form>
              </div>
            </motion.div>
            
            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    Our Office Locations
                  </h2>
                </div>
                
                <p className="text-slate-600 mb-8">
                  Visit us for in-person consultation at our offices across Odisha
                </p>
              </div>
              
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`bg-gradient-to-br ${office.color} rounded-2xl p-6 text-white`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{office.city}</h3>
                          <div className="text-white/80 text-sm">{office.type}</div>
                        </div>
                        <Building className="w-6 h-6 text-white/60" />
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                          <div className="text-white/90">{office.address}</div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-white/60" />
                          <div className="text-white font-medium">{office.contact}</div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-white/60" />
                          <div className="text-white/90">{office.timing}</div>
                        </div>
                        
                        <div className="pt-4 border-t border-white/20">
                          <div className="text-sm font-semibold mb-2">Services Available:</div>
                          <div className="flex flex-wrap gap-2">
                            {office.services.map((service, idx) => (
                              <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {office.mapLink && (
                          <a
                            href={office.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-all duration-300"
                          >
                            <MapPin className="w-4 h-4" />
                            View on Google Maps
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Business Hours */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Business Hours
                </h3>
                
                <div className="space-y-3">
                  {[
                    { day: "Monday - Saturday", time: "9:00 AM - 8:00 PM", type: "Office Hours" },
                    { day: "Sunday", time: "10:00 AM - 5:00 PM", type: "WhatsApp Only" },
                    { day: "Emergency Support", time: "24/7 Available", type: "Phone & WhatsApp" }
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-3 border-b border-blue-100 last:border-0 last:pb-0">
                      <div>
                        <div className="font-medium text-slate-900">{schedule.day}</div>
                        <div className="text-sm text-slate-600">{schedule.type}</div>
                      </div>
                      <div className="font-bold text-blue-700">{schedule.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Departments */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Connect with Specific{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Department
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get specialized assistance from our expert teams
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                department: "Fisheries Division",
                contact: "Rajesh Mohanty",
                role: "Head - Aquaculture",
                services: ["PMMSY Scheme", "Fish Farm Setup", "Market Linkage"],
                whatsappMessage: "Hello Rajesh Sir, I need help with fisheries business setup."
              },
              {
                department: "MSME & Finance",
                contact: "Priyanka Das",
                role: "Head - Business Finance",
                services: ["DPR Preparation", "Loan Assistance", "Registration"],
                whatsappMessage: "Hello Priyanka Madam, I need help with MSME registration and loans."
              },
              {
                department: "Trading Education",
                contact: "Trading Department",
                role: "Expert Mentors",
                services: ["Stock Market", "Commodities", "Forex Trading"],
                whatsappMessage: "Hello Trading Team, I want to learn about trading courses."
              },
              {
                department: "Agriculture",
                contact: "Agriculture Team",
                role: "Farm Experts",
                services: ["Organic Farming", "Irrigation", "Subsidy Support"],
                whatsappMessage: "Hello Agriculture Team, I need guidance for farm setup."
              },
              {
                department: "Infrastructure",
                contact: "Suresh Nayak",
                role: "Head - Construction",
                services: ["Borewell", "Shed Construction", "Cold Storage"],
                whatsappMessage: "Hello Suresh Sir, I need construction services for my business."
              },
              {
                department: "Government Schemes",
                contact: "Govt. Liaison Team",
                role: "Scheme Experts",
                services: ["PMEGP", "CGTMSE", "PMFME", "MUKY"],
                whatsappMessage: "Hello Scheme Team, I need help with government scheme applications."
              }
            ].map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-500"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {dept.department}
                </h3>
                
                <div className="mb-4">
                  <div className="font-medium text-slate-700">{dept.contact}</div>
                  <div className="text-sm text-slate-600">{dept.role}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-slate-700 mb-2">Services:</div>
                  <div className="flex flex-wrap gap-2">
                    {dept.services.map((service, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => redirectToWhatsApp(dept.whatsappMessage)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 font-medium rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Contact on WhatsApp
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <PhoneCall className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">URGENT SUPPORT</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              For urgent business queries, government scheme deadlines, or emergency consultations
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Emergency Call</h3>
                <div className="text-2xl font-black text-white mb-3">+91 9040626617</div>
                <p className="text-blue-200 text-sm">Available 24/7 for urgent matters</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-2">Emergency WhatsApp</h3>
                <button
                  onClick={() => redirectToWhatsApp("URGENT: Need immediate business assistance")}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 w-full"
                >
                  Send Emergency Message
                </button>
                <p className="text-blue-200 text-sm mt-3">Response within 2 minutes</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">When to use Emergency Support:</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  "Government scheme deadline approaching",
                  "Bank loan documentation urgency",
                  "Business registration time-sensitive",
                  "Infrastructure project emergency",
                  "Training program immediate requirement",
                  "Any urgent business consultation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Start Your Business Journey Today
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Connect with us and take the first step towards building a successful business with expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => redirectToWhatsApp("Hello Diga Darshan Team, I'm ready to start my business journey. Please guide me.")}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                Start WhatsApp Conversation
              </button>
              
              <a
                href="tel:+919040626617"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Schedule Callback
              </a>
            </div>
            
            <div className="mt-8 text-sm text-slate-500">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span>Expert team available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}