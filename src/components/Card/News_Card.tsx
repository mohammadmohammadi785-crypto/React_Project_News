export default function News_Card({
  news,
}: {
  news: {
    id: number;
    badge: string;
    title: string;
    imageUrl: string;
    date: string;
  };
}) {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full relative">
        <span
          className={`py-1 px-3 absolute top-4 left-4 text-white rounded-md ${news.badge === "Tech" ? "bg-light-blue" : "bg-orange-500"}`}
        >
          {news.badge}
        </span>
        <img src={news.imageUrl} className="w-full h-50 rounded-md" alt="" />
      </div>
      <h1 className="text-white font-bold text-[15px]">{news.title}</h1>
    </div>
  );
}
