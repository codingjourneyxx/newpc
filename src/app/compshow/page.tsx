import { Component1 } from "@/components/marketing/component1";
import { Component3 } from "@/components/marketing/component3";
import { Component4 } from "@/components/marketing/component4";
import { Component5 } from "@/components/marketing/component5";
import { Component6 } from "@/components/marketing/component6";
import { Component10 } from "@/components/marketing/component10";
import { CaseStudyCards } from "@/components/marketing/testimonials/case-study-cards";
import { ContentDivider } from "@/components/application/content-divider/content-divider";

export default function CompShowPage() {
    return (
        <div className="min-h-screen bg-primary">
            {/* Component 1: Hero Section - Masjid & Madrasa Appeal */}
            <Component1 />

            <ContentDivider />

            {/* Component 3: Community Messages & Duas */}
            <Component3 />



            {/* Component 4: Project Features (Masjid, Madrasa, etc.) */}
            <Component4 />

            <ContentDivider />


            {/* Component 5: Masjid Feature Section */}
            <Component5 />
            <ContentDivider />

            {/* Component 6: Madrasa Feature Section */}
            <Component6 />
            <ContentDivider />

            {/* Case Study Cards: Testimonials Carousel */}
            <CaseStudyCards />
            <ContentDivider />

            {/* Component 10: Final CTA & Donation Info */}
            <Component10 />
        </div>
    );
}
