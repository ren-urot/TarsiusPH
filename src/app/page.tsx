import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import NFCSection from "@/components/NFCSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <NFCSection />
      </main>
      <Footer />
    </>
  );
}
