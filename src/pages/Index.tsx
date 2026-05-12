import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Climate from "@/components/Climate";
import Economics from "@/components/Economics";
import EcologyTourism from "@/components/EcologyTourism";
import NatureSpots from "@/components/NatureSpots";
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
      {/* Слайды 2, 3, 6, 7, 12 */}
      <Featured />
      {/* Слайд 4: Климат */}
      <Climate />
      {/* Слайд 5: Экономика */}
      <Economics />
      {/* Слайд 8: Экология и туризм */}
      <EcologyTourism />
      {/* Слайд 9: Природные красоты */}
      <NatureSpots />
      {/* Слайд 10: Маралы и панты */}
      <Maral />
      {/* Слайд 11: Гастрономия */}
      <Gastronomy />
      {/* Слайд 14: Прогноз оптимистичный (параллакс) */}
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