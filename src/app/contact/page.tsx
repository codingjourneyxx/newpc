"use client";

import { useState, useCallback } from "react";
import { Mail01, Phone, MarkerPin01, Send01, Clock, MessageCircle01 } from "@untitledui/icons";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import { Button } from "@/components/base/buttons/button";
import { Header } from "@/app/components/header";

// Hoisted static data
const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "+91 9022726250",
        href: "tel:+919022726250",
        description: "Nibboo Hassan Khan",
    },
    {
        icon: Mail01,
        label: "Email",
        value: "contact@alhamdmasjid.org",
        href: "mailto:contact@alhamdmasjid.org",
        description: "We reply within 24 hours",
    },
    {
        icon: MarkerPin01,
        label: "Location",
        value: "Sahab Ganj, Basti, UP",
        href: "#location",
        description: "PIN: 272182",
    },
    {
        icon: Clock,
        label: "Office Hours",
        value: "After Fajr - After Isha",
        href: "#",
        description: "Open daily",
    },
] as const;

const inquiryTypes = [
    { id: "general", label: "General Inquiry" },
    { id: "donation", label: "Donation Question" },
    { id: "volunteer", label: "Volunteer" },
    { id: "visit", label: "Site Visit" },
] as const;

// Decorative pattern
const dotPatternStyle = {
    backgroundImage: "radial-gradient(circle, #059669 1px, transparent 1px)",
    backgroundSize: "24px 24px",
};

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", inquiryType: "general", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    }, []);

    const handleChange = useCallback((field: string, value: string) => {
        setFormState((prev) => ({ ...prev, [field]: value }));
    }, []);

    return (
        <div className="min-h-screen bg-primary">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 py-16 md:py-24">
                <div className="pointer-events-none absolute inset-0 opacity-10" style={dotPatternStyle} />
                <div className="relative mx-auto max-w-7xl px-4 md:px-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                        <MessageCircle01 className="size-4" />
                        Get in Touch
                    </span>
                    <h1 className="mt-6 max-w-2xl font-serif text-4xl font-normal italic tracking-tight text-white md:text-5xl lg:text-6xl">
                        We'd love to hear from you
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/90">
                        Have questions about the project? Want to contribute or volunteer? Reach out to us and we'll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
                        {/* Contact Info - Left Side */}
                        <div className="lg:col-span-2">
                            <h2 className="font-serif text-2xl font-normal italic tracking-tight text-primary md:text-3xl">
                                Contact Information
                            </h2>
                            <p className="mt-4 text-secondary">
                                Reach out through any of the following channels. We're here to help and answer any questions you may have.
                            </p>

                            {/* Contact Cards */}
                            <div className="mt-8 space-y-4">
                                {contactInfo.map(({ icon: Icon, label, value, href, description }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        className="group flex items-start gap-4 rounded-xl border border-secondary bg-white p-4 transition duration-100 ease-linear hover:border-emerald-200 hover:bg-emerald-50/50"
                                    >
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 transition duration-100 ease-linear group-hover:bg-emerald-100">
                                            <Icon className="size-5 text-emerald-600" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-medium uppercase tracking-wider text-tertiary">{label}</p>
                                            <p className="mt-0.5 font-medium text-primary">{value}</p>
                                            <p className="mt-0.5 text-sm text-tertiary">{description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 overflow-hidden rounded-xl border border-secondary">
                                <div className="aspect-video bg-tertiary">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8!2d82.7!3d26.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ4JzAwLjAiTiA4MsKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Location Map"
                                        className="h-full w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Right Side */}
                        <div className="lg:col-span-3">
                            <div className="rounded-2xl border border-secondary bg-white p-6 shadow-lg md:p-8">
                                <h2 className="font-serif text-2xl font-normal italic tracking-tight text-primary md:text-3xl">
                                    Send us a Message
                                </h2>
                                <p className="mt-2 text-secondary">
                                    Fill out the form below and we'll respond within 24 hours, In Sha Allah.
                                </p>

                                {/* Success Message */}
                                {isSubmitted && (
                                    <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                                        <p className="font-medium text-emerald-800">JazakAllah Khair!</p>
                                        <p className="mt-1 text-sm text-emerald-700">
                                            Your message has been sent successfully. We'll get back to you soon.
                                        </p>
                                    </div>
                                )}

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                    {/* Name & Email Row */}
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Input
                                            label="Full Name"
                                            placeholder="Your name"
                                            value={formState.name}
                                            onChange={(v) => handleChange("name", v)}
                                            isRequired
                                            size="md"
                                        />
                                        <Input
                                            label="Email Address"
                                            placeholder="you@example.com"
                                            type="email"
                                            value={formState.email}
                                            onChange={(v) => handleChange("email", v)}
                                            isRequired
                                            size="md"
                                            icon={Mail01}
                                        />
                                    </div>

                                    {/* Phone & Inquiry Type Row */}
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Input
                                            label="Phone Number"
                                            placeholder="+91 9876543210"
                                            type="tel"
                                            value={formState.phone}
                                            onChange={(v) => handleChange("phone", v)}
                                            size="md"
                                            icon={Phone}
                                        />
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-medium text-primary">
                                                Inquiry Type
                                            </label>
                                            <select
                                                value={formState.inquiryType}
                                                onChange={(e) => handleChange("inquiryType", e.target.value)}
                                                className="w-full rounded-lg border-0 bg-primary px-3.5 py-2.5 text-md text-primary shadow-xs ring-1 ring-primary ring-inset transition duration-100 ease-linear focus:ring-2 focus:ring-brand focus:outline-none"
                                            >
                                                {inquiryTypes.map(({ id, label }) => (
                                                    <option key={id} value={id}>
                                                        {label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <TextArea
                                        label="Message"
                                        placeholder="How can we help you?"
                                        value={formState.message}
                                        onChange={(v) => handleChange("message", v)}
                                        isRequired
                                        rows={5}
                                    />

                                    {/* Submit Button */}
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="text-sm text-tertiary">
                                            We respect your privacy. Your information will not be shared.
                                        </p>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            isLoading={isSubmitting}
                                            showTextWhileLoading
                                            iconTrailing={Send01}
                                            className="w-full justify-center rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-600 sm:w-auto"
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-8 grid gap-4 md:grid-cols-2">
                                <div className="rounded-xl border border-secondary bg-white p-5">
                                    <h3 className="font-medium text-primary">Visiting Hours</h3>
                                    <p className="mt-2 text-sm text-secondary">
                                        The construction site is open for visits after Dhuhr prayer on Fridays. Please contact us in advance to schedule a visit.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-secondary bg-white p-5">
                                    <h3 className="font-medium text-primary">For Urgent Matters</h3>
                                    <p className="mt-2 text-sm text-secondary">
                                        For urgent donation inquiries or site emergencies, please call directly at{" "}
                                        <a href="tel:+919022726250" className="font-medium text-emerald-600 hover:underline">
                                            +91 9022726250
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="border-t border-secondary bg-emerald-50 py-12">
                <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
                    <h2 className="font-serif text-2xl font-normal italic tracking-tight text-primary md:text-3xl">
                        Ready to contribute?
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-secondary">
                        Every contribution, big or small, brings us closer to completing this blessed project.
                    </p>
                    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button
                            href="/#donate"
                            size="lg"
                            className="w-full justify-center rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-700 hover:via-emerald-600 hover:to-teal-600 sm:w-auto"
                        >
                            Donate Now
                        </Button>
                        <Button href="/" color="secondary" size="lg" className="w-full sm:w-auto">
                            Back to Home
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
