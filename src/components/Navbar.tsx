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
    <div className="w-full py-5 sticky top-0 right-0 bg-light-blue">
      <div className="w-full max-w-6xl mx-auto flex items-center">
        <div className="flex space-x-12">
          {Links.map((link, index) => {
            return (
              <Link
                className="text-white uppercase after:content-[''] relative after:absolute after:-top-3 after:-right-2 after:h-12  after:w-0.5 after:bg-sky-300"
                key={index}
                to={link.link}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
