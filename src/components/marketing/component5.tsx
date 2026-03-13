"use client";

import { Phone01, Bell01, Calendar, BarLineChart } from "@untitledui/icons";
import { FeatureSection } from "./feature-section";
import { cx } from "@/utils/cx";

interface Component5Props {
    className?: string;
}

export const Component5 = ({ className }: Component5Props) => {
    const tabs = [
        { icon: Phone01, label: "Mobile app", isActive: false },
        { icon: Bell01, label: "Alerting", isActive: false },
        { icon: Calendar, label: "Scheduling", isActive: true },
        { icon: BarLineChart, label: "Trends", isActive: false },
    ];

    return (
        <FeatureSection
            badge="On-call"
            title="On-call gets the right people in the room"
            description="On-call designed for humans—effortless scheduling, a delightful on-call experience, and powered by AI to cut noise and reduce pages."
            ctaText="Discover On-call"
            testimonial={{
                quote: "Nobody likes getting paged, but incident.io makes it painless—you get to the work that matters fast. They're thinking about fast-growing companies like us and actually building for our needs.",
                author: "Brian Scanlan",
                role: "Senior Principal Engineer",
                badge: "On-call",
            }}
            tabs={tabs}
            className={className}
        />
    );
};

export default Component5;
