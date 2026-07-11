import { CalendarDaysIcon } from "lucide-react";
// import { Link } from "react-router-dom";

export default function Header() {
  const DayNumber = new Date().getDay();
  let day = "";
  switch (DayNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    default:
      day = "Saturday";
      break;
  }
  return (
    <div className="bg-[#102950] w-full py-5 text-stone-100">
      <div className="w-full max-w-6xl mx-auto flex justify-between">
        <div className="flex space-x-4">
          <a href="#">Author</a>
          <a href="#">Advertisment</a>
          <a href="#">Member</a>
          <a href="#">Sitemap</a>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-2.5 items-center">
            <CalendarDaysIcon />
            <span>{day}</span>
            <span>{new Date().getMonth()}</span>
            <span>{new Date().getDate()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
