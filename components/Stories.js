import Story from "./Story.js";

function Stories({ contacts }) {
  return (
    <div
      className="flex space-x-2 py-1 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300
			scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full"
    >
      {contacts.map((contact) => (
        <Story key={contact.id} src={contact.src} />
      ))}
    </div>
  );
}

export default Stories;
