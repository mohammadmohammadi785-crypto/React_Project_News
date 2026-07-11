import HeroCard from "./Card/HeroCard";

export default function Hero() {
  return (
    <div className="w-full my-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <HeroCard />
      <div></div>
    </div>
  );
}
