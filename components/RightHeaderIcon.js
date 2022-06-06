import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

function RightHeaderIcon({ Icon, src }) {
  const { data: session, loading } = useSession();
  return (
    <div className="">
      {Icon && <Icon className="right-header-icon" />}
      {src && (
        <div className="hover:bg-zinc-500 cursor-pointer space-x-1 pr-2 text-zinc-300  rounded-full hidden xl:flex items-center">
          <Image
            src={src}
            width={30}
            height={30}
            alt="profile picture"
            className="rounded-full ml-5"
          />
          <span onClick={signOut}>
            {session.user.name.substring(0, session.user.name.indexOf(" "))}
          </span>
        </div>
      )}
    </div>
  );
}

export default RightHeaderIcon;
