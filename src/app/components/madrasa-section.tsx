import { FeatureLayout } from "./feature-layout";

export const MadrasaSection = ({ className }: { className?: string }) => (
    <FeatureLayout
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
        className={className}
        image="/comp5.jpg"
        testimonialImage="/rightcolbg.jpg"
    />
);

export default MadrasaSection;
