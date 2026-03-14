import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import TedxInfoSection from "@/components/TedxInfoSection";
import ThemeSection from "@/components/ThemeSection";
import CountdownTimer from "@/components/CountdownTimer";
import EventInfoSection from "@/components/EventInfoSection";
import VideoCardSection from "@/components/VideoCardSection";
import SpeakersSection from "@/components/SpeakersSection";
import VenueSection from "@/components/VenueSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TedxInfoSection />
      <VideoCardSection />
      <ThemeSection />
      <CountdownTimer />
      <EventInfoSection />
      <SpeakersSection />
      <VenueSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
