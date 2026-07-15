import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LatestNews() {
  const latestNews: { id: number; title: string; image_url: string }[] = [
    {
      id: 1,
      title: "The Faa will test Drone",
      image_url: "./images/8.jpg",
    },
    {
      id: 2,
      title: "Fight schedule and quarantine",
      image_url: "./images/6.jpg",
    },
    {
      id: 3,
      title: "Indore bags cleanest city",
      image_url: "./images/7.jpeg",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-20 w-full">
        <h1 className="text-blue-900 text-xl font-medium">Latest News</h1>
        <div className="flex text-xs gap-5">
          <ChevronLeft className="text-light-blue" />
          <ChevronRight className="text-light-blue" />
        </div>
      </div>
    </div>
  );
}
