import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Climate from "@/components/Climate";
import Economics from "@/components/Economics";
import Maral from "@/components/Maral";
import Gastronomy from "@/components/Gastronomy";
import Promo from "@/components/Promo";
import Pessimistic from "@/components/Pessimistic";
import Finale from "@/components/Finale";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Слайд 1: Титульный */}
      <Hero />
      {/* Слайды 2, 3, 6, 7, 8, 12 */}
      <Featured />
      {/* Слайд 4: Климат */}
      <Climate />
      {/* Слайд 5: Экономика */}
      <Economics />
      {/* Слайды 9, 10: Природа, Маралы и панты */}
      <Maral />
      {/* Слайд 11: Гастрономия */}
      <Gastronomy />
      {/* Слайды 8+9: Природные красоты + прогноз оптимистичный */}
      <Promo />
      {/* Слайд 13: Прогноз пессимистичный */}
      <Pessimistic />
      {/* Слайд 15: Финал */}
      <Finale />
      {/* Слайд 16: Спасибо + Footer */}
      <Footer />
    </main>
  );
};

export default Index;
