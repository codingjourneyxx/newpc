"use client";

import { cx } from "@/utils/cx";
import type { ReactNode } from "react";

interface ContentDividerProps {
    children?: ReactNode;
    className?: string;
}

/**
 * Content divider with background fill style
 * Creates a horizontal line with centered content that has a solid background
 */
export const ContentDivider = ({ children, className }: ContentDividerProps) => {
    return (
        <div className={cx("relative flex items-center justify-center w-full", className)}>
            {/* Diagonal striped background */}
            <div
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 8px, rgb(167 243 208) 8px, rgb(167 243 208) 9px)",
                }}
                className="h-24 w-full border-y border-emerald-200 opacity-50"
            />

            {/* Centered content with background */}
            {children && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-primary px-4 py-2 text-sm font-medium text-emerald-600">
                        {children}
                    </span>
                </div>
            )}
        </div>
    );
};

/**
 * Background fill variant - diagonal striped pattern background
 */
export const ContentDividerBackgroundFill = ({ children, className }: ContentDividerProps) => {
    return (
        <div className={cx("relative flex items-center justify-center w-full", className)}>
            {/* Diagonal striped background */}
            <div
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 8px, rgb(167 243 208) 8px, rgb(167 243 208) 9px)",
                }}
                className="h-24 w-full border-y border-emerald-200 opacity-50"
            />

            {/* Centered content with background */}
            {children && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-primary px-4 py-2 text-sm font-medium text-emerald-600">
                        {children}
                    </span>
                </div>
            )}
        </div>
    );
};

export default ContentDivider;
