"use client";

import { BookOpen01, GraduationHat01, Users01, Star01 } from "@untitledui/icons";
import { FeatureSection } from "./feature-section";
import { cx } from "@/utils/cx";

interface Component6Props {
    className?: string;
}

export const Component6 = ({ className }: Component6Props) => {
    const tabs = [
        { icon: BookOpen01, label: "Quran Classes", isActive: false },
        { icon: GraduationHat01, label: "Islamic Studies", isActive: true },
        { icon: Users01, label: "Hifz Program", isActive: false },
        { icon: Star01, label: "Arabic Language", isActive: false },
    ];

    return (
        <FeatureSection
            badge="Madrasa"
            title="Nurturing young minds with Islamic education"
            description="Our Madrasa will provide quality Islamic education including Quran memorization, Hadith studies, Fiqh, and Arabic language for children and adults."
            ctaText="Learn About Madrasa"
            testimonial={{
                quote: "The best among you are those who learn the Quran and teach it. This Madrasa will be a beacon of knowledge for our village.",
                author: "Hafiz Muhammad",
                role: "Quran Teacher",
                badge: "Madrasa",
            }}
            tabs={tabs}
            className={className}
            image="/comp5.jpg"
            testimonialImage="/rightcolbg.jpg"
        />
    );
};

export default Component6;
