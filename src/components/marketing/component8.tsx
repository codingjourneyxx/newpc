"use client";

import { Heart, Gift01, Users01, Home02 } from "@untitledui/icons";
import { FeatureSection } from "./feature-section";
import { cx } from "@/utils/cx";

interface Component8Props {
    className?: string;
}

export const Component8 = ({ className }: Component8Props) => {
    const tabs = [
        { icon: Heart, label: "Orphan Support", isActive: false },
        { icon: Gift01, label: "Zakat & Sadaqah", isActive: true },
        { icon: Users01, label: "Widow Support", isActive: false },
        { icon: Home02, label: "Housing Aid", isActive: false },
    ];

    return (
        <FeatureSection
            badge="Welfare"
            title="Supporting the needy in our community"
            description="A portion of donations will establish a welfare fund for orphans, widows, and families in need. Your contribution creates lasting impact."
            ctaText="Welfare Programs"
            testimonial={{
                quote: "Charity does not decrease wealth. This welfare center will ensure no one in our village goes to sleep hungry.",
                author: "Fatima Begum",
                role: "Women's Committee",
                badge: "Welfare",
            }}
            tabs={tabs}
            className={className}
        />
    );
};

export default Component8;
