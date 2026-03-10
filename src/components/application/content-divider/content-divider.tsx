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
        <div className={cx("relative flex items-center justify-center", className)}>
            {/* Left line */}
            <div className="flex-1 border-t border-error-200" />

            {/* Center content with background fill */}
            {children && (
                <span className="mx-4 bg-primary px-4 py-2 text-sm font-medium text-error-600">
                    {children}
                </span>
            )}

            {/* Right line */}
            <div className="flex-1 border-t border-error-200" />
        </div>
    );
};

/**
 * Background fill variant - diagonal striped pattern background
 */
export const ContentDividerBackgroundFill = ({ children, className }: ContentDividerProps) => {
    return (
        <div className={cx("relative flex items-center justify-center", className)}>
            {/* Diagonal striped background */}
            <div
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(45deg, transparent, transparent 8px, var(--color-error-200) 8px, var(--color-error-200) 9px)",
                }}
                className="mx-auto h-24 w-full rounded-lg border border-error-200 opacity-50"
            />

            {/* Centered content with background */}
            {children && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-primary px-4 py-2 text-sm font-medium text-error-600">
                        {children}
                    </span>
                </div>
            )}
        </div>
    );
};

export default ContentDivider;
