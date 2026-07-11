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
      <img src={news.imageUrl} className="w-full rounded-md" alt="" />
    </div>
  );
}
