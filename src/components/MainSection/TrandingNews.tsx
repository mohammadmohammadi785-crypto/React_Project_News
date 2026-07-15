import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export default function TrandingNews() {
  const trandingNews: { id: number; title: string; image_url: string }[] = [
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
      <div className="flex justify-between items-center w-full">
        <h1 className="text-blue-900 text-[18px] font-bold">Trending News</h1>
        <div className="flex text-xs gap-3">
          <ChevronLeft className="text-light-blue" />
          <ChevronRight className="text-light-blue" />
        </div>
      </div>
      <div className="w-full flex gap-1 flex-col mt-6">
        {trandingNews.map((news) => (
          <div
            key={news.id}
            className="w-70 after:content-[''] after:absolute after:w-70 after:h-3/5 after:blur-xl after:bottom-0 after:right-0 after:bg-blue-900/50 overflow-hidden rounded-md h-28 relative"
          >
            <div className="flex flex-col w-full justify-center absolute bottom-0 left-0 p-4">
              <span className="text-white text-xs items-center z-20 flex gap-1">
                <Clock size={10} />
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-white text-sm z-20">{news.title}</span>
            </div>
            <img
              src={news.image_url}
              className="w-full object-cover transition-all duration-700 overflow-hidden hover:scale-105 h-full rounded-md"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
