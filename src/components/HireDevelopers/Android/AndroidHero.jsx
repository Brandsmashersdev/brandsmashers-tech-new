import HeroSection from '../Android/ReusableHeroForTech';

const AndroidPageHero = () => {
  return (
    <HeroSection 
      imageSrc="/Development.png"
      imageAlt="Development Setup"
      title="Why Hire "
      highlightedText=" Developer"
      titlee="from Brandsmashers Tech?"
      description=" Elevate your business by engaging your audience with a stunning, feature-packed mobile app designed for maximum impact."
      features={[
        "Dedicated Experts, No Extra Charges",
        "Fully-Vetted In-House Developers",
        "100% Resource Replacement Guarantee",
        "Agile Development Process",
        "Upfront & Transparent Pricing",
        "24/7 Customer Support"
      ]}
    />
  );
};

export default AndroidPageHero;