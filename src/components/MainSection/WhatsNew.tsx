import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export default function WhatsNew() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center gap-18 w-full">
        <h1 className="text-blue-900 text-[18px] font-bold">What's New</h1>
        <div className="flex text-xs gap-3">
          <ChevronLeft className="text-light-blue" />
          <ChevronRight className="text-light-blue" />
        </div>
      </div>
      <div className="w-full h-40 mt-6 overflow-hidden rounded-md">
        <img
          src="./images/l6.jpg"
          className="w-full h-full brightness-125 object-cover rounded-md duration-700 transition-all hover:scale-105"
          alt=""
        />
      </div>
      <div className="w-full mt-6">
        <div className="flex">
          <button className="bg-[#008cff] text-sm text-white py-0.5 px-2.5 rounded-sm">
            Tech
          </button>
          <span className="text-sm items-center ml-3 z-20 flex gap-1">
            <Clock size={14} />
            08.02.2026
          </span>
        </div>
        <div className="mt-5">
          <h1 className="">
            Uttarakhand's HemKund Sahib yatra to start form Septomber 4
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, ab.
          </p>
        </div>
      </div>
    </div>
  );
}
