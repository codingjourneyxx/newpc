"use client";

import Image from "next/image";

interface FeaturesSectionProps {
    imageSrc?: string;
    imageAlt?: string;
    className?: string;
}

export const FeaturesSection = ({
    imageSrc = "/bg.jpg",
    imageAlt = "Features background",
    className,
}: FeaturesSectionProps) => {
    return (
        <section className={`py-20 bg-primary ${className || ""}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
