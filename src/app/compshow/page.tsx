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
            {/* Component 1: Hero Section - Masjid & Madrasa Appeal */}
            <Component1 />

            {/* Component 2: Donation Progress & Stats */}
            <Component2 />

            {/* Component 3: Community Messages & Duas */}
            <Component3 />

            {/* Component 4: Project Features (Masjid, Madrasa, etc.) */}
            <Component4 />

            {/* Component 5: Masjid Feature Section */}
            <Component5 />

            {/* Component 6: Madrasa Feature Section */}
            <Component6 />

            {/* Component 7: Community Hall Feature Section */}
            <Component7 />

            {/* Component 8: Welfare Programs Feature Section */}
            <Component8 />

            {/* Component 9: Donor Appreciation Section */}
            <Component9 />

            {/* Component 10: Final CTA & Donation Info */}
            <Component10 />
        </div>
    );
}
