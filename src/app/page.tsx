import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import FeatureBanner from "@/components/FeatureBanner";
import WhySweetfy from "@/components/WhySweetfy";
import Location from "@/components/Location";
import CTABanner from "@/components/CTABanner";
import FloatingWA from "@/components/FloatingWA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-surface font-body text-on-surface">
      <Header />
      <div className="pt-24 sm:pt-28">
        <Hero />
        <About />
        <Products />
        <FeatureBanner />
        <WhySweetfy />
        <Location />
        <CTABanner />
      </div>
      <FloatingWA />
      <Footer />
    </main>
  );
}
