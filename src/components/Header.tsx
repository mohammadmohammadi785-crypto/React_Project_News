import { CalendarDaysIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-['6c27b3'] w-full">
      <div className="w-full max-w-6xl mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link to="#">Author</Link>
          <Link to="#">Advertisment</Link>
          <Link to="#">Member</Link>
          <Link to="#">Sitemap</Link>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-2.5 items-center">
            <CalendarDaysIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
