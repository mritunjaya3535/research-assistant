import Research from "./components/Research";
import "./App.css";
import Hero from "./components/Hero";
import FeatureSections from "./components/FeatureSections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Hero />
      <Research />
      <FeatureSections />
      <Footer />
    </div>
  );
}