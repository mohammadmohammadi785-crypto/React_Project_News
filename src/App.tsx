import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SecondHeader from "./components/SecondHeader";

export default function App() {
  return (
    <div className="font-rubik w-full bg-brand min-h-screen">
      <Header />
      <SecondHeader />
      <Navbar />
    </div>
  );
}
