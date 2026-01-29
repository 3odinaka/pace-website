import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <NewsletterSection />
      <div className="bg-black py-20 flex items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white text-center leading-tight mx-6">
          JOIN US AS WE SHAPE THE FUTURE OF THE <br className="hidden md:block" /><span className="text-brand-green">NEXT GENERATION.</span>
        </h2>
      </div>
      <Footer />
    </main>
  );
}
