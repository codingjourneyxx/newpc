import { Component1 } from "@/components/marketing/component1";
import { Component2 } from "@/components/marketing/component2";
import { Component3 } from "@/components/marketing/component3";
import { Component4 } from "@/components/marketing/component4";
import { Component5 } from "@/components/marketing/component5";
import { Component6 } from "@/components/marketing/component6";
import { Component7 } from "@/components/marketing/component7";
import { Component8 } from "@/components/marketing/component8";
import { Component9 } from "@/components/marketing/component9";
import { Component10 } from "@/components/marketing/component10";

export default function CompShowPage() {
    return (
        <div className="min-h-screen bg-primary">
            {/* Component 1: Hero Section with Header & Announcement Banner */}
            <Component1 />

            {/* Component 2: Social Proof with G2 Rating */}
            <Component2 />

            {/* Component 3: Chat Bubbles Section */}
            <Component3 />

            {/* Component 4: Command Center with Feature Cards */}
            <Component4 />

            {/* Component 5: On-call Feature Section */}
            <Component5 />

            {/* Component 6: Response Feature Section */}
            <Component6 />

            {/* Component 7: AI SRE Feature Section */}
            <Component7 />

            {/* Component 8: Status Pages Feature Section */}
            <Component8 />

            {/* Component 9: Customer Stories Section */}
            <Component9 />

            {/* Component 10: CTA Section */}
            <Component10 />
        </div>
    );
}
