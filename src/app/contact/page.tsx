import type { Metadata } from "next";
import ContactPageClient from "./contact-client";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Al-Hamd Masjid wa Madrasa. Have questions about donations, volunteering, or visiting the construction site? We're here to help.",
    openGraph: {
        title: "Contact Us | Al-Hamd Masjid wa Madrasa",
        description: "Get in touch with us for donation inquiries, volunteering, or to schedule a site visit.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
