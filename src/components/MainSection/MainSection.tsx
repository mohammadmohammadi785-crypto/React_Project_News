import ContactUs from "./ContactUs";
import LatestNews from "./Latest_News/LatestNews";
import TrandingNews from "./TrandingNews";
import WhatsNew from "./WhatsNew";

export default function MainSection() {
  return (
    <div className="w-full py-8 px-5">
      <div className="w-full max-w-6xl gap-x-1 mx-auto grid grid-cols-1 md:grid-cols-4">
        <TrandingNews />
        <LatestNews />
        <WhatsNew />
        <ContactUs />
      </div>
    </div>
  );
}
