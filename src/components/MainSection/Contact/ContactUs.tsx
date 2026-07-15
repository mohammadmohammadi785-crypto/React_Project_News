import ContactCard from "./ContactCard";

export default function ContactUs() {
  const contactList = [
    {
      icon: "fa-facebook",
      followers: "12,300",
      badge: "Like",
    },
    {
      icon: "fa-twitter",
      followers: "12,600",
      badge: "Followers",
    },
    {
      icon: "fa-youtube",
      followers: "1,300",
      badge: "Subscribers",
    },
    {
      icon: "fa-instagram",
      followers: "52,400",
      badge: "Followers",
    },
    {
      icon: "fa-google",
      followers: "19,101",
      badge: "Subscribers",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center w-full">
        <h1 className="text-blue-900 text-[18px] font-bold">Join With Us</h1>
      </div>
      <div className="flex flex-col w-full gap-2">
        {contactList.map((contact) => (
          <ContactCard contact={contact} />
        ))}
      </div>
    </div>
  );
}
