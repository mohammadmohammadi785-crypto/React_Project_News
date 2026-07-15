import { ChevronLeft, ChevronRight } from "lucide-react";
import LatestNewsCard from "./LatestNewsCard";
export default function LatestNews() {
  const latestNews: { id: number; title: string; image_url: string }[] = [
    {
      id: 1,
      title: "Himachal Pradesh rules in order to allow tourists",
      image_url: "./images/l1.jpg",
    },
    {
      id: 2,
      title: "Online registration, booking for Vaishno Devi 20",
      image_url: "./images/l2.jpg",
    },
    {
      id: 3,
      title: "Detecting technologies in airports this year 2026",
      image_url: "./images/l3.jpg",
    },
    {
      id: 4,
      title: "The FAA will drone detect-ing in airports this year",
      image_url: "./images/l4.jpg",
    },
    {
      id: 5,
      title: "Thailand makes it mand-atory for tourists to stay",
      image_url: "./images/l5.jpg",
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
      <div className="flex flex-col gap-2 mt-6 ml-2 justify-center">
        {latestNews.map((news) => (
          <LatestNewsCard news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
}
