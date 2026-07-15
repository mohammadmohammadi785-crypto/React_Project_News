import { Link } from "react-router-dom";

export default function Navbar() {
  const Links: { id: number; link: string; name: string }[] = [
    {
      id: 1,
      link: "/",
      name: "HOME",
    },
    {
      id: 2,
      link: "/#TRENDING NEWS",
      name: "TRENDING NEWS",
    },
    {
      id: 3,
      link: "/#LATEST NEWS",
      name: "LATEST NEWS",
    },
    {
      id: 4,
      link: "/#NEWS GRID",
      name: "NEWS GRID",
    },
    {
      id: 5,
      link: "/#PRO VERSION",
      name: "PRO VERSION",
    },
  ];
  return (
    <div className="w-full py-5 sticky z-50 top-0 right-0 bg-[#1979c7]">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex space-x-10 justify-center items-center">
          {Links.map((link, index) => {
            return (
              <Link
                className="text-white text-sm uppercase after:content-[''] relative after:absolute after:-top-3 after:-right-2 after:h-12 after:w-px after:bg-sky-300/30"
                key={index}
                to={link.link}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="flex relative justify-between items-center">
          <input
            type="search"
            placeholder="search for"
            className=" py-3 focus:outline-0 px-5 w-full bg-[#195c94] placeholder:text-gray-100/40"
          />
          <i className="fas absolute top-4 right-4 text-white/50 fa-search"></i>
        </div>
      </div>
    </div>
  );
}
