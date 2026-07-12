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
    <div className="w-full py-5 sticky z-50 top-0 right-0 bg-[#008cff]">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex space-x-10 justify-center items-center">
          {Links.map((link, index) => {
            return (
              <Link
                className="text-white text-sm uppercase after:content-[''] relative after:absolute after:-top-1.5 after:-right-2 after:h-8 after:w-0.5 after:bg-sky-300"
                key={index}
                to={link.link}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {/* <div className="w-full flex justify-center items-center">
          <input
            type="search"
            placeholder="search"
            className=" py-1 focus:outline-0 border px-1 border-white placeholder:text-white w-1/3"
          />
        </div> */}
      </div>
    </div>
  );
}
