import ContactUs from "./ContactUs";
import LatestNews from "./LatestNews";
import TrandingNews from "./TrandingNews";
import WhatsNews from "./WhatsNews";

export default function MainSection() {
  return (
    <div className="w-full py-8">
      <div className=" w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4">
        <TrandingNews />
        <LatestNews />
        <WhatsNews />
        <ContactUs />
      </div>
    </div>
  );
}
