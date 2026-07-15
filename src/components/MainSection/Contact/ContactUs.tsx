import ContactCard from "./ContactCard";

export default function ContactUs() {
  const contactList = [
    {
      id: 1,
      icon: "F",
      followers: 12300,
      bage: "Like",
    },
    {
      id: 2,
      icon: "fab fa-twitter",
      followers: 12600,
      bage: "Followers",
    },
    {
      id: 3,
      icon: "fab fa-youtube",
      followers: 1300,
      bage: "Subscribers",
    },
    {
      id: 4,
      icon: "fab fa-instagrame",
      followers: 52400,
      bage: "Followers",
    },
    {
      id: 5,
      icon: "fab fa-google",
      followers: 12300,
      bage: "Like",
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
