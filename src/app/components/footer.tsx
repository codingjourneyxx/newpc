"use client";

import Link from "next/link";
import { ArrowRight } from "@untitledui/icons";

const links = {
    project: {
        title: "Project",
        items: [
            { label: "Masjid", href: "#masjid" },
            { label: "Madrasa", href: "#madrasa" },
            { label: "Progress", href: "#progress", badge: "New" },
            { label: "Gallery", href: "#gallery" },
        ],
    },
    explore: {
        title: "Explore",
        items: [
            { label: "Our Mission", href: "#mission" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Updates", href: "#updates" },
            { label: "FAQ", href: "#faq" },
        ],
    },
    support: {
        title: "Support",
        items: [
            { label: "Donate", href: "#donate" },
            { label: "Volunteer", href: "#volunteer" },
            { label: "Share", href: "#share" },
            { label: "Sponsor", href: "#sponsor" },
        ],
    },
    connect: {
        title: "Connect",
        items: [
            { label: "Contact Us", href: "/contact" },
            { label: "WhatsApp", href: "https://wa.me/919022726250" },
            { label: "Location", href: "#location" },
        ],
    },
} as const;

// Dot pattern style
const dotPattern = {
    backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
    backgroundSize: "16px 16px",
};

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#f9fafb]" style={dotPattern}>
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
                {/* Main Card */}
                <div className=" border border-secondary bg-white p-8  md:p-12">
                    <div className="grid gap-10 lg:grid-cols-12">
                        {/* Brand */}
                        <div className="lg:col-span-4">
                            <Link href="/">
                                <img src="/logooffical.svg" alt="Al-Hamd Masjid" className="h-16 w-auto" />
                            </Link>
                            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-tertiary">
                                A blessed project to build a masjid and madrasa in Sahab Ganj, Basti, UP.
                            </p>

                            {/* Social Icons */}
                            <div className="mt-6 flex items-center gap-4">
                                <a href="https://wa.me/919022726250" className="text-tertiary transition hover:text-emerald-600" aria-label="WhatsApp">
                                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                </a>
                                <a href="tel:+919022726250" className="text-tertiary transition hover:text-emerald-600" aria-label="Phone">
                                    <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                </a>
                                <a href="mailto:contact@alhamdmasjid.org" className="text-tertiary transition hover:text-emerald-600" aria-label="Email">
                                    <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </a>
                            </div>

                            {/* Status */}
                            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-secondary bg-primary px-3 py-1.5">
                                <span className="size-2 rounded-full bg-emerald-500" />
                                <span className="text-sm text-secondary">Construction in progress</span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
                            {Object.values(links).map(({ title, items }) => (
                                <div key={title}>
                                    <h4 className="text-sm font-semibold text-primary">{title}</h4>
                                    <ul className="mt-4 space-y-3">
                                        {items.map(({ label, href, badge }) => (
                                            <li key={label}>
                                                <Link href={href} className="inline-flex items-center gap-2 text-sm text-tertiary transition hover:text-emerald-600">
                                                    {label}
                                                    {badge && (
                                                        <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-xs font-medium text-emerald-600">
                                                            {badge}
                                                        </span>
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Donate CTA */}
                    <div className="mt-10 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-[1px]">
                        <div className="flex flex-col items-center justify-between gap-4 rounded-[11px] bg-white px-6 py-5 sm:flex-row">
                            <div className="flex items-center gap-4">
                                <div className="flex size-12 items-center justify-center rounded-full bg-emerald-50">
                                    <svg className="size-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-primary">Support this Sadaqah Jariyah</p>
                                    <p className="text-sm text-tertiary">Every contribution builds your Akhirah</p>
                                </div>
                            </div>
                            <Link
                                href="#donate"
                                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-emerald-700 hover:to-teal-600"
                            >
                                Donate Now
                                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 px-2 sm:flex-row">
                    <p className="text-sm text-tertiary">
                        © {currentYear} Al-Hamd Masjid wa Madrasa
                    </p>
                    <div className="flex gap-6">
                        <Link href="#privacy" className="text-sm text-tertiary transition hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="#terms" className="text-sm text-tertiary transition hover:text-primary">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
