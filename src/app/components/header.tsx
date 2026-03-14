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
    const { openModal } = useDonateModal();
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
                                                openModal();
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
        </header>
    );
};

export default Header;
