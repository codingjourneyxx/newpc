"use client";

import { ChevronDown } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
}

interface CompHeaderProps {
    /** Logo component or element to display */
    logo?: React.ReactNode;
    /** Navigation items */
    navItems?: NavItem[];
    /** Custom class name for the header */
    className?: string;
    /** Login button text */
    loginText?: string;
    /** Login button href */
    loginHref?: string;
}

const defaultNavItems: NavItem[] = [
    { label: "Products", href: "#", hasDropdown: true },
    { label: "Solutions", href: "#", hasDropdown: true },
    { label: "Resources", href: "#", hasDropdown: true },
    { label: "Customers", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Careers", href: "#" },
];

/** Incident.io style flame logo */
const IncidentLogo = () => (
    <a href="/" className="flex items-center gap-1.5">
        {/* Flame icon */}
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-light-500"
        >
            <path
                d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2Z"
                fill="currentColor"
            />
            <path
                d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16 6 12 6C8 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                fill="currentColor"
                fillOpacity="0.3"
            />
            <path
                d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 14 10 12 10C10 10 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z"
                fill="currentColor"
            />
        </svg>
        {/* Logo text */}
        <span className="text-xl font-semibold tracking-tight text-primary">
            incident<span className="font-light">.io</span>
        </span>
    </a>
);

export const CompHeader = ({
    logo,
    navItems = defaultNavItems,
    className,
    loginText = "Login",
    loginHref = "#",
}: CompHeaderProps) => {
    return (
        <header
            className={cx(
                "flex w-full items-center justify-between px-6 py-4 lg:px-10",
                className
            )}
        >
            {/* Logo */}
            <div className="flex shrink-0 items-center">
                {logo ?? <IncidentLogo />}
            </div>

            {/* Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className={cx(
                            "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-secondary transition duration-100 ease-linear",
                            "hover:bg-primary_hover hover:text-primary"
                        )}
                    >
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                            <ChevronDown className="size-4 text-fg-quaternary" />
                        )}
                    </a>
                ))}
            </nav>

            {/* Login Button */}
            <div className="flex items-center">
                <Button
                    href={loginHref}
                    color="secondary"
                    size="md"
                    className="rounded-full"
                >
                    {loginText}
                </Button>
            </div>
        </header>
    );
};
