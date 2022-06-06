import Image from "next/image";

function IconLink({ Icon, src, name }) {
  return (
    <div className="flex items-center pl-2 py-2 rounded-md space-x-3 cursor-pointer hover:bg-zinc-400">
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          alt="prifile picture"
          className="rounded-full space-x-3"
        />
      )}
      {Icon && <Icon className="right-header-icon" />}
      <span>{name}</span>
    </div>
  );
}

export default IconLink;
