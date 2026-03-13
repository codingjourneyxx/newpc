"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Logo Component
const Logo = () => (
    <svg fill="none" height="48" viewBox="0 0 203 48" width="203" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto transition-opacity duration-200 hover:opacity-80">
        <path d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z" fill="#E31B54"/>
        <g fill="#0a0d12">
            <path d="m56.2 33.3599c-2.12 0-3.94-.45-5.46-1.35-1.52-.92-2.69-2.19-3.51-3.81-.82-1.64-1.23-3.53-1.23-5.67s.41-4.03 1.23-5.67 1.99-2.92 3.51-3.84 3.34-1.38 5.46-1.38c2.52 0 4.58.63 6.18 1.89 1.62 1.24 2.63 2.99 3.03 5.25h-4.23c-.26-1.14-.82-2.03-1.68-2.67-.84-.66-1.96-.99-3.36-.99-1.94 0-3.46.66-4.56 1.98s-1.65 3.13-1.65 5.43.55 4.11 1.65 5.43c1.1 1.3 2.62 1.95 4.56 1.95 1.4 0 2.52-.3 3.36-.9.86-.62 1.42-1.47 1.68-2.55h4.23c-.4 2.16-1.41 3.85-3.03 5.07-1.6 1.22-3.66 1.83-6.18 1.83z"/>
            <path d="m66.9191 32.9999v-21.6h3.84v21.6z"/>
            <path d="m79.7228 33.3599c-1.4 0-2.65-.34-3.75-1.02s-1.97-1.61-2.61-2.79-.96-2.52-.96-4.02.32-2.83.96-3.99c.64-1.18 1.51-2.1 2.61-2.76 1.1-.68 2.35-1.02 3.75-1.02 1.12 0 2.1.21 2.94.63s1.52 1.01 2.04 1.77l.21-2.04h3.63v14.88h-3.6l-.24-2.13c-.48.66-1.12 1.24-1.92 1.74-.78.5-1.8.75-3.06.75zm.81-3.36c1.24 0 2.25-.41 3.03-1.23.8-.84 1.2-1.91 1.2-3.21s-.4-2.36-1.2-3.18c-.78-.84-1.79-1.26-3.03-1.26-1.22 0-2.23.41-3.03 1.23s-1.2 1.88-1.2 3.18.4 2.37 1.2 3.21 1.81 1.26 3.03 1.26z"/>
            <path d="m90.6531 32.9999v-14.88h3.39l.3 2.52c.46-.88 1.12-1.58 1.98-2.1.88-.52 1.91-.78 3.09-.78 1.8399 0 3.2699.58 4.2899 1.74s1.53 2.86 1.53 5.1v8.4h-3.84v-8.04c0-1.28-.26-2.26-.78-2.94s-1.3299-1.02-2.4299-1.02c-1.08 0-1.97.38-2.67 1.14-.68.76-1.02 1.82-1.02 3.18v7.68z"/>
            <path d="m113.945 33.3599c-1.4 0-2.65-.34-3.75-1.02s-1.97-1.61-2.61-2.79-.96-2.52-.96-4.02.32-2.83.96-3.99c.64-1.18 1.51-2.1 2.61-2.76 1.1-.68 2.35-1.02 3.75-1.02 1.12 0 2.1.21 2.94.63s1.52 1.01 2.04 1.77v-8.76h3.84v21.6h-3.42l-.42-2.13c-.48.66-1.12 1.24-1.92 1.74-.78.5-1.8.75-3.06.75zm.81-3.36c1.24 0 2.25-.41 3.03-1.23.8-.84 1.2-1.91 1.2-3.21s-.4-2.36-1.2-3.18c-.78-.84-1.79-1.26-3.03-1.26-1.22 0-2.23.41-3.03 1.23s-1.2 1.88-1.2 3.18.4 2.37 1.2 3.21 1.81 1.26 3.03 1.26z"/>
            <path d="m132.105 33.3599c-1.5 0-2.83-.32-3.99-.96s-2.07-1.54-2.73-2.7-.99-2.5-.99-4.02c0-1.54.32-2.91.96-4.11.66-1.2 1.56-2.13 2.7-2.79 1.16-.68 2.52-1.02 4.08-1.02 1.46 0 2.75.32 3.87.96s1.99 1.52 2.61 2.64c.64 1.1.96 2.33.96 3.69 0 .22-.01.45-.03.69 0 .24-.01.49-.03.75h-11.31c.08 1.16.48 2.07 1.2 2.73.74.66 1.63.99 2.67.99.78 0 1.43-.17 1.95-.51.54-.36.94-.82 1.2-1.38h3.9c-.28.94-.75 1.8-1.41 2.58-.64.76-1.44 1.36-2.4 1.8-.94.44-2.01.66-3.21.66zm.03-12.48c-.94 0-1.77.27-2.49.81-.72.52-1.18 1.32-1.38 2.4h7.41c-.06-.98-.42-1.76-1.08-2.34s-1.48-.87-2.46-.87z"/>
            <path d="m147.155 33.3599c-1.32 0-2.48-.21-3.48-.63-1-.44-1.8-1.04-2.4-1.8s-.96-1.64-1.08-2.64h3.87c.12.58.44 1.08.96 1.5.54.4 1.23.6 2.07.6s1.45-.17 1.83-.51c.4-.34.6-.73.6-1.17 0-.64-.28-1.07-.84-1.29-.56-.24-1.34-.47-2.34-.69-.64-.14-1.29-.31-1.95-.51s-1.27-.45-1.83-.75c-.54-.32-.98-.72-1.32-1.2-.34-.5-.51-1.11-.51-1.83 0-1.32.52-2.43 1.56-3.33 1.06-.9 2.54-1.35 4.44-1.35 1.76 0 3.16.41 4.2 1.23 1.06.82 1.69 1.95 1.89 3.39h-3.63c-.22-1.1-1.05-1.65-2.49-1.65-.72 0-1.28.14-1.68.42-.38.28-.57.63-.57 1.05 0 .44.29.79.87 1.05s1.35.5 2.31.72c1.04.24 1.99.51 2.85.81.88.28 1.58.71 2.1 1.29.52.56.78 1.37.78 2.43.02.92-.22 1.75-.72 2.49s-1.22 1.32-2.16 1.74-2.05.63-3.33.63z"/>
            <path d="m161.128 32.9999c-1.56 0-2.81-.38-3.75-1.14s-1.41-2.11-1.41-4.05v-6.48h-2.55v-3.21h2.55l.45-3.99h3.39v3.99h4.02v3.21h-3.02c-.552 0-1 .4477-1 1v5.51c0 .72.15 1.22.45 1.5.32.26.86.39 1.62.39h1.86v3.27z"/>
            <path d="m167.395 15.8099c-.7 0-1.28-.21-1.74-.63-.44-.42-.66-.95-.66-1.59s.22-1.16.66-1.56c.46-.42 1.04-.63 1.74-.63s1.27.21 1.71.63c.46.4.69.92.69 1.56s-.23 1.17-.69 1.59c-.44.42-1.01.63-1.71.63zm-1.92 17.19v-14.88h3.84v14.88z"/>
            <path d="m171.523 32.9999v-14.88h3.39l.3 2.52c.46-.88 1.12-1.58 1.98-2.1.88-.52 1.91-.78 3.09-.78 1.84 0 3.27.58 4.29 1.74s1.53 2.86 1.53 5.1v8.4h-3.84v-8.04c0-1.28-.26-2.26-.78-2.94s-1.33-1.02-2.43-1.02c-1.08 0-1.97.38-2.67 1.14-.68.76-1.02 1.82-1.02 3.18v7.68z"/>
            <path d="m195.205 33.3599c-1.5 0-2.83-.32-3.99-.96s-2.07-1.54-2.73-2.7-.99-2.5-.99-4.02c0-1.54.32-2.91.96-4.11.66-1.2 1.56-2.13 2.7-2.79 1.16-.68 2.52-1.02 4.08-1.02 1.46 0 2.75.32 3.87.96s1.99 1.52 2.61 2.64c.64 1.1.96 2.33.96 3.69 0 .22-.01.45-.03.69 0 .24-.01.49-.03.75h-11.31c.08 1.16.48 2.07 1.2 2.73.74.66 1.63.99 2.67.99.78 0 1.43-.17 1.95-.51.54-.36.94-.82 1.2-1.38h3.9c-.28.94-.75 1.8-1.41 2.58-.64.76-1.44 1.36-2.4 1.8-.94.44-2.01.66-3.21.66zm.03-12.48c-.94 0-1.77.27-2.49.81-.72.52-1.18 1.32-1.38 2.4h7.41c-.06-.98-.42-1.76-1.08-2.34s-1.48-.87-2.46-.87z"/>
        </g>
    </svg>
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
        label: "Services",
        groups: [
            {
                title: "Pumping Services",
                items: [
                    { label: "Septic Tank Pumping", description: "Complete tank pumping & cleaning", href: "/services/pumping" },
                    { label: "Grease Trap Cleaning", description: "Commercial grease trap services", href: "/services/grease-trap" },
                    { label: "Emergency Pumping", description: "24/7 emergency services", href: "/services/emergency" },
                    { label: "Scheduled Maintenance", description: "Regular maintenance plans", href: "/services/maintenance" },
                ],
            },
            {
                title: "Inspections",
                items: [
                    { label: "NC-Certified Inspections", description: "State-certified septic inspections", href: "/services/inspections" },
                    { label: "Real Estate Inspections", description: "Pre-sale property inspections", href: "/services/real-estate" },
                    { label: "Compliance Verification", description: "Regulatory compliance checks", href: "/services/compliance" },
                ],
            },
            {
                title: "Repairs & Installation",
                items: [
                    { label: "Tank Repairs", description: "Tank and lid repairs", href: "/services/tank-repairs" },
                    { label: "Drain Field Services", description: "Installation & restoration", href: "/services/drain-field" },
                    { label: "Distribution Box", description: "Replacement & repairs", href: "/services/distribution-box" },
                    { label: "System Installation", description: "New septic system installation", href: "/services/installation" },
                ],
            },
        ],
    },
    solutions: {
        label: "Solutions",
        groups: [
            {
                title: "By Property Type",
                items: [
                    { label: "Residential", description: "Home septic solutions", href: "/solutions/residential" },
                    { label: "Commercial", description: "Business & commercial properties", href: "/solutions/commercial" },
                    { label: "Multi-Family", description: "Apartments & condos", href: "/solutions/multi-family" },
                    { label: "New Construction", description: "New build septic systems", href: "/solutions/new-construction" },
                ],
            },
            {
                title: "By Need",
                items: [
                    { label: "First-Time Homeowners", description: "Septic basics & maintenance", href: "/solutions/first-time" },
                    { label: "Property Managers", description: "Multi-property management", href: "/solutions/property-managers" },
                    { label: "Real Estate Agents", description: "Transaction support", href: "/solutions/real-estate" },
                    { label: "Builders & Contractors", description: "New installation services", href: "/solutions/builders" },
                ],
            },
        ],
    },
    resources: {
        label: "Resources",
        groups: [
            {
                title: "Learn",
                items: [
                    { label: "Septic 101", description: "Understanding your system", href: "/resources/septic-101" },
                    { label: "Maintenance Tips", description: "Keep your system healthy", href: "/resources/maintenance-tips" },
                    { label: "FAQ", description: "Common questions answered", href: "/resources/faq" },
                    { label: "Blog", description: "Latest news & insights", href: "/blog" },
                ],
            },
            {
                title: "Support",
                items: [
                    { label: "Contact Us", description: "Get in touch with our team", href: "/contact" },
                    { label: "Service Areas", description: "Where we operate", href: "/service-areas" },
                    { label: "Request Quote", description: "Free estimates", href: "/quote" },
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
            className="absolute left-0 right-0 top-full z-50 bg-primary overflow-hidden"
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
                                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 transition-transform duration-200 group-hover/col:scale-x-100" />
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
                    isOpen ? "text-brand-600" : "text-secondary hover:text-brand-600"
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
    const headerRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const prevMenuRef = useRef<string | null>(null);

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
        <header ref={headerRef} className="relative bg-primary border-b border-secondary">
            {/* Main Navigation */}
            <nav className="bg-primary">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
                                    href="/pricing"
                                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-[-0.01em] text-secondary antialiased transition-colors hover:text-brand-600"
                                    onMouseEnter={() => setActiveMenu(null)}
                                >
                                    Pricing
                                </Link>
                            </div>
                        </div>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link
                                href="/sign-in"
                                className="px-4 py-2.5 text-sm font-medium text-tertiary transition-all hover:text-primary"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/contact"
                                className="px-5 py-2.5 text-sm font-medium bg-brand-600 text-white rounded transition-all hover:bg-brand-700"
                            >
                                Contact sales
                            </Link>
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
                                        href="/pricing"
                                        className="block px-4 py-3 text-base font-medium text-primary rounded-lg transition-colors hover:bg-secondary"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Pricing
                                    </Link>
                                    <div className="pt-4 space-y-3">
                                        <Link
                                            href="/sign-in"
                                            className="block w-full px-4 py-3 text-base font-medium text-center text-primary border border-tertiary rounded-lg"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Sign in
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="block w-full px-4 py-3 text-base font-medium text-center bg-brand-600 text-white rounded-lg"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Contact sales
                                        </Link>
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
