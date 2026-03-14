"use client";

import { HeroSectionWrapper } from "@/app/components/hero-section";
import { ContributionBanner } from "@/app/components/contribution-banner";
import { ProjectFeatures } from "@/app/components/project-features";
import { MasjidSection } from "@/app/components/masjid-section";
import { MadrasaSection } from "@/app/components/madrasa-section";
import { DonationInfo } from "@/app/components/donation-info";
import { Footer } from "@/app/components/footer";
import { CaseStudyCards } from "@/components/marketing/testimonials/case-study-cards";
import { ContentDivider } from "@/components/application/content-divider/content-divider";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-primary">
            {/* Hero Section - Masjid & Madrasa Appeal */}
            <HeroSectionWrapper />

            <ContentDivider />

            {/* Contribution Banner - Community Messages & Duas */}
            <ContributionBanner />

            {/* Project Features (Masjid, Madrasa, etc.) */}
            <ProjectFeatures />

            <ContentDivider />

            {/* Masjid Feature Section */}
            <MasjidSection />
            <ContentDivider />

            {/* Madrasa Feature Section */}
            <MadrasaSection />
            <ContentDivider />

            {/* Case Study Cards: Testimonials Carousel */}
            <CaseStudyCards />
            <ContentDivider />

            {/* Final CTA & Donation Info */}
            <DonationInfo />

            {/* Footer */}
            <Footer />
        </div>
    );
}
