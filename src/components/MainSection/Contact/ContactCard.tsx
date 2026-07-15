export default function ContactCard({
  contact,
}: {
  contact: { icon: string; followers: string; badge: string };
}) {
  return (
    <div className="flex text-sm justify-between items-center py-2 border-b border-gray-300">
      <div className="flex space-x-2.5  justify-center items-center">
        <div
          className={`py-3.5 px-3.5 flex justify-center items-center rounded-full text-white ${contact.icon === "fa-facebook" ? "bg-blue-950 " : contact.icon === "fa-twitter" ? "bg-sky-700 " : contact.icon === "fa-youtube" ? "bg-red-600 " : contact.icon === "fa-instagram" ? "bg-orignal-purple " : "bg-red-400"} `}
        >
          <i className={`fab text-sm ${contact.icon}`}></i>
        </div>
        <span>{contact.followers}</span>
        <span>{contact.badge}</span>
      </div>
      <i className="fas fa-plus text-brand"></i>
    </div>
  );
}
