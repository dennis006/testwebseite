import { HeroSection } from "./sections/hero-section";
import { AvatarOrbitSection } from "./sections/avatar-orbit-section";
import { OnboardingJourneySection } from "./sections/onboarding-journey-section";
import { FeatureShowcaseSection } from "./sections/feature-showcase-section";
import { StoriesSection } from "./sections/stories-section";
import { FooterSection } from "./sections/footer-section";
import { FloatingCTA } from "./components/floating-cta";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <HeroSection />
      <AvatarOrbitSection />
      <OnboardingJourneySection />
      <FeatureShowcaseSection />
      <StoriesSection />
      <FooterSection />
      <FloatingCTA />
    </div>
  );
}

export default App;
