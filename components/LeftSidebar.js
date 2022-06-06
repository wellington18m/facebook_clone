import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import {
  UsersIcon,
  UserGroupIcon,
  BriefcaseIcon,
  PlayIcon,
  ClockIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import IconLink from "./IconLink";

function LeftSidebar() {
  // const [moreOptionsHeight, setMoreOptionsHeight] = useState(0);
  const moreOptionsRef = useRef(null);

  const { data: session, loading } = useSession();
  return (
    <aside className="basis-[20%] max-width-[20%] min-w-[15%] hidden lg:block h-screen">
      <div className="fixed h-screen min-w-[20%] p-2">
        <IconLink src={session.user.image} name={session.user.name} />
        <IconLink Icon={UsersIcon} name="Friends" />
        <IconLink Icon={UserGroupIcon} name="Groups" />
        <IconLink Icon={BriefcaseIcon} name="Marketplace" />
        <IconLink Icon={PlayIcon} name="Watch" />
        <IconLink Icon={ClockIcon} name="Memories" />
        <IconLink Icon={ChevronDownIcon} name="See more" />
        <hr className="mt-2 mb-3" />
        <h3 className="pl-2 text-lg">Your shortcuts</h3>
        <IconLink src="/images/8ballpool.png" name="8 Ball Pool" />
        <IconLink src="/images/dominoes.png" name="Dominoes" />
        <IconLink src="/images/pacman.jpg" name="Pacman" />
        <IconLink src="/images/pet_rescue.png" name="Pet Rescue Saga" />
        <IconLink src="/images/chess.png" name="Chess" />
        <IconLink Icon={ChevronDownIcon} name="See more" />

        <footer className="flex space-x-2 items-center text-[.80rem] relative -bottom-36">
          <div className="flex items-center space-x-1">
            <span className="rounded-full h-1 w-1 bg-zinc-500"></span>
            <span
              onClick={() =>
                moreOptionsRef.current.classList.toggle("display_more_menu")
              }
              className="cursor-pointer"
            >
              More
            </span>

            <div
              onMouseLeave={() =>
                moreOptionsRef.current.classList.toggle("display_more_menu")
              }
              ref={moreOptionsRef}
              className={`bg-zinc-500 w-80 -top-40 more_menu rounded-md absolute`}
            >
              <ul className="flex flex-col p-2">
                <li className="p-2 hover:bg-zinc-400 rounded-md cursor-pointer">
                  About
                </li>
                <li className="p-2 hover:bg-zinc-400 rounded-md cursor-pointer">
                  Careers
                </li>
                <li className="p-2 hover:bg-zinc-400 rounded-md cursor-pointer">
                  Developers
                </li>
                <li className="p-2 hover:bg-zinc-400 rounded-md cursor-pointer">
                  Help
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <span className="rounded-full h-1 w-1 bg-zinc-500"></span>
            <span>Meta © {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </aside>
  );
}

export default LeftSidebar;
