import { CalendarDaysIcon } from "lucide-react";
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
          <a href="#">Author</a>
          <a href="#">Advertisment</a>
          <a href="#">Member</a>
          <a href="#">Sitemap</a>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-2.5 items-center relative after:content-[''] after:h-full after:w-0.5 after:bg-blue-900 after:absolute after:-right-2 ">
            <CalendarDaysIcon />
            <span>{day}</span>
            <span>{new Date().getMonth()}</span>
            <span>{new Date().getDate()}</span>
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
