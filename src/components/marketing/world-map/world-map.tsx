"use client";

import { useId } from "react";
import { cx } from "@/utils/cx";

export interface LocationPin {
    /** City name */
    city: string;
    /** Country code (e.g., "USA", "GB", "JP") */
    country: string;
    /** Full address */
    address: string;
    /** Flag image URL */
    flagUrl: string;
    /** X position on the map (in pixels, relative to 1025px width) */
    x: number;
    /** Y position on the map (in pixels, relative to 483px height) */
    y: number;
}

export interface WorldMapProps {
    /** Array of location pins to display on the map */
    locations: LocationPin[];
    /** Light mode map image URL */
    lightMapUrl?: string;
    /** Dark mode map image URL */
    darkMapUrl?: string;
    /** Additional class names */
    className?: string;
}

interface MapPinProps {
    location: LocationPin;
    index: number;
}

const MapPin = ({ location, index }: MapPinProps) => {
    const pinId = useId();
    const tooltipId = `vector-map-pin-${pinId}-${index}`;

    return (
        <div
            className="fixed"
            style={{ left: location.x, top: location.y }}
        >
            <div className="group relative">
                {/* Tooltip */}
                <div
                    className={cx(
                        "pointer-events-none absolute -top-3 left-1/2",
                        "-translate-x-1/2 -translate-y-[calc(100%-4px)]",
                        "scale-95 opacity-0",
                        "transition duration-150 ease-in",
                        "group-hover:pointer-events-auto group-hover:-translate-y-full group-hover:scale-100 group-hover:opacity-100 group-hover:ease-out",
                        "group-focus-within:pointer-events-auto group-focus-within:-translate-y-full group-focus-within:scale-100 group-focus-within:opacity-100 group-focus-within:ease-out"
                    )}
                >
                    <div
                        id={tooltipId}
                        className={cx(
                            "relative flex w-max max-w-45 flex-col items-center",
                            "rounded-lg bg-primary px-4 py-3 text-center",
                            "shadow-lg ring-1 ring-secondary_alt"
                        )}
                    >
                        <img
                            aria-hidden="true"
                            src={location.flagUrl}
                            alt={`${location.city}, ${location.country}`}
                            className="size-5 max-w-none rounded-full"
                        />
                        <p className="mt-2 text-xs font-semibold text-primary">
                            {location.city}, {location.country}
                        </p>
                        <p className="mt-1 text-xs text-tertiary">
                            {location.address}
                        </p>
                    </div>
                </div>

                {/* Pin button */}
                <button
                    aria-label="View location"
                    aria-describedby={tooltipId}
                    className={cx(
                        "flex size-10 cursor-pointer items-center justify-center",
                        "overflow-visible outline-hidden"
                    )}
                >
                    {/* Outer ring */}
                    <span
                        className={cx(
                            "absolute size-10 rounded-full bg-fg-brand-secondary/10",
                            "transition duration-150 ease-linear",
                            "group-focus-within:scale-[1.15] group-hover:scale-[1.15]"
                        )}
                    />
                    {/* Middle ring */}
                    <span
                        className={cx(
                            "absolute size-6 rounded-full bg-fg-brand-secondary/20",
                            "transition duration-150 ease-linear",
                            "group-focus-within:scale-[1.15] group-hover:scale-[1.15]"
                        )}
                    />
                    {/* Center dot */}
                    <span className="absolute size-2 rounded-full bg-fg-brand-secondary" />
                </button>
            </div>
        </div>
    );
};

const DEFAULT_LIGHT_MAP_URL = "https://www.untitledui.com/marketing/world-map-light-mode.svg";
const DEFAULT_DARK_MAP_URL = "https://www.untitledui.com/marketing/world-map-dark-mode.svg";

export const WorldMap = ({
    locations,
    lightMapUrl = DEFAULT_LIGHT_MAP_URL,
    darkMapUrl = DEFAULT_DARK_MAP_URL,
    className,
}: WorldMapProps) => {
    return (
        <svg
            className={cx(
                "mx-auto hidden w-full max-w-5xl overflow-visible lg:block",
                className
            )}
            height="488"
            viewBox="0 0 1025 483"
            fill="none"
        >
            {/* Light mode map */}
            <image
                width="100%"
                x="0"
                y="0"
                href={lightMapUrl}
                className="dark:hidden"
            />
            {/* Dark mode map */}
            <image
                width="100%"
                x="0"
                y="0"
                href={darkMapUrl}
                className="not-dark:hidden"
            />

            {/* Location pins container */}
            <foreignObject
                width="100%"
                height="100%"
                x="0"
                y="0"
                className="overflow-visible"
            >
                {locations.map((location, index) => (
                    <MapPin
                        key={`${location.city}-${location.country}-${index}`}
                        location={location}
                        index={index}
                    />
                ))}
            </foreignObject>
        </svg>
    );
};

/** Default locations data for the world map */
export const defaultLocations: LocationPin[] = [
    {
        city: "Seattle",
        country: "USA",
        address: "911 E Pike Street, Capitol Hill, Seattle, WA 98122",
        flagUrl: "https://www.untitledui.com/images/flags/US.svg",
        x: 130,
        y: 157,
    },
    {
        city: "San Francisco",
        country: "USA",
        address: "2201 Valencia Street, Mission District, San Francisco, CA 94110",
        flagUrl: "https://www.untitledui.com/images/flags/US.svg",
        x: 158,
        y: 204,
    },
    {
        city: "London",
        country: "GB",
        address: "85 Redchurch Street, Shoreditch, London E2 7DJ",
        flagUrl: "https://www.untitledui.com/images/flags/GB.svg",
        x: 521,
        y: 97,
    },
    {
        city: "Berlin",
        country: "DE",
        address: "17 Weserstraße, Neukölln, 12045 Berlin",
        flagUrl: "https://www.untitledui.com/images/flags/DE.svg",
        x: 581,
        y: 73,
    },
    {
        city: "Rome",
        country: "IT",
        address: "12 Via del Pigneto, Pigneto, 00176 Roma RM",
        flagUrl: "https://www.untitledui.com/images/flags/IT.svg",
        x: 513,
        y: 176,
    },
    {
        city: "Mumbai",
        country: "IN",
        address: "21 Pali Hill Road, Bandra West, Mumbai, Maharashtra 400050",
        flagUrl: "https://www.untitledui.com/images/flags/IN.svg",
        x: 678,
        y: 224,
    },
    {
        city: "Tokyo",
        country: "JP",
        address: "3-15-7 Jingumae, Shibuya-ku, Tokyo 150-0001",
        flagUrl: "https://www.untitledui.com/images/flags/JP.svg",
        x: 843,
        y: 199,
    },
    {
        city: "Melbourne",
        country: "AUS",
        address: "100 Smith Street Collingwood VIC 3066 AU",
        flagUrl: "https://www.untitledui.com/images/flags/AU.svg",
        x: 885,
        y: 406,
    },
    {
        city: "Auckland",
        country: "NZ",
        address: "42 Ponsonby Road, Ponsonby, Auckland 1011",
        flagUrl: "https://www.untitledui.com/images/flags/NZ.svg",
        x: 958,
        y: 424,
    },
];
