"use client";

import { Users01, Heart, Home02, Gift01 } from "@untitledui/icons";
import { FeatureSection } from "./feature-section";
import { cx } from "@/utils/cx";

interface Component7Props {
    className?: string;
}

export const Component7 = ({ className }: Component7Props) => {
    const tabs = [
        { icon: Users01, label: "Community Hall", isActive: false },
        { icon: Heart, label: "Welfare Programs", isActive: true },
        { icon: Home02, label: "Guest Rooms", isActive: false },
        { icon: Gift01, label: "Zakat Distribution", isActive: false },
    ];

    return (
        <FeatureSection
            badge="Community"
            title="A gathering place for our village community"
            description="Beyond prayers, our center will host community events, weddings, educational seminars, and welfare programs to strengthen bonds within our village."
            ctaText="Community Programs"
            testimonial={{
                quote: "This project will unite our village. A place where we can come together for prayers, celebrations, and support each other in times of need.",
                author: "Ahmed Khan",
                role: "Village Committee Head",
                badge: "Community",
            }}
            tabs={tabs}
            className={className}
        />
    );
};

export default Component7;
