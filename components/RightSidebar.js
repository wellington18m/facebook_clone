import Sponsored from "./Sponsored";
import Image from "next/image";
import {
  SearchIcon,
  VideoCameraIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function RightSidebar({ contacts }) {
  return (
    <aside className="p-2 shrink-[9999] ml-5 lg:ml-0 basis-[15%] min-w-[25%] hidden md:block">
      <div
        className="fixed h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent hover:scrollbar-thumb-zinc-400
		  hover:scrollbar-track-zinc-400"
      >
        <div className="mb-3 mr-3">
          <h3 className="mb-2 ml-2">Sponsored</h3>
          <Sponsored
            src="/images/code_ecademy.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, sed!"
          />
          <Sponsored
            src="/images/cyber.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, sed!"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <h3 className="my-2 ml-2">Contacts</h3>
          <div className="flex items-center space-x-5 px-3">
            <VideoCameraIcon className="h-7 text-zinc-500 cursor-pointer rounded-full hover:bg-zinc-300 p-1" />
            <SearchIcon className="h-7 text-zinc-500 cursor-pointer rounded-full hover:bg-zinc-300 p-1" />
            <DotsHorizontalIcon className="h-7 text-zinc-500 cursor-pointer rounded-full hover:bg-zinc-300 p-1" />
          </div>
        </div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center mr-3 space-x-3 mb-1 cursor-pointer text-[0.95rem] hover:bg-zinc-400 p-2 rounded-lg"
          >
            <div className="online border border-indigo-600 rounded-full w-[40px] h-[40px] p-[2px]">
              <Image
                src={contact.src}
                width="100%"
                height="100%"
                alt={contact.name}
                className="rounded-full"
              />
            </div>
            <span>{contact.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default RightSidebar;
