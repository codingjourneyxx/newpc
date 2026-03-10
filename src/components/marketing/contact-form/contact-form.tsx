"use client";

import { useState } from "react";
import { Mail01, Phone, User01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { TextArea } from "@/components/base/textarea/textarea";

const inquiryTypes = [
    { id: "general", label: "General Inquiry" },
    { id: "donation", label: "Donation Questions" },
    { id: "volunteer", label: "Volunteer Opportunities" },
    { id: "partnership", label: "Partnership" },
    { id: "other", label: "Other" },
];

export interface ContactFormProps {
    className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-semibold text-error-500">Contact Us</span>
                        <h2 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">
                            Get in Touch
                        </h2>
                        <p className="mt-5 text-lg text-tertiary">
                            Have questions about our programs or want to learn how you can help?
                            We'd love to hear from you. Fill out the form and our team will get
                            back to you within 24 hours.
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-error-50">
                                    <Mail01 className="size-5 text-error-600" />
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold text-primary">Email</h3>
                                    <p className="mt-1 text-md text-tertiary">contact@charity.org</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-error-50">
                                    <Phone className="size-5 text-error-600" />
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold text-primary">Phone</h3>
                                    <p className="mt-1 text-md text-tertiary">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="rounded-2xl border border-secondary bg-primary p-6 shadow-lg sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <Input
                                    label="First name"
                                    placeholder="John"
                                    icon={User01}
                                    isRequired
                                    size="md"
                                />
                                <Input
                                    label="Last name"
                                    placeholder="Doe"
                                    isRequired
                                    size="md"
                                />
                            </div>

                            <Input
                                label="Email"
                                placeholder="john@example.com"
                                type="email"
                                icon={Mail01}
                                isRequired
                                size="md"
                            />

                            <Input
                                label="Phone number"
                                placeholder="+1 (555) 000-0000"
                                type="tel"
                                icon={Phone}
                                size="md"
                            />

                            <Select
                                label="Inquiry type"
                                placeholder="Select inquiry type"
                                items={inquiryTypes}
                                size="md"
                            >
                                {(item) => (
                                    <Select.Item id={item.id}>
                                        {item.label}
                                    </Select.Item>
                                )}
                            </Select>

                            <TextArea
                                label="Message"
                                placeholder="Tell us how we can help you..."
                                isRequired
                                rows={4}
                            />

                            <Button
                                type="submit"
                                size="lg"
                                isLoading={isSubmitting}
                                showTextWhileLoading
                                className="w-full bg-error-500 hover:bg-error-600"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

ContactForm.displayName = "ContactForm";
