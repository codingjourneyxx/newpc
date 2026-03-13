import { cx } from "@/utils/cx";

interface AlphawavLogoProps {
    className?: string;
}

/** Mosque Logo */
export const AlphawavLogo = ({ className }: AlphawavLogoProps) => (
    <img
        src="/logooffical.svg"
        alt="Masjid & Madrasa"
        className={cx("h-14 w-auto object-contain", className)}
    />
);

export const AlphawavLogoMinimal = ({ className }: AlphawavLogoProps) => (
    <img
        src="/logooffical.svg"
        alt="Masjid & Madrasa"
        className={cx("h-12 w-auto object-contain", className)}
    />
);
