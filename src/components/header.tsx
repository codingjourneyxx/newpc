"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { ChevronDown } from "@untitledui/icons";
import {
    Button as AriaButton,
    Dialog as AriaDialog,
    DialogTrigger as AriaDialogTrigger,
    Popover as AriaPopover,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { AlphawavLogo, AlphawavLogoMinimal } from "@/components/foundations/logo/alphawav-logo";
import { cx } from "@/utils/cx";

type HeaderNavItem = {
    label: string;
    href?: string;
    menu?: ReactNode;
};

const headerNavItems: HeaderNavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Our Mission", href: "#mission" },
    { label: "Donate", href: "#donate" },
    { label: "Contact", href: "#contact" },
];

const footerNavItems = [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#mission" },
    { label: "Donate", href: "#donate" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", href: "#faq" },
];

const MobileNavItem = (props: { className?: string; label: string; href?: string; children?: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (props.href) {
        return (
            <li>
                <a
                    href={props.href}
                    className="flex items-center justify-between px-4 py-3 text-md font-semibold text-secondary hover:bg-primary_hover hover:text-secondary_hover"
                >
                    {props.label}
                </a>
            </li>
        );
    }

    return (
        <li className="flex flex-col gap-0.5">
            <button
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-md font-semibold text-secondary hover:bg-primary_hover hover:text-secondary_hover"
            >
                {props.label}
                <ChevronDown
                    className={cx(
                        "size-4 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear",
                        isOpen ? "-rotate-180" : "rotate-0",
                    )}
                />
            </button>
            {isOpen && <div>{props.children}</div>}
        </li>
    );
};

const MobileFooter = () => {
    return (
        <div className="flex flex-col gap-6 border-t border-secondary px-4 py-6">
            <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-6 gap-y-2">
                {footerNavItems.map((navItem) => (
                    <li key={navItem.label}>
                        <a
                            href={navItem.href}
                            className="text-sm font-medium text-tertiary hover:text-secondary transition duration-100 ease-linear"
                        >
                            {navItem.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-3">
                <Button size="lg" color="primary" className="bg-emerald-600 hover:bg-emerald-700">
                    Donate Now
                </Button>
                <Button color="secondary" size="lg">
                    Learn More
                </Button>
            </div>
        </div>
    );
};

interface HeaderProps {
    items?: HeaderNavItem[];
    isFullWidth?: boolean;
    isFloating?: boolean;
    className?: string;
}

export const Header = ({ items = headerNavItems, isFullWidth, isFloating, className }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header
            ref={headerRef}
            className={cx(
                "relative flex h-16 w-full items-center justify-center border-b border-secondary bg-primary",
                isFloating && "h-16 border-none bg-transparent md:h-20 md:pt-4",
                isFullWidth && !isFloating ? "has-aria-expanded:bg-primary" : "max-md:has-aria-expanded:bg-primary",
                className,
            )}
        >
            <div className="flex size-full max-w-7xl flex-1 items-center px-4 md:px-6 lg:px-8 border-l border-r border-secondary">
                <div
                    className={cx(
                        "flex w-full items-center justify-between gap-6",
                        isFloating &&
                            "md:rounded-full md:bg-primary md:py-2 md:pr-2 md:pl-5 md:shadow-lg md:ring-1 md:ring-secondary",
                    )}
                >
                    {/* Logo + Navigation */}
                    <div className="flex flex-1 items-center gap-10">
                        <a href="/" className="flex items-center">
                            <AlphawavLogo className="h-7 text-primary md:max-lg:hidden" />
                            <AlphawavLogoMinimal className="hidden h-7 md:inline-block lg:hidden" />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-1">
                                {items.map((navItem) => (
                                    <li key={navItem.label}>
                                        {navItem.menu ? (
                                            <AriaDialogTrigger>
                                                <AriaButton className="group flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-secondary outline-none transition duration-100 ease-linear hover:bg-primary_hover hover:text-primary">
                                                    {navItem.label}
                                                    <ChevronDown className="size-4 text-fg-quaternary transition duration-100 ease-linear group-aria-expanded:-rotate-180" />
                                                </AriaButton>

                                                <AriaPopover
                                                    className={({ isEntering, isExiting }) =>
                                                        cx(
                                                            "z-50 origin-top",
                                                            isFullWidth && "w-full",
                                                            isEntering &&
                                                                "duration-200 ease-out animate-in fade-in slide-in-from-top-2",
                                                            isExiting &&
                                                                "duration-150 ease-in animate-out fade-out slide-out-to-top-2",
                                                        )
                                                    }
                                                    offset={isFloating || isFullWidth ? 0 : 8}
                                                    containerPadding={0}
                                                    triggerRef={
                                                        (isFloating && isFullWidth) || isFullWidth
                                                            ? headerRef
                                                            : undefined
                                                    }
                                                >
                                                    {({ isEntering, isExiting }) => (
                                                        <AriaDialog
                                                            className={cx(
                                                                "mx-auto origin-top outline-none",
                                                                isFloating && "max-w-7xl px-8 pt-3",
                                                                isEntering &&
                                                                    !isFullWidth &&
                                                                    "duration-200 ease-out animate-in zoom-in-95",
                                                                isExiting &&
                                                                    !isFullWidth &&
                                                                    "duration-150 ease-in animate-out zoom-out-95",
                                                            )}
                                                        >
                                                            {navItem.menu}
                                                        </AriaDialog>
                                                    )}
                                                </AriaPopover>
                                            </AriaDialogTrigger>
                                        ) : (
                                            <a
                                                href={navItem.href}
                                                className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-secondary transition duration-100 ease-linear hover:bg-primary_hover hover:text-primary"
                                            >
                                                {navItem.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden items-center gap-2 md:flex">
                        <Button color="tertiary" size="sm">
                            Learn More
                        </Button>
                        <Button color="primary" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                            Donate Now
                        </Button>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <AriaDialogTrigger>
                        <AriaButton
                            aria-label="Toggle navigation menu"
                            className={({ isFocusVisible, isHovered }) =>
                                cx(
                                    "group flex size-10 cursor-pointer items-center justify-center rounded-lg lg:hidden",
                                    isHovered && "bg-primary_hover",
                                    isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                )
                            }
                        >
                            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    className="hidden text-primary group-aria-expanded:block"
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="text-primary group-aria-expanded:hidden"
                                    d="M3 12H21M3 6H21M3 18H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </AriaButton>

                        <AriaPopover
                            triggerRef={headerRef}
                            className="h-[calc(100vh-64px)] w-full overflow-y-auto bg-primary lg:hidden"
                            offset={0}
                            crossOffset={0}
                            containerPadding={0}
                            placement="bottom left"
                        >
                            <AriaDialog className="bg-primary outline-none">
                                <nav className="w-full bg-primary">
                                    <ul className="flex flex-col py-4">
                                        {items.map((navItem) =>
                                            navItem.menu ? (
                                                <MobileNavItem key={navItem.label} label={navItem.label}>
                                                    {navItem.menu}
                                                </MobileNavItem>
                                            ) : (
                                                <MobileNavItem
                                                    key={navItem.label}
                                                    label={navItem.label}
                                                    href={navItem.href}
                                                />
                                            ),
                                        )}
                                    </ul>
                                    <MobileFooter />
                                </nav>
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDialogTrigger>
                </div>
            </div>
        </header>
    );
};
