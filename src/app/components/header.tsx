"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useDonateModal } from "@/app/components/donate-modal";

// Share data
const shareData = {
    title: "Al-Hamd Masjid wa Madrasa",
    text: "Help us build a masjid and madrasa in Sahab Ganj, Basti. Your contribution is a Sadaqah Jariyah.",
    url: typeof window !== "undefined" ? window.location.href : "",
};

// Mosque Logo Component
const Logo = () => (
    <img
        src="/logooffical.svg"
        alt="Masjid & Madrasa"
        className="h-12 w-auto object-contain"
    />
);

// Icons
const MenuIcon = () => (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
);

const CloseIcon = () => (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
);

// Navigation Links
const navLinks = [
    { label: "Project", href: "#project" },
    { label: "Mission", href: "#mission" },
    { label: "Progress", href: "#progress" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "/contact" },
] as const;

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");
    const { openModal } = useDonateModal();

    // Share handler - uses Web Share API with clipboard fallback
    const handleShare = useCallback(async () => {
        const url = window.location.href;
        const data = { ...shareData, url };

        try {
            if (navigator.share && navigator.canShare?.(data)) {
                await navigator.share(data);
            } else {
                await navigator.clipboard.writeText(url);
                setShareStatus("copied");
                setTimeout(() => setShareStatus("idle"), 2000);
            }
        } catch (err) {
            // User cancelled or error - try clipboard as fallback
            if ((err as Error).name !== "AbortError") {
                try {
                    await navigator.clipboard.writeText(url);
                    setShareStatus("copied");
                    setTimeout(() => setShareStatus("idle"), 2000);
                } catch {
                    // Clipboard also failed
                }
            }
        }
    }, []);

    return (
        <header className="relative bg-white border-b border-secondary shadow-sm">
            {/* Main Navigation */}
            <nav className="bg-transparent">
                <div className="max-w-7xl mx-auto px-3 lg:px-4">
                    <div className="flex items-center justify-between h-16 lg:h-16">
                        {/* Logo + Navigation */}
                        <div className="flex items-center gap-8">
                            <Link href="/" className="flex items-center shrink-0">
                                <Logo />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-[-0.01em] text-secondary antialiased transition-colors hover:text-emerald-600"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <button
                                onClick={handleShare}
                                className="px-4 py-2.5 text-sm font-medium text-tertiary transition-all hover:text-primary"
                            >
                                {shareStatus === "copied" ? "Link Copied!" : "Share"}
                            </button>
                            <button
                                onClick={() => openModal()}
                                className="px-5 py-2.5 text-sm font-medium bg-emerald-600 text-white rounded transition-all hover:bg-emerald-700"
                            >
                                Donate Now
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-primary rounded-lg hover:bg-secondary transition-colors"
                        >
                            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-tertiary bg-primary">
                        <div className="px-6 py-4">
                            <div className="space-y-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="block px-4 py-3 text-base font-medium text-primary rounded-lg transition-colors hover:bg-secondary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-4 space-y-3">
                                    <button
                                        onClick={() => {
                                            handleShare();
                                            setMobileMenuOpen(false);
                                        }}
                                        className="block w-full px-4 py-3 text-base font-medium text-center text-primary border border-tertiary rounded-lg"
                                    >
                                        {shareStatus === "copied" ? "Link Copied!" : "Share With Others"}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            openModal();
                                        }}
                                        className="block w-full px-4 py-3 text-base font-medium text-center bg-emerald-600 text-white rounded-lg"
                                    >
                                        Donate Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
