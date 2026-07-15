import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TrandingNews() {
  const trandingNews = [
    {
      id: 1,
      title: "The Faa will test Drone",
      image_url: "./images/5.jpg",
    },
    {
      id: 1,
      title: "The Faa will test Drone",
      image_url: "./images/5.jpg",
    },
    {
      id: 1,
      title: "The Faa will test Drone",
      image_url: "./images/5.jpg",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-20 w-full">
        <h1 className="text-blue-900 text-xl font-medium">Trending News</h1>
        <div className="flex text-xs gap-5">
          <ChevronLeft className="text-light-blue" />
          <ChevronRight className="text-light-blue" />
        </div>
      </div>
    </div>
  );
}
