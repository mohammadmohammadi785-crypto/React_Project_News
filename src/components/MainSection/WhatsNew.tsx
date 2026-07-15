import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WhatsNew() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center gap-18 w-full">
        <h1 className="text-blue-900 text-xl font-bold">What's New</h1>
        <div className="flex text-xs gap-5">
          <ChevronLeft className="text-light-blue" />
          <ChevronRight className="text-light-blue" />
        </div>
      </div>
      <div className="w-full h-44 mt-1 overflow-hidden rounded-md">
        <img
          src="./images/l6.jpg"
          className="w-full h-full brightness-125 object-cover rounded-md duration-700 transition-all hover:scale-105"
          alt=""
        />
      </div>
    </div>
  );
}
