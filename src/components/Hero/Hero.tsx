import { Clock } from "lucide-react";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <div className="w-full bg-brand">
      <div className="w-full py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15">
        <HeroCard />
        <div className="flex flex-col gap-6">
          <div className="flex gap-5">
            <button className="bg-[#008cff] text-white py-4 px-8 rounded-md">
              Tech
            </button>
            <span className="text-white text-sm items-center flex gap-1">
              <Clock size={16} />
              {new Date().toLocaleDateString("en-US", {
                month: "2-digit",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-5xl text-white font-medium">
            ReZoom outage left some people locked out
          </h1>
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            expedita vitae minus non ducimus aliquam.
          </p>
          <div className="flex gap-5">
            <button
              className="bg-[#1b3050] text-white py-4 px-8 rounded-md
           relative overflow-hidden after:absolute after:left-0 after:top-0 after:h-full
           after:w-0 after:bg-light-blue after:transition-all after:duration-300
           hover:after:w-full
          "
            >
              <span className=" relative z-10 text-white">Read More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
