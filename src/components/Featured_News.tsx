import { Clock } from "lucide-react";
import News_Card from "./News_Card";

export default function Featured_News() {
  const newsList: {
    id: number;
    imageUrl: string;
    title: string;
    date: string;
    badge: string;
  }[] = [
    {
      id: 1,
      imageUrl: "./images/1.jpg",
      title:
        "The FAA will test drone detecting technologies in airports this yeare",
      date: "08.22.2026",
      badge: "Tech",
    },
    {
      id: 2,
      imageUrl: "./images/2.jpg",
      title: "Rocked Lab will resume launches no sooner then august 27th",
      date: "08.22.2026",
      badge: "Food",
    },
    {
      id: 3,
      imageUrl: "./images/3.jpg",
      title: "Google drive flaw may attackers fool you into install malware",
      date: "08.22.2026",
      badge: "Tech",
    },
    {
      id: 4,
      imageUrl: "./images/4.jpg",
      title: "Tiktok will sue the US over threatened ban",
      date: "08.22.2026",
      badge: "Food",
    },
  ];
  return (
    <div className="py-5 w-full">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {newsList.map((news) => {
          return <News_Card news={news} key={news.id} />;
        })}
      </div>
    </div>
  );
}
