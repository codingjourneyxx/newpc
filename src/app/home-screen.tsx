"use client";

import { ArrowUpRight } from "@untitledui/icons";
import { Header } from "@/components/header";
import { Button } from "@/components/base/buttons/button";
import { CaseStudyCards } from "@/components/marketing/testimonials/case-study-cards";
import { ContactForm } from "@/components/marketing/contact-form/contact-form";
import { ContentDividerBackgroundFill } from "@/components/application/content-divider/content-divider";
import { WorldMap, defaultLocations } from "@/components/marketing/world-map";
import { PrinciplesSection, defaultPrinciples } from "@/components/marketing/principles-section";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-primary font-body text-primary">
            {/* Header */}
            <Header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md" />

            {/* Hero Section */}
            <section className="relative flex items-center overflow-hidden bg-white min-h-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('/bg.jpg')` }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-screen flex items-end pb-24 bg-white/60 backdrop-blur-md border-l border-r border-error-200/50">
                    <div className="max-w-4xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-error-500 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-error-500" />
                            </span>
                            <span className="text-sm font-medium text-gray-700">Helping 50,000+ people worldwide</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl font-semibold text-gray-900 mb-6">
                            Uniting Hearts,{" "}
                            <span className="text-error-500">Changing Lives</span>{" "}
                            Together
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                            Join us in helping those in need. Together, we provide food, clean water, and
                            education to build hope and strengthen communities around the world.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <Button
                                size="xl"
                                iconTrailing={<ArrowUpRight data-icon className="!text-white" />}
                                className="bg-error-500 hover:bg-error-600 text-white shadow-lg"
                            >
                                Start Donating
                            </Button>
                            <Button
                                size="xl"
                                iconTrailing={<ArrowUpRight data-icon className="!text-error-500" />}
                                className="bg-white hover:bg-error-50 text-error-500 border border-error-200 hover:border-error-300 shadow-sm"
                            >
                                Watch Our Story
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="w-5 h-8 rounded-full border border-gray-300 flex items-start justify-center p-1.5">
                        <div className="w-0.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Content Divider */}
            <ContentDividerBackgroundFill className="" />

            {/* Principles Section */}
            <div className="max-w-7xl mx-auto border-l border-r border-error-200/50">
                <PrinciplesSection
                    tagline="Our principles"
                    title="Start doing work that matters"
                    description="Our principles keep us connected and guide us as one team."
                    items={defaultPrinciples}
                />
            </div>

            {/* Content Divider with Title */}
            <ContentDividerBackgroundFill>
            </ContentDividerBackgroundFill>

            {/* Case Study Cards Section */}
            <div className="max-w-7xl mx-auto border-l border-r border-error-200/50">
                <CaseStudyCards
                    title="We've helped hundreds of global companies"
                    description="Case studies from some of our amazing customers who are building faster."
                    primaryButtonText="Get Started"
                    secondaryButtonText="Our Customers"
                />
            </div>

            {/* World Map Section */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-display-sm md:text-display-md font-semibold text-primary mb-4">
                            Our Global Presence
                        </h2>
                        <p className="text-lg text-tertiary max-w-2xl mx-auto">
                            With offices around the world, we're always close to the communities we serve.
                        </p>
                    </div>
                    <WorldMap locations={defaultLocations} />
                </div>
            </section>

            {/* Contact Form Section */}
            <ContactForm className="py-16 md:py-24" />
        </div>
    );
}
