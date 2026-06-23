import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import NextSteps from "@/components/NextSteps";
import WhatsappCTA from "@/components/WhatsappCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Feature />
      <Services />
      <ContactForm />
      <NextSteps />
      <WhatsappCTA />
      <Footer />
    </main>
  );
}