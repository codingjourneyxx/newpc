"use client";

import { FileCode01, Stars01, Users01, File01 } from "@untitledui/icons";
import { FeatureSection } from "./feature-section";
import { cx } from "@/utils/cx";

interface Component7Props {
    className?: string;
}

export const Component7 = ({ className }: Component7Props) => {
    const tabs = [
        { icon: FileCode01, label: "Draft a PR", isActive: false },
        { icon: Stars01, label: "Suggest next steps", isActive: true },
        { icon: Users01, label: "Investigate together", isActive: false },
        { icon: File01, label: "Draft the comms", isActive: false },
    ];

    return (
        <FeatureSection
            badge="AI SRE"
            title="AI SRE resolves incidents like your best engineer"
            description="From spotting the failing PR to suggesting the fix, AI SRE investigates issues, surfaces next steps, and helps bring your systems back to health—even while you're sleeping."
            ctaText="Discover AI SRE"
            testimonial={{
                quote: "Incidents are all hands on deck. An incident comes in and whoever is needed and can help will drop everything to manage it. And of course, we use incident.io for the coordination and communication, and for getting the Slack channel and zoom calls set up. It's very straightforward.",
                author: "Sabin Roman",
                role: "Engineering manager",
                badge: "AI SRE",
            }}
            tabs={tabs}
            className={className}
        />
    );
};

export default Component7;
