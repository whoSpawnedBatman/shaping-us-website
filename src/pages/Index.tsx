import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ThemeSection from "@/components/ThemeSection";
import EventInfoSection from "@/components/EventInfoSection";
import SpeakersSection from "@/components/SpeakersSection";
import TedxInfoSection from "@/components/TedxInfoSection";
import VenueSection from "@/components/VenueSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ThemeSection />
      <EventInfoSection />
      <SpeakersSection />
      <TedxInfoSection />
      <VenueSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
