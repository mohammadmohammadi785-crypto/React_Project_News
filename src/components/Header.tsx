import { CalendarDaysIcon } from "lucide-react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header() {
  const DayNumber = new Date().getDay();
  let day = "";
  switch (DayNumber) {
    case 0:
      day = "Sunday.";
      break;
    case 1:
      day = "Monday.";
      break;
    case 2:
      day = "Tuesday.";
      break;
    case 3:
      day = "Wednesday.";
      break;
    case 4:
      day = "Thursday.";
      break;
    case 5:
      day = "Friday.";
      break;
    default:
      day = "Saturday.";
      break;
  }
  return (
    <div className="bg-[#1b3050] w-full py-5 text-stone-300">
      <div className="w-full max-w-6xl mx-auto flex justify-between">
        <div className="flex space-x-4 justify-center items-center">
          <Link to="#">Author</Link>
          <Link to="#">Advertisment</Link>
          <Link to="#">Member</Link>
          <Link to="#">Sitemap</Link>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-2.5 items-center relative after:content-[''] after:h-full after:w-0.5 after:bg-[#1c3272] after:absolute after:-right-2 ">
            <CalendarDaysIcon />
            <span>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex space-x-2.5">
            <div className="flex justify-center items-center p-2 bg-blue-900  rounded-full">
              <p className="font-bold flex justify-center items-center text-[20px] w-4 h-4">
                f
              </p>
            </div>
            <div className="flex justify-center items-center p-2 bg-blue-400  rounded-full">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="flex justify-center items-center p-2 bg-red-600  rounded-full">
              <i className="fab fa-youtube"></i>
            </div>
            <div className="flex justify-center items-center p-2 bg-purple-900  rounded-full">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="flex justify-center items-center p-2  bg-orange-600  rounded-full">
              <p className="font-bold flex justify-center items-center text-[15px] w-3.5 h-3.5">
                G+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
