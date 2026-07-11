export default function HeroCard() {
  return (
    <div className="w-full relative h-90 z-0">
      <div className="z-30 w-full h-full">
        <img
          className="w-full rounded-md absolute  top-5 left-5 object-cover h-full"
          src="./images/hero.png"
          alt=""
        />
      </div>
      <div className="w-full rounded-md absolute  top-0 left-0 -z-1 bg-secondry  h-full"></div>
    </div>
  );
}
