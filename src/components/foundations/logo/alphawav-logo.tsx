import { cx } from "@/utils/cx";

interface AlphawavLogoProps {
    className?: string;
}

/** Mosque Logo with Crescent Moon */
export const AlphawavLogo = ({ className }: AlphawavLogoProps) => (
    <div className={cx("flex items-center gap-2", className)}>
        <svg
            fill="none"
            height="40"
            viewBox="0 0 40 40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Mosque Dome */}
            <path
                d="M20 4C20 4 10 12 10 20C10 24 12 28 20 28C28 28 30 24 30 20C30 12 20 4 20 4Z"
                fill="#059669"
            />
            {/* Mosque Base */}
            <rect x="8" y="26" width="24" height="10" fill="#059669" />
            {/* Door */}
            <rect x="16" y="28" width="8" height="8" rx="4" fill="#ffffff" />
            {/* Crescent Moon */}
            <path
                d="M18 8C18 8 21 10 21 14C21 18 18 20 18 20C20 20 24 17 24 12C24 7 20 4 18 4C18 4 18 6 18 8Z"
                fill="#fbbf24"
            />
            {/* Star */}
            <path
                d="M28 6L28.5 7.5L30 8L28.5 8.5L28 10L27.5 8.5L26 8L27.5 7.5L28 6Z"
                fill="#fbbf24"
            />
        </svg>
        <span className="text-xl font-semibold text-primary">
            Masjid <span className="text-emerald-600">&</span> Madrasa
        </span>
    </div>
);

export const AlphawavLogoMinimal = ({ className }: AlphawavLogoProps) => (
    <svg
        fill="none"
        height="40"
        viewBox="0 0 40 40"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
        className={cx("h-8 w-auto", className)}
    >
        {/* Mosque Dome */}
        <path
            d="M20 4C20 4 10 12 10 20C10 24 12 28 20 28C28 28 30 24 30 20C30 12 20 4 20 4Z"
            fill="#059669"
        />
        {/* Mosque Base */}
        <rect x="8" y="26" width="24" height="10" fill="#059669" />
        {/* Door */}
        <rect x="16" y="28" width="8" height="8" rx="4" fill="#ffffff" />
        {/* Crescent Moon */}
        <path
            d="M18 8C18 8 21 10 21 14C21 18 18 20 18 20C20 20 24 17 24 12C24 7 20 4 18 4C18 4 18 6 18 8Z"
            fill="#fbbf24"
        />
    </svg>
);
