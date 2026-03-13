"use client";

import { Home02, Clock, Users01, BookOpen01 } from "@untitledui/icons";
import { FeatureSection } from "./feature-section";
import { cx } from "@/utils/cx";

interface Component5Props {
    className?: string;
}

export const Component5 = ({ className }: Component5Props) => {
    const tabs = [
        { icon: Home02, label: "Prayer Hall", isActive: false },
        { icon: Clock, label: "5 Daily Prayers", isActive: true },
        { icon: Users01, label: "Jummah", isActive: false },
        { icon: BookOpen01, label: "Taraweeh", isActive: false },
    ];

    return (
        <FeatureSection
            badge="Masjid"
            title="A sacred space for worship and reflection"
            description="Our mosque will accommodate 500+ worshippers for daily prayers, Jummah congregation, and special prayers during Ramadan and Eid."
            ctaText="Learn More About Masjid"
            testimonial={{
                quote: "Building a mosque is one of the greatest acts of Sadaqah Jariyah. The rewards continue as long as people pray there.",
                author: "Maulana Abdullah",
                role: "Village Imam",
                badge: "Masjid",
            }}
            tabs={tabs}
            className={className}
        />
    );
};

export default Component5;
