"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="DogPaw Memecoin"
        leftButtonText="Join the Pack"
        className="z-20"
        buttonTextColor="text-white"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to DogPaw Memecoin"
          subtitle="Join our community and be part of the fun!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About DogPaw"
          descriptions={["DogPaw is a community-driven memecoin that aims to bring joy and excitement.", "Join us on this playful journey to revolutionize the crypto space!"]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Download a Wallet", description: "Get a digital wallet to store your DogPaw coins.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Add Funds", description: "Transfer some funds into your wallet.", image: "/images/placeholder2.avif", position: "right", isCenter: false },
            { title: "Buy DogPaw", description: "Use your wallet to buy DogPaw coins on our platform.", image: "/images/placeholder3.avif", position: "center", isCenter: true }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="Our tokenomics is designed for sustainability and growth."
          tokenData={[
            { value: "10M", description: "Total Supply" },
            { value: "5M", description: "Market Cap" },
            { value: "1.8M", description: "Circulating Supply" }
          ]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: "What is DogPaw?", content: "DogPaw is a community-driven memecoin." },
            { title: "How do I buy DogPaw?", content: "You can buy DogPaw through our platform." },
            { title: "Is there an ERC20 token?", content: "Yes, DogPaw is an ERC20 token." },
            { title: "What are the fees?", content: "There are minimal fees for transactions." }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="DogPaw"
          logoText="DogPaw Memecoin"
          items={[
            { label: "Privacy Policy", onClick: () => { alert('Redirecting to Privacy Policy'); } },
            { label: "Terms of Service", onClick: () => { alert('Redirecting to Terms of Service'); } },
            { label: "Contact Us", onClick: () => { alert('Redirecting to Contact Us'); } }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
