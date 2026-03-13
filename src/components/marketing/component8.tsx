"use client";

import { Globe01, Bell03, Users01, BarChart07 } from "@untitledui/icons";
import { FeatureSection } from "./feature-section";
import { cx } from "@/utils/cx";

interface Component8Props {
    className?: string;
}

export const Component8 = ({ className }: Component8Props) => {
    const tabs = [
        { icon: Globe01, label: "Public pages", isActive: false },
        { icon: Bell03, label: "Notifications", isActive: true },
        { icon: Users01, label: "Internal pages", isActive: false },
        { icon: BarChart07, label: "Analytics", isActive: false },
    ];

    return (
        <FeatureSection
            badge="Status Pages"
            title="Status Pages keep customers in the loop"
            description="Transparent, automated, and effortless. Keep your customers updated, reduce inbound support, and maintain trust when things go wrong."
            ctaText="Discover Status Pages"
            testimonial={{
                quote: "We replaced a slow, outdated status page with incident.io, giving us a faster, more automated way to keep customers informed. One of the biggest benefits was the alignment it created between engineering and customer success.",
                author: "Iris Milanoff",
                role: "TPM Reliability, Square",
                badge: "Status Pages",
            }}
            tabs={tabs}
            className={className}
        />
    );
};

export default Component8;
