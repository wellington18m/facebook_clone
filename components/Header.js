import Image from "next/image";
import IconLink from "./IconLink";
import { signOut, useSession } from "next-auth/react";

import {
  SearchIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import CenterHeaderIcon from "./CenterHeaderIcon";

import {
  HomeIcon,
  DesktopComputerIcon,
  BriefcaseIcon,
  UserGroupIcon,
  PlayIcon,
} from "@heroicons/react/solid";
import RightHeaderIcon from "./RightHeaderIcon";

function Header() {
  const { data: session, loading } = useSession();
  return (
    <header className="bg-zinc-700 px-3 py-2 flex items-center sticky top-0 z-50 shadow-lg">
      {/* Left side */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt="Logo"
          className="cursor-pointer"
          layout="fixed"
          objectFit="contain"
        />

        <div className="flex items-center ml-5 text-white bg-zinc-600 p-2 rounded-3xl">
          <SearchIcon className="w-5" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-transparent outline-none ml-2 hidden xl:flex"
          />
        </div>
      </div>
      {/* center side */}
      <div className="flex grow justify-center">
        <div className="hidden sm:flex">
          <CenterHeaderIcon Icon={HomeIcon} active />
          <CenterHeaderIcon Icon={DesktopComputerIcon} />
          <CenterHeaderIcon Icon={BriefcaseIcon} />
          <CenterHeaderIcon Icon={UserGroupIcon} />
          <CenterHeaderIcon Icon={PlayIcon} />
        </div>
        <div className=" lg:hidden">
          <CenterHeaderIcon Icon={MenuIcon} />
        </div>
      </div>
      {/* Right side */}
      <div className="flex space-x-3 items-center text-white">
        <div
          className="hover:bg-zinc-500 cursor-pointer pr-2 text-zinc-300 p-1
        rounded-full hidden xl:flex items-center"
          onClick={signOut}
        >
          <RightHeaderIcon
            src={session.user.image}
            name={session.user.name.substring(
              0,
              session.user.name.indexOf(" ")
            )}
          />
        </div>
        <RightHeaderIcon Icon={ViewGridIcon} />
        <RightHeaderIcon Icon={ChatIcon} />
        <RightHeaderIcon Icon={BellIcon} />
        <RightHeaderIcon Icon={ChevronDownIcon} />
      </div>
    </header>
  );
}

export default Header;
