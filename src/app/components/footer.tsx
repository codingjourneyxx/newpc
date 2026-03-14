"use client";

import Link from "next/link";
import { Mail01, Phone, MarkerPin01 } from "@untitledui/icons";

// Footer links data
const footerLinks = {
    project: {
        title: "Project",
        links: [
            { label: "Masjid", href: "#masjid" },
            { label: "Madrasa", href: "#madrasa" },
            { label: "Progress", href: "#progress" },
            { label: "Gallery", href: "#gallery" },
        ],
    },
    support: {
        title: "Support",
        links: [
            { label: "Donate", href: "#donate" },
            { label: "Volunteer", href: "#volunteer" },
            { label: "Share", href: "#share" },
        ],
    },
    about: {
        title: "About",
        links: [
            { label: "Our Mission", href: "#mission" },
            { label: "Contact", href: "/contact" },
            { label: "FAQ", href: "#faq" },
        ],
    },
} as const;

const contactInfo = [
    { icon: Phone, value: "+91 9022726250", href: "tel:+919022726250" },
    { icon: Mail01, value: "contact@alhamdmasjid.org", href: "mailto:contact@alhamdmasjid.org" },
    { icon: MarkerPin01, value: "Sahab Ganj, Basti, UP 272182", href: "#location" },
] as const;

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-secondary bg-white">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand & Contact */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block">
                            <img src="/logooffical.svg" alt="Al-Hamd Masjid" className="h-12 w-auto" />
                        </Link>
                        <p className="mt-4 max-w-xs text-sm text-secondary">
                            Building a place of worship and learning for the community of Sahab Ganj, Basti, Uttar Pradesh.
                        </p>

                        {/* Contact Info */}
                        <div className="mt-6 space-y-3">
                            {contactInfo.map(({ icon: Icon, value, href }) => (
                                <a
                                    key={value}
                                    href={href}
                                    className="flex items-center gap-3 text-sm text-secondary transition duration-100 ease-linear hover:text-emerald-600"
                                >
                                    <Icon className="size-4 text-emerald-600" />
                                    {value}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.values(footerLinks).map(({ title, links }) => (
                        <div key={title}>
                            <h3 className="text-sm font-semibold text-primary">{title}</h3>
                            <ul className="mt-4 space-y-3">
                                {links.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="text-sm text-secondary transition duration-100 ease-linear hover:text-emerald-600"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-secondary">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-8">
                    <p className="text-sm text-tertiary">
                        © {currentYear} Al-Hamd Masjid wa Madrasa. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#privacy" className="text-sm text-tertiary transition duration-100 ease-linear hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="#terms" className="text-sm text-tertiary transition duration-100 ease-linear hover:text-primary">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
