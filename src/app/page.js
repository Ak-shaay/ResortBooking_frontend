import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Booking from "@/components/Booking";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Booking/>
      <Footer />
    </div>
  );
}
