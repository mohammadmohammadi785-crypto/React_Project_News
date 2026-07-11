import Featured_News from "./components/Featured_News";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SecondHeader from "./components/SecondHeader";

export default function App() {
  return (
    <div className="font-rubik w-full text-sm min-h-screen">
      <Header />
      <SecondHeader />
      <Navbar />
      <Hero />
      <Featured_News />
    </div>
  );
}
