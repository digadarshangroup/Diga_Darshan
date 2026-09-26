"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
  PhoneCall,
  MessageCircle,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section, SectionHeading, Reveal } from "@/components/ui/section";
import {
  badge,
  btn,
  btnSize,
  categoryAccent,
  container,
  containerNarrow,
  heading,
  sectionY,
  surface,
} from "@/lib/ui";

/* Form field tokens — one definition so every input, select and textarea
   shares the same height, type size (16px, so iOS doesn't zoom) and focus ring. */
const fieldBase =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 shadow-sm transition-colors hover:border-slate-400 focus:outline-none focus:border-brand-600 focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:border-brand-600";
const selectBase = `${fieldBase} appearance-none pr-11 cursor-pointer`;
const labelBase = "block text-sm font-medium text-slate-800 mb-1.5";

function Required() {
  return (
    <span className="text-brand-700" aria-hidden="true">
      *
    </span>
  );
}

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
      icon: MessageCircle,
      accent: categoryAccent.green,
      description: "Instant response, file sharing, voice messages",
      responseTime: "Within 5 minutes",
      availability: "24/7",
      actionText: "On WhatsApp",
      details: "+91 7750878444",
      action: () => redirectToWhatsApp("Hello Matrubhoomi Team, I need to discuss about my business requirements.")
    },
    {
      id: "call",
      name: "Direct Call",
      icon: Phone,
      accent: categoryAccent.blue,
      description: "Voice consultation for detailed discussions",
      responseTime: "Immediate",
      availability: "9 AM - 8 PM",
      actionText: "Call Now",
      details: "+91 7750878444",
      action: () => window.location.href = "tel:+917750878444"
    },
    {
      id: "email",
      name: "Email Support",
      icon: Mail,
      accent: categoryAccent.amber,
      description: "Detailed project discussions and documents",
      responseTime: "Within 2 hours",
      availability: "24/7",
      actionText: "Send Email",
      details: "hr@matrubhumi.net",
      action: () => window.location.href = "mailto:hr@matrubhumi.net?subject=Business Inquiry - Matrubhoomi"
    },
    {
      id: "visit",
      name: "Office Visit",
      icon: Building2,
      accent: categoryAccent.violet,
      description: "In-person consultation at our headquarters",
      responseTime: "By appointment",
      availability: "Mon-Sat, 10 AM - 6 PM",
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
      contact: "+91 7750878444",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM",
      services: ["All Services", "Executive Meetings", "Training Sessions"],
      mapLink: "https://maps.app.goo.gl/",
    },
    {
      city: "Berhampur",
      type: "Registered Office",
      address: "Berhampur, Ganjam District, Odisha",
      contact: "+91 7750878444",
      timing: "Mon-Sat: 10:00 AM - 7:00 PM",
      services: ["Fisheries Support", "Agriculture", "Local Projects"],
      mapLink: "https://maps.app.goo.gl/",
    },
    {
      city: "District Centers",
      type: "Service Centers",
      address: "Available in 30+ districts across Odisha",
      contact: "+91 7750878444",
      timing: "By Appointment",
      services: ["Field Visits", "Site Surveys", "Local Support"],
      mapLink: "",
    }
  ];

  const redirectToWhatsApp = (message = "Hello Matrubhoomi Team, I want to contact you regarding business services.") => {
    const phoneNumber = "917750878444";
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

  const quickMessages = [
    {
      text: "Fisheries business query",
      message: "Hello, I need information about fisheries business and PMMSY scheme."
    },
    {
      text: "Trading course details",
      message: "Hello, I want to learn about your trading education programs."
    },
    {
      text: "MSME registration help",
      message: "Hello, I need assistance with MSME registration and loan process."
    },
    {
      text: "Agriculture subsidy info",
      message: "Hello, I want to know about agriculture subsidies and setup."
    },
    {
      text: "Government schemes",
      message: "Hello, please guide me about available government schemes."
    },
    {
      text: "Business consultation",
      message: "Hello, I need a detailed business consultation meeting."
    }
  ];

  const departments = [
    {
      department: "Fisheries Division",
      contact: "Fisheries Team",
      role: "Aquaculture Specialists",
      services: ["PMMSY Scheme", "Fish Farm Setup", "Market Linkage"],
      whatsappMessage: "Hello, I need help with fisheries business setup."
    },
    {
      department: "MSME & Finance",
      contact: "Finance Team",
      role: "Business Finance Specialists",
      services: ["DPR Preparation", "Loan Assistance", "Registration"],
      whatsappMessage: "Hello, I need help with MSME registration and loans."
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
      contact: "Construction Team",
      role: "Civil & Infrastructure Specialists",
      services: ["Borewell", "Shed Construction", "Cold Storage"],
      whatsappMessage: "Hello, I need construction services for my business."
    },
    {
      department: "Government Schemes",
      contact: "Govt. Liaison Team",
      role: "Scheme Experts",
      services: ["PMEGP", "CGTMSE", "PMFME", "MUKY"],
      whatsappMessage: "Hello Scheme Team, I need help with government scheme applications."
    }
  ];

  const businessHours = [
    { day: "Monday - Saturday", time: "9:00 AM - 8:00 PM", type: "Office Hours" },
    { day: "Sunday", time: "10:00 AM - 5:00 PM", type: "WhatsApp Only" },
    { day: "Emergency Support", time: "24/7 Available", type: "Phone & WhatsApp" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className={`relative ${container} py-14 sm:py-20`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className={badge.onDark}>
              <MessageCircle className="w-3.5 h-3.5" />
              Contact Matrubhoomi
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Talk to us about your business
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Get expert guidance for your business journey. Reach our team by WhatsApp, phone,
              email or in person — whichever suits you best.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => redirectToWhatsApp("Hello Matrubhoomi Team, I need to discuss about my business requirements.")}
                className={`${btn.whatsapp} ${btnSize.lg}`}
              >
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </button>
              <a href="tel:+917750878444" className={`${btn.onDarkOutline} ${btnSize.lg}`}>
                <Phone className="w-4 h-4" />
                +91 7750878444
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-slate-300">
              {[
                "24/7 WhatsApp support",
                "Free initial consultation",
                "7 business domains",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Contact channels ───────────────────────────────────── */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Ways to reach us"
          title="Choose your preferred contact method"
          subtitle="We're available through multiple channels — pick the one that works for you."
          className="mb-10 lg:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            const isSelected = selectedContact === option.id;

            return (
              <Reveal key={option.id} delay={Math.min(index * 0.05, 0.2)} className="h-full">
                <article
                  className={`h-full flex flex-col ${surface.cardInteractive} p-5 sm:p-6 ${
                    isSelected ? "ring-1 ring-brand-200 border-brand-200" : ""
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${option.accent.chip}`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                    {option.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {option.description}
                  </p>

                  <dl className="mt-4 space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <dt className="sr-only">Response time</dt>
                      <dd>{option.responseTime}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <dt className="sr-only">Availability</dt>
                      <dd>{option.availability}</dd>
                    </div>
                  </dl>

                  {/* mt-auto keeps the detail + action block aligned across cards */}
                  <div className="mt-auto pt-4">
                    <p className="text-sm font-medium text-slate-900 break-words">
                      {option.details}
                    </p>

                    <button
                      onClick={() => {
                        setSelectedContact(option.id);
                        option.action();
                      }}
                      className={`${btn.secondary} ${btnSize.md} min-h-[44px] w-full mt-4`}
                    >
                      {option.actionText}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Quick messages */}
        <Reveal className="mt-12 lg:mt-16">
          <div className={`${surface.card} p-5 sm:p-7`}>
            <h3 className={heading.h3}>Start with a quick question</h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Tap a topic and we'll open WhatsApp with the message ready to send.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {quickMessages.map((button) => (
                <button
                  key={button.text}
                  onClick={() => handleQuickMessage(button.message)}
                  className={`${btn.secondary} ${btnSize.md} min-h-[44px]`}
                >
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Enquiry form + offices ─────────────────────────────── */}
      <section className={`${sectionY} bg-white`}>
        <div className={container}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className={`${surface.card} p-5 sm:p-8`}>
                <div className={badge.brand}>
                  <Send className="w-3.5 h-3.5" />
                  Enquiry form
                </div>

                <h2 className={`mt-4 ${heading.h2}`}>Send a detailed enquiry</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Tell us what you're planning and we'll come back with a tailored answer.
                  Fields marked <span className="text-brand-700 font-semibold">*</span> are required.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                  {/* Group 1 — about you */}
                  <fieldset className="space-y-5">
                    <legend className="p-0 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Your details
                    </legend>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className={labelBase}>
                          Your name <Required />
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          autoComplete="name"
                          className={fieldBase}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className={labelBase}>
                          Phone number <Required />
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          autoComplete="tel"
                          inputMode="tel"
                          className={fieldBase}
                          placeholder="+91 00000 00000"
                        />
                        <p className="mt-1.5 text-xs text-slate-500">
                          We'll reply on this number via WhatsApp.
                        </p>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className={labelBase}>
                        Email address
                        <span className="ml-1.5 font-normal text-slate-500">(optional)</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        autoComplete="email"
                        inputMode="email"
                        className={fieldBase}
                        placeholder="your@email.com"
                      />
                    </div>
                  </fieldset>

                  <div className="border-t border-slate-200" />

                  {/* Group 2 — about the requirement */}
                  <fieldset className="space-y-5">
                    <legend className="p-0 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      About your requirement
                    </legend>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-business-type" className={labelBase}>
                          Business type <Required />
                        </label>
                        <div className="relative">
                          <select
                            id="contact-business-type"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleInputChange}
                            required
                            className={selectBase}
                          >
                            <option value="">Select business type</option>
                            {businessTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-district" className={labelBase}>
                          District in Odisha <Required />
                        </label>
                        <div className="relative">
                          <select
                            id="contact-district"
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            required
                            className={selectBase}
                          >
                            <option value="">Select your district</option>
                            {odishaDistricts.map((district) => (
                              <option key={district} value={district}>{district}</option>
                            ))}
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-service" className={labelBase}>
                        Service interest <Required />
                      </label>
                      <div className="relative">
                        <select
                          id="contact-service"
                          name="serviceInterest"
                          value={formData.serviceInterest}
                          onChange={handleInputChange}
                          required
                          className={selectBase}
                        >
                          <option value="">Select a service</option>
                          {serviceInterests.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className={labelBase}>
                        Your message <Required />
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className={`${fieldBase} resize-y min-h-[120px]`}
                        placeholder="Briefly describe your requirements, investment capacity, and expectations..."
                      />
                    </div>
                  </fieldset>

                  {/* Submit */}
                  <div className="space-y-4">
                    <div className={`flex items-start gap-3 p-3.5 ${surface.panel}`}>
                      <Shield className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600">
                        Your information is secure and confidential. Submitting opens WhatsApp with
                        your details pre-filled — nothing is sent until you press send there.
                      </p>
                    </div>

                    <button type="submit" className={`${btn.whatsapp} ${btnSize.lg} w-full`}>
                      <Send className="w-4 h-4" />
                      Send via WhatsApp
                    </button>

                    <p className="text-center text-sm text-slate-500">
                      We typically reply on WhatsApp within 5 minutes.
                    </p>
                  </div>
                </form>
              </div>
            </Reveal>

            {/* Offices */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <h2 className={heading.h2}>Our offices</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Visit us for an in-person consultation at our offices across Odisha.
                </p>

                <div className="mt-6 space-y-4">
                  {officeLocations.map((office) => (
                    <article key={office.city} className={`${surface.card} p-5`}>
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 ${categoryAccent.green.chip}`}
                        >
                          <Building2 className="w-4 h-4" strokeWidth={2} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-semibold text-slate-900">{office.city}</h3>
                          <p className="text-sm text-slate-500">{office.type}</p>
                        </div>
                      </div>

                      <dl className="mt-4 space-y-2.5 text-sm">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <dd className="text-slate-600">{office.address}</dd>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <Phone className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <dd>
                            <a
                              href="tel:+917750878444"
                              className="inline-block py-1 -my-1 font-medium text-slate-900 hover:text-brand-700 transition-colors"
                            >
                              {office.contact}
                            </a>
                          </dd>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <dd className="text-slate-600">{office.timing}</dd>
                        </div>
                      </dl>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2.5">
                          Services available
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {office.services.map((service) => (
                            <li key={service} className={badge.neutral}>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {office.mapLink && (
                        <a
                          href={office.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${btn.ghost} ${btnSize.sm} min-h-[44px] mt-3 -ml-3.5`}
                        >
                          <MapPin className="w-4 h-4" />
                          View on Google Maps
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </article>
                  ))}
                </div>

                {/* Business hours */}
                <div className={`mt-4 ${surface.panel} p-5`}>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                    <Clock className="w-4 h-4 text-brand-600" />
                    Business hours
                  </h3>

                  <dl className="mt-4 divide-y divide-slate-200">
                    {businessHours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                      >
                        <dt>
                          <span className="block text-sm font-medium text-slate-900">
                            {schedule.day}
                          </span>
                          <span className="block text-xs text-slate-500">{schedule.type}</span>
                        </dt>
                        <dd className="text-sm font-semibold text-brand-700 text-right whitespace-nowrap">
                          {schedule.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Departments ────────────────────────────────────────── */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Departments"
          title="Connect with a specific team"
          subtitle="Get specialised assistance straight from the team that handles your domain."
          className="mb-10 lg:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {departments.map((dept, index) => (
            <Reveal key={dept.department} delay={Math.min(index * 0.05, 0.25)} className="h-full">
              <article className={`h-full flex flex-col ${surface.cardInteractive} p-5 sm:p-6`}>
                <h3 className="text-base font-semibold text-slate-900 leading-snug">
                  {dept.department}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  <span className="font-medium text-slate-800">{dept.contact}</span>
                  <span className="text-slate-400"> · </span>
                  {dept.role}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {dept.services.map((service) => (
                    <li key={service} className={badge.brand}>
                      {service}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => redirectToWhatsApp(dept.whatsappMessage)}
                    className={`${btn.secondary} ${btnSize.md} min-h-[44px] w-full`}
                  >
                    <MessageSquare className="w-4 h-4 text-slate-400" />
                    Contact on WhatsApp
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Urgent support ─────────────────────────────────────── */}
      <section className={`${sectionY} bg-slate-900`}>
        <div className={containerNarrow}>
          <Reveal>
            <div className={badge.onDark}>
              <PhoneCall className="w-3.5 h-3.5" />
              Urgent support
            </div>

            <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Need immediate assistance?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              For urgent business queries, government scheme deadlines or emergency consultations,
              reach us directly on these channels.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
            <Reveal>
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 ring-1 ring-white/20 mb-4">
                  <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-white">Emergency call</h3>
                <p className="mt-1.5 text-sm text-slate-400">Available 24/7 for urgent matters.</p>
                <a
                  href="tel:+917750878444"
                  className={`${btn.onDark} ${btnSize.md} min-h-[44px] w-full mt-5`}
                >
                  <Phone className="w-4 h-4" />
                  +91 7750878444
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 ring-1 ring-white/20 mb-4">
                  <MessageCircle className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-white">Emergency WhatsApp</h3>
                <p className="mt-1.5 text-sm text-slate-400">Response within 2 minutes.</p>
                <button
                  onClick={() => redirectToWhatsApp("URGENT: Need immediate business assistance")}
                  className={`${btn.whatsapp} ${btnSize.md} min-h-[44px] w-full mt-5`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Send emergency message
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="mt-5 rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-base font-semibold text-white">
                When to use emergency support
              </h3>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  "Government scheme deadline approaching",
                  "Bank loan documentation urgency",
                  "Business registration time-sensitive",
                  "Infrastructure project emergency",
                  "Training program immediate requirement",
                  "Any urgent business consultation"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────── */}
      <section className={`${sectionY} bg-white`}>
        <div className={containerNarrow}>
          <Reveal>
            <div className={`${surface.card} px-5 py-10 sm:px-10 sm:py-14 text-center`}>
              <h2 className={heading.h2}>Start your business journey today</h2>
              <p className={`mt-4 ${heading.lead} max-w-2xl mx-auto`}>
                Connect with us and take the first step towards building a successful business
                with expert guidance.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => redirectToWhatsApp("Hello Matrubhoomi Team, I'm ready to start my business journey. Please guide me.")}
                  className={`${btn.whatsapp} ${btnSize.lg}`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Start WhatsApp conversation
                </button>

                <a href="tel:+917750878444" className={`${btn.secondary} ${btnSize.lg}`}>
                  <Phone className="w-4 h-4" />
                  Schedule callback
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-sm text-slate-600">
                {[
                  "Free initial consultation",
                  "No commitment required",
                  "Expert team available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
