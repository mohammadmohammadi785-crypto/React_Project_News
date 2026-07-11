export default function HeroCard() {
  return (
    <div className="w-full relative h-72 z-0">
      <div className="w-full absolute -z-1 bg-secondry -top-3 -left-4 h-full"></div>
      <div>
        <img className="w-full h-full " src="./images/hero.png" alt="" />
      </div>
    </div>
  );
}
