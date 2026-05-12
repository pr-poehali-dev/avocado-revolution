import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Economics from "@/components/Economics";
import Maral from "@/components/Maral";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Economics />
      <Maral />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;
