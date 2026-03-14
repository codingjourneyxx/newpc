"use client";

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const sections = [
    {
        title: "Acceptance of Terms",
        content: `By accessing and using the Al-Hamd Masjid wa Madrasa website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.

These terms apply to all visitors, donors, and users of our website and services.`,
    },
    {
        title: "About the Project",
        content: `Al-Hamd Masjid wa Madrasa is a community project dedicated to building a place of worship and Islamic education in Sahab Ganj village, Basti district, Uttar Pradesh, India.

The project is managed by community members and all funds collected are used exclusively for construction, maintenance, and educational activities related to the masjid and madrasa.`,
    },
    {
        title: "Donations",
        content: `All donations made through our website are voluntary contributions towards the construction and operation of the masjid and madrasa.

• Donations are non-refundable unless made in error
• We reserve the right to use donations for any aspect of the project as needed
• Donors may request receipts for their contributions
• We do not guarantee any specific use of individual donations
• Zakat donations will be used in accordance with Islamic guidelines`,
    },
    {
        title: "Use of Website",
        content: `You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others.

You may not:
• Use the website for any fraudulent or illegal activity
• Attempt to gain unauthorized access to our systems
• Transmit any harmful code or malware
• Misrepresent your identity or affiliation
• Use the website to spread false information about the project`,
    },
    {
        title: "Content and Intellectual Property",
        content: `All content on this website, including text, images, logos, and design elements, is the property of Al-Hamd Masjid wa Madrasa or its content providers.

You may share our content for non-commercial purposes to spread awareness about the project, provided you give appropriate credit and do not modify the content in a misleading way.`,
    },
    {
        title: "Disclaimer",
        content: `The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no warranties about the completeness, reliability, or accuracy of this information.

Construction timelines and project updates are estimates and may change based on various factors including funding, weather, and other circumstances.`,
    },
    {
        title: "Limitation of Liability",
        content: `Al-Hamd Masjid wa Madrasa and its committee members shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or any donations made through it.

We are not responsible for any technical issues, payment processing errors, or third-party service failures.`,
    },
    {
        title: "Changes to Terms",
        content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website.

Your continued use of the website after any changes indicates your acceptance of the modified terms.`,
    },
    {
        title: "Contact Information",
        content: `For any questions regarding these Terms of Service, please contact us:

Phone: +91 9022726250
Email: contact@alhamdmasjid.org
Address: Sahab Ganj, Walter Ganj P.O., Basti, Uttar Pradesh 272182`,
    },
] as const;

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-primary">
            <Header />

            {/* Hero */}
            <section className="border-b border-secondary bg-secondary py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <h1 className="font-serif text-3xl font-normal italic tracking-tight text-primary md:text-4xl lg:text-5xl">
                        Terms of Service
                    </h1>
                    <p className="mt-4 max-w-2xl text-secondary">
                        Please read these terms carefully before using our website or making any donations.
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
                        {sections.map(({ title, content }, index) => (
                            <div key={title} className="border-b border-secondary pb-10 last:border-0">
                                <h2 className="flex items-center gap-3 text-xl font-semibold text-primary">
                                    <span className="flex size-8 items-center justify-center rounded-full bg-emerald-50 text-sm font-medium text-emerald-600">
                                        {index + 1}
                                    </span>
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
