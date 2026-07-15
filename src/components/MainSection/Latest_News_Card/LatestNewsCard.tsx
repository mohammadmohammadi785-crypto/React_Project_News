import { Clock } from "lucide-react";

export default function LatestNewsCard({
  news,
}: {
  news: { id: number; title: string; image_url: string };
}) {
  return (
    <div className="flex w-full gap-2">
      <div>
        <img src={news.image_url} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="flex  flex-col w-full justify-center absolute bottom-0 left-0 p-4">
          <span className="text-white text-sm items-center z-20 flex gap-1">
            <Clock size={14} />
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="text-white z-20">{news.title}</span>
        </div>
      </div>
    </div>
  );
}
