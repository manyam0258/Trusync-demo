import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Technology from "@/components/Technology";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Impact />
        <Technology />
        <Industries />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;