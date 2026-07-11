import { Clock } from "lucide-react";
import HeroCard from "./Card/HeroCard";

export default function Hero() {
  return (
    <div className="w-full my-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15">
      <HeroCard />
      <div className="flex flex-col gap-6">
        <div className="flex gap-5">
          <button className="bg-[#008cff] text-white py-4 px-8 rounded-md">
            Tech
          </button>
          <span className="text-white text-sm items-center flex gap-1">
            <Clock size={16} />
            {new Date().toLocaleDateString()}
          </span>
        </div>
        <h1 className="text-5xl text-white font-medium">
          ReZoom outage left some people locked out
        </h1>
      </div>
    </div>
  );
}
