import { FeatureLayout } from "./feature-layout";

export const MasjidSection = ({ className }: { className?: string }) => (
    <div id="masjid" className="scroll-mt-20">
    <FeatureLayout
        badge="Masjid"
        title="A sacred space for worship and reflection"
        description="Our mosque will accommodate 500+ worshippers for daily prayers, Jummah congregation, and special prayers during Ramadan and Eid."
        ctaText="Learn More About Masjid"
        testimonial={{
            quote: "Building a mosque is one of the greatest acts of Sadaqah Jariyah. The rewards continue as long as people pray there.",
            author: "Maulana Abdullah",
            role: "Village Imam",
            badge: "Masjid",
        }}
        className={className}
        image="/comp5.jpg"
        testimonialImage="/masjid-bg.jpg"
    />
    </div>
);

export default MasjidSection;
