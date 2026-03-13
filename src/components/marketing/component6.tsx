"use client";

import { MessageSquare02, AlignLeft, GitBranch01, BookOpen02 } from "@untitledui/icons";
import { FeatureSection } from "./feature-section";
import { cx } from "@/utils/cx";

interface Component6Props {
    className?: string;
}

export const Component6 = ({ className }: Component6Props) => {
    const tabs = [
        { icon: MessageSquare02, label: "Slack & Teams", isActive: false },
        { icon: AlignLeft, label: "Scribe", isActive: false },
        { icon: GitBranch01, label: "Workflows", isActive: true },
        { icon: BookOpen02, label: "Catalog", isActive: false },
    ];

    return (
        <FeatureSection
            badge="Response"
            title="Response lets you fix faster, with fewer people"
            description="Accelerated by AI and deeply integrated with Slack and Microsoft Teams, fix issues faster, automate workflows, and ensure consistent resolution."
            ctaText="Discover Response"
            testimonial={{
                quote: "If I could point to the single most impactful thing we did to change the culture at Airbnb, it would be rolling out incident.io and democratizing incident response.",
                author: "Nils Pommerien",
                role: "Director, SRE",
                badge: "Response",
            }}
            tabs={tabs}
            className={className}
        />
    );
};

export default Component6;
