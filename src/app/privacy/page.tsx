"use client";

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const sections = [
    {
        title: "Information We Collect",
        content: `When you donate or contact us through our website, we may collect the following information:

• Full name
• Email address
• Phone number
• Donation amount and payment details
• Messages or inquiries you send us

We only collect information that is necessary to process donations and respond to your queries.`,
    },
    {
        title: "How We Use Your Information",
        content: `Your information is used for the following purposes:

• Processing and acknowledging donations
• Sending updates about the masjid and madrasa construction progress
• Responding to your inquiries and prayer requests
• Issuing donation receipts when requested
• Communicating important announcements about the project

We will never sell, rent, or share your personal information with third parties for marketing purposes.`,
    },
    {
        title: "Donation Information",
        content: `All donations made to Al-Hamd Masjid wa Madrasa are used solely for the construction and maintenance of the masjid and madrasa facilities. We maintain transparent records of all contributions.

Bank transfers and UPI payments are processed through State Bank of India (SBI). We do not store your complete bank account or card details on our servers.`,
    },
    {
        title: "Data Security",
        content: `We take appropriate measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.

We retain your information only for as long as necessary to fulfill the purposes outlined in this policy.`,
    },
    {
        title: "Your Rights",
        content: `You have the right to:

• Request access to your personal data
• Request correction of inaccurate information
• Request deletion of your data
• Opt-out of receiving updates and communications

To exercise these rights, please contact us using the information provided below.`,
    },
    {
        title: "Contact Us",
        content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:

Phone: +91 9022726250
Email: contact@alhamdmasjid.org
Address: Sahab Ganj, Walter Ganj P.O., Basti, Uttar Pradesh 272182`,
    },
] as const;

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />

            {/* Hero */}
            <section className="border-b border-secondary bg-secondary py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <h1 className="font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl lg:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 max-w-2xl text-secondary">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    </p>
                    <p className="mt-4 text-sm text-tertiary">
                        Last updated: March 2024
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="space-y-10">
                        {sections.map(({ title, content }) => (
                            <div key={title} className="border-b border-secondary pb-10 last:border-0">
                                <h2 className="text-xl font-semibold text-primary">
                                    {title}
                                </h2>
                                <div className="mt-4 whitespace-pre-line text-secondary">
                                    {content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
