import ContactCard from "./ContactCard";

export default function ContactUs() {
  const contactList = [
    {
      id: 1,
      icon: "fa-facebook",
      followers: 12300,
      badge: "Like",
    },
    {
      id: 2,
      icon: "fa-twitter",
      followers: 12600,
      badge: "Followers",
    },
    {
      id: 3,
      icon: "fa-youtube",
      followers: 1300,
      badge: "Subscribers",
    },
    {
      id: 4,
      icon: "fa-instagram",
      followers: 52400,
      badge: "Followers",
    },
    {
      id: 5,
      icon: "fa-google",
      followers: 12300,
      badge: "Like",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex items-center w-full">
        <h1 className="text-blue-900 text-[18px] font-bold">Join With Us</h1>
      </div>
      <div className="flex flex-col w-full gap-2">
        {contactList.map((contact) => (
          <ContactCard contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
}
