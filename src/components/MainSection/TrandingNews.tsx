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
      <div className="flex justify-center items-center gap-20 w-full">
        <h1 className="text-blue-900 text-xl font-medium">Trending News</h1>
        <div className="flex text-xs gap-5">
          <ChevronLeft className="text-light-blue" />
          <ChevronRight className="text-light-blue" />
        </div>
      </div>
      <div className="w-full flex gap-4 flex-col mt-12">
        {trandingNews.map((news) => (
          <div key={news.id} className="w-full rounded-md h-28 relative">
            {/* <div className="flex flex-col justify-end absolute bottom-10 left-2"></div> */}
            <div className="flex flex-col w-full justify-center absolute bottom-0 left-0 p-4">
              <span className="text-white text-xs items-center flex gap-1">
                <Clock size={14} />
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-white">{news.title}</span>
            </div>
            <img
              src={news.image_url}
              className="w-full object-cover h-full rounded-md"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
