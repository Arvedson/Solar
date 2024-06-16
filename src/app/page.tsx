import Section2 from "@/components/Seccion2";
import Hero2 from "../components/Hero2"
import Section1 from "../components/Section1"
import FAQ from "../components/FAQ"
import FadeSeparator from '../components/FadeSeparator'; // Asegúrate de ajustar la ruta según tu estructura de archivos


export default function Home() {
  return (
    <main>
      <Hero2/>
      <FadeSeparator endColor="#FFFFFF" /> {/* Ajusta el color de destino según tu diseño */}
      
      <Section2/>
      <Section1/>
      <FAQ/>

    </main>
  );
}
