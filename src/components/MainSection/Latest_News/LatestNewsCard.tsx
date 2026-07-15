import { Clock } from "lucide-react";

export default function LatestNewsCard({
  news,
}: {
  news: { id: number; title: string; image_url: string };
}) {
  return (
    <div className="flex w-full gap-2">
      <div className="w-49 h-20">
        <img
          className="rounded-md w-full h-full object-cover"
          src={news.image_url}
          alt=""
        />
      </div>
      <div className="flex gap-1 flex-col">
        <div className="flex items-center gap-1 text-gray-500">
          <Clock size={14} />
          <span className="text-xs">
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <span className="text-sm text-brand hover:cursor-pointer hover:text-sky-700 transition-all duration-700 font-bold">
          {news.title}
        </span>
      </div>
    </div>
  );
}
