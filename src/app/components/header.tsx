"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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

const ChevronDownIcon = ({ className = "size-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"/>
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="size-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
    </svg>
);

// Donation Data
const BANK_ACC = "10580754654";
const UPI_ID = "thealhamdtechnologies-1@oksbi";

// Donate Modal Component
const DonateModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = async (text: string, field: string) => {
        await navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 p-1.5 sm:p-2 rounded-full bg-secondary hover:bg-tertiary transition-colors"
                >
                    <X className="size-4 sm:size-5 text-primary" />
                </button>

                <div className="grid h-full lg:grid-cols-2 max-h-[95vh] sm:max-h-[90vh]">
                    {/* Left Side - Info (Desktop) */}
                    <div className="relative hidden lg:flex flex-col justify-center p-6 xl:p-10 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 overflow-y-auto">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                        <div className="relative">
                            {/* QR Code at Top */}
                            <div className="mb-6 flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-4">
                                <p className="text-xs font-medium text-white/80 mb-3">Scan QR Code to Pay</p>
                                <div className="rounded-lg bg-white p-2 shadow-lg">
                                    <img src="/qr-code.jpeg" alt="UPI QR Code" className="size-48 xl:size-80" />
                                </div>
                            </div>

                            <h2 className="font-serif text-2xl xl:text-3xl font-normal italic text-white">
                                Support this blessed project
                            </h2>
                            <p className="mt-3 text-sm xl:text-base text-emerald-100 leading-relaxed">
                                Your donation is a Sadaqah Jariyah - an ongoing charity that will benefit you even after your lifetime.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Donation Options */}
                    <div className="flex flex-col p-4 sm:p-6 lg:p-8 xl:p-10 overflow-y-auto max-h-[95vh] sm:max-h-[90vh] lg:max-h-none">
                        {/* Mobile Header with QR */}
                        <div className="lg:hidden">
                            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Support this blessed project</h3>

                            {/* Mobile QR Code */}
                            <div className="mb-4 flex items-center gap-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 p-3 sm:p-4">
                                <div className="rounded-lg bg-white p-1.5 shadow-lg shrink-0">
                                    <img src="/qr-code.jpeg" alt="UPI QR Code" className="size-20 sm:size-24" />
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm font-medium text-white">Scan to Pay</p>
                                    <p className="text-[10px] sm:text-xs text-emerald-100 mt-1">Use any UPI app to scan and donate instantly</p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Header */}
                        <div className="hidden lg:block mb-4">
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50">
                                    <CreditCard01 className="size-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">Choose a donation method</h3>
                                    <p className="text-sm text-tertiary">Click to copy the details</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                            {/* Bank Transfer */}
                            <button
                                onClick={() => handleCopy(BANK_ACC, "bank")}
                                className="flex w-full items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-secondary bg-primary p-3 sm:p-4 transition duration-100 ease-linear hover:border-emerald-200 hover:bg-emerald-50/50"
                            >
                                <div className="flex size-10 sm:size-12 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-50">
                                    <CreditCard01 className="size-5 sm:size-6 text-emerald-600" />
                                </div>
                                <div className="min-w-0 flex-1 text-left">
                                    <p className="text-xs sm:text-sm font-semibold text-primary">Bank Transfer (SBI)</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">Name: THE AL-HAMD TECHNOLOGIES</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary font-medium">A/C: {BANK_ACC}</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">IFSC: SBIN0003320 • Branch: Basti</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    {copiedField === "bank" ? (
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-600">Copied!</span>
                                    ) : (
                                        <Copy01 className="size-4 sm:size-5 text-tertiary" />
                                    )}
                                </div>
                            </button>

                            {/* UPI */}
                            <button
                                onClick={() => handleCopy(UPI_ID, "upi")}
                                className="flex w-full items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-secondary bg-primary p-3 sm:p-4 transition duration-100 ease-linear hover:border-emerald-200 hover:bg-emerald-50/50"
                            >
                                <div className="flex size-10 sm:size-12 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-50">
                                    <img src="/upi-logo.png" alt="UPI" className="size-5 sm:size-7" />
                                </div>
                                <div className="min-w-0 flex-1 text-left">
                                    <p className="text-xs sm:text-sm font-semibold text-primary">G-Pay / PhonePe / Paytm / UPI</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary font-medium truncate">{UPI_ID}</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">Instant transfer via any UPI app</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    {copiedField === "upi" ? (
                                        <span className="text-[10px] sm:text-xs font-medium text-emerald-600">Copied!</span>
                                    ) : (
                                        <Copy01 className="size-4 sm:size-5 text-tertiary" />
                                    )}
                                </div>
                            </button>

                            {/* WhatsApp Contact */}
                            <a
                                href="https://wa.me/919022726250"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border border-secondary bg-primary p-3 sm:p-4 transition duration-100 ease-linear hover:border-emerald-200 hover:bg-emerald-50/50"
                            >
                                <div className="flex size-10 sm:size-12 flex-shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-green-50">
                                    <MessageCircle01 className="size-5 sm:size-6 text-green-600" />
                                </div>
                                <div className="min-w-0 flex-1 text-left">
                                    <p className="text-xs sm:text-sm font-semibold text-primary">Contact on WhatsApp</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">Nibboo Hassan Khan</p>
                                    <p className="text-[10px] sm:text-xs text-tertiary">For donation receipts & queries</p>
                                </div>
                                <Phone className="size-4 sm:size-5 text-tertiary shrink-0" />
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-tertiary">
                            <a href="tel:+919022726250" className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                                <Phone className="size-3 sm:size-3.5" />
                                +91 9022726250
                            </a>
                            <span className="hidden sm:inline text-secondary">•</span>
                            <span>Sahab Ganj, Basti, UP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Menu Data
const megaMenuData = {
    services: {
        label: "Project",
        groups: [
            {
                title: "Masjid",
                items: [
                    { label: "Prayer Hall", description: "Space for 500+ worshippers", href: "#masjid" },
                    { label: "Wudu Area", description: "Ablution facilities", href: "#wudu" },
                ],
            },
            {
                title: "Madrasa",
                items: [
                    { label: "Quran Classes", description: "Recitation & memorization", href: "#quran" },
                    { label: "Islamic Studies", description: "Hadith, Fiqh & Seerah", href: "#studies" },
                ],
            },
        ],
    },
    solutions: {
        label: "How to Help",
        groups: [
            {
                title: "Donate",
                items: [
                    { label: "One-Time Donation", description: "Any amount helps", href: "#donate" },
                    { label: "Zakat / Sadaqah", description: "Fulfill your obligation", href: "#zakat" },
                ],
            },
            {
                title: "Other Ways",
                items: [
                    { label: "Share With Others", description: "Spread the word", href: "#share" },
                    { label: "Volunteer", description: "Contribute your time", href: "#volunteer" },
                ],
            },
        ],
    },
    resources: {
        label: "About",
        groups: [
            {
                title: "Learn More",
                items: [
                    { label: "Our Mission", description: "Why we are building", href: "#mission" },
                    { label: "Progress Updates", description: "Construction progress", href: "#progress" },
                ],
            },
            {
                title: "Connect",
                items: [
                    { label: "Contact Us", description: "Get in touch", href: "#contact" },
                    { label: "Visit Us", description: "Site location", href: "#location" },
                ],
            },
        ],
    },
};

// Mega Menu Dropdown Component
const MegaMenuDropdown = ({
    menuKey,
    isOpen,
    slideDirection,
    onMouseEnter,
    onMouseLeave,
    onClose
}: {
    menuKey: keyof typeof megaMenuData;
    isOpen: boolean;
    slideDirection: "left" | "right" | "none";
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClose: () => void;
}) => {
    const menu = megaMenuData[menuKey];

    if (!isOpen) return null;

    const slideClass = slideDirection === "left"
        ? "animate-slide-in-left"
        : slideDirection === "right"
            ? "animate-slide-in-right"
            : "animate-fade-in";

    return (
        <div
            className="absolute left-0 right-0 top-full z-50 bg-white overflow-hidden"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={`mx-auto max-w-7xl border-x border-y border-secondary py-8 ${slideClass}`}>
                <div className="grid lg:grid-cols-4">
                    {/* Menu Groups */}
                    {menu.groups.map((group, groupIndex) => (
                        <div key={groupIndex} className={`group/col py-2 px-6 ${groupIndex < menu.groups.length - 1 ? "border-r border-secondary" : ""}`}>
                            <h3 className="relative mb-2 pb-2 text-xs font-semibold uppercase tracking-wider text-tertiary">
                                {group.title}
                                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition-transform duration-200 group-hover/col:scale-x-100" />
                            </h3>
                            <ul className="-ml-2">
                                {group.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <Link
                                            href={item.href}
                                            className="group flex flex-col rounded-lg py-2 px-2 transition-colors hover:bg-secondary"
                                            onClick={onClose}
                                        >
                                            <span className="flex items-center gap-2 text-sm font-medium text-primary">
                                                {item.label}
                                                <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                                    <ArrowRightIcon />
                                                </span>
                                            </span>
                                            <span className="mt-0.5 text-sm text-tertiary">
                                                {item.description}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

// Nav Item with Dropdown
const NavItemWithDropdown = ({
    menuKey,
    activeMenu,
    onMouseEnter,
}: {
    menuKey: keyof typeof megaMenuData;
    activeMenu: string | null;
    onMouseEnter: (key: string) => void;
}) => {
    const menu = megaMenuData[menuKey];
    const isOpen = activeMenu === menuKey;

    return (
        <div
            className="relative"
            onMouseEnter={() => onMouseEnter(menuKey)}
        >
            <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-[-0.01em] antialiased transition-colors ${
                    isOpen ? "text-emerald-600" : "text-secondary hover:text-emerald-600"
                }`}
            >
                {menu.label}
                <ChevronDownIcon className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
        </div>
    );
};

const menuKeys = Object.keys(megaMenuData) as Array<keyof typeof megaMenuData>;

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [slideDirection, setSlideDirection] = useState<"left" | "right" | "none">("none");
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
    const [shareStatus, setShareStatus] = useState<"idle" | "copied">("idle");
    const [donateModalOpen, setDonateModalOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const prevMenuRef = useRef<string | null>(null);

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

    const handleMenuEnter = (key: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        // Determine slide direction based on menu position
        if (prevMenuRef.current && prevMenuRef.current !== key) {
            const prevIndex = menuKeys.indexOf(prevMenuRef.current as keyof typeof megaMenuData);
            const newIndex = menuKeys.indexOf(key as keyof typeof megaMenuData);
            setSlideDirection(newIndex > prevIndex ? "right" : "left");
        } else if (!prevMenuRef.current) {
            setSlideDirection("none");
        }

        prevMenuRef.current = key;
        setActiveMenu(key);
    };

    const handleMenuLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
            prevMenuRef.current = null;
            setSlideDirection("none");
        }, 150);
    };

    const handleDropdownEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setActiveMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header ref={headerRef} className="relative bg-white border-b border-secondary shadow-sm">
            {/* Main Navigation */}
            <nav className="bg-transparent">
                <div className="max-w-7xl mx-auto px-3 lg:px-4  ">
                    <div className="flex items-center justify-between h-16 lg:h-16">
                        {/* Logo + Navigation */}
                        <div className="flex items-center gap-8">
                            <Link href="/" className="flex items-center shrink-0">
                                <Logo />
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center" onMouseLeave={handleMenuLeave}>
                                {(Object.keys(megaMenuData) as Array<keyof typeof megaMenuData>).map((menuKey) => (
                                    <NavItemWithDropdown
                                        key={menuKey}
                                        menuKey={menuKey}
                                        activeMenu={activeMenu}
                                        onMouseEnter={handleMenuEnter}
                                    />
                                ))}
                                <Link
                                    href="#donate"
                                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-[-0.01em] text-secondary antialiased transition-colors hover:text-emerald-600"
                                    onMouseEnter={() => setActiveMenu(null)}
                                >
                                    Donate
                                </Link>
                                <Link
                                    href="/contact"
                                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-[-0.01em] text-secondary antialiased transition-colors hover:text-emerald-600"
                                    onMouseEnter={() => setActiveMenu(null)}
                                >
                                    Contact
                                </Link>
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
                                onClick={() => setDonateModalOpen(true)}
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

                {/* Desktop Mega Menu Dropdowns */}
                {menuKeys.map((menuKey) => (
                    <MegaMenuDropdown
                        key={menuKey}
                        menuKey={menuKey}
                        isOpen={activeMenu === menuKey}
                        slideDirection={slideDirection}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleMenuLeave}
                        onClose={() => setActiveMenu(null)}
                    />
                ))}

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-tertiary bg-primary">
                        <div className="px-6 py-4">
                            {mobileSubmenu === null ? (
                                // Main mobile menu
                                <div className="space-y-1">
                                    {(Object.keys(megaMenuData) as Array<keyof typeof megaMenuData>).map((menuKey) => (
                                        <button
                                            key={menuKey}
                                            onClick={() => setMobileSubmenu(menuKey)}
                                            className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-primary rounded-lg transition-colors hover:bg-secondary"
                                        >
                                            {megaMenuData[menuKey].label}
                                            <ChevronDownIcon className="size-5 -rotate-90" />
                                        </button>
                                    ))}
                                    <Link
                                        href="#donate"
                                        className="block px-4 py-3 text-base font-medium text-primary rounded-lg transition-colors hover:bg-secondary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Donate
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block px-4 py-3 text-base font-medium text-primary rounded-lg transition-colors hover:bg-secondary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>
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
                                                setDonateModalOpen(true);
                                            }}
                                            className="block w-full px-4 py-3 text-base font-medium text-center bg-emerald-600 text-white rounded-lg"
                                        >
                                            Donate Now
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // Mobile submenu
                                <div>
                                    <button
                                        onClick={() => setMobileSubmenu(null)}
                                        className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-tertiary mb-2"
                                    >
                                        <ChevronDownIcon className="size-4 rotate-90" />
                                        Back
                                    </button>
                                    <div className="space-y-6">
                                        {megaMenuData[mobileSubmenu as keyof typeof megaMenuData].groups.map((group, groupIndex) => (
                                            <div key={groupIndex}>
                                                <h3 className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-tertiary">
                                                    {group.title}
                                                </h3>
                                                <div className="space-y-1">
                                                    {group.items.map((item, itemIndex) => (
                                                        <Link
                                                            key={itemIndex}
                                                            href={item.href}
                                                            className="block px-4 py-3 rounded-lg hover:bg-secondary"
                                                            onClick={() => {
                                                                setMobileMenuOpen(false);
                                                                setMobileSubmenu(null);
                                                            }}
                                                        >
                                                            <span className="block text-base font-medium text-primary">
                                                                {item.label}
                                                            </span>
                                                            <span className="block text-sm text-tertiary">
                                                                {item.description}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            {/* Slide animations */}
            <style jsx global>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slide-in-left {
                    animation: slideInLeft 0.25s ease-out forwards;
                }
                .animate-slide-in-right {
                    animation: slideInRight 0.25s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>

            {/* Donate Modal */}
            <DonateModal isOpen={donateModalOpen} onClose={() => setDonateModalOpen(false)} />
        </header>
    );
};

export default Header;
