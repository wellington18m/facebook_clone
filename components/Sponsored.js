import Image from "next/image";

function Sponsored({ src, text }) {
  return (
    <div className="flex items-center space-x-2 mb-3 hover:bg-zinc-400 p-2 rounded-lg cursor-pointer">
      <Image
        src={src}
        width={250}
        height={250}
        alt="sponsored image"
        className="rounded-lg min-w-[150px]"
      />
      <p className="text-[0.95rem]">{text}</p>
    </div>
  );
}

export default Sponsored;
