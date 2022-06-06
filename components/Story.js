import Image from "next/image";

function Story({ src }) {
  return (
    <div className="rounded-xl flex overflow-hidden min-w-[120px] mb-3">
      <Image
        width={150}
        height={250}
        src={src}
        alt="story image"
        objectFit="cover"
        layout="fixed"
        className="rounded-xl brightness-[.90] cursor-pointer transition-all animation hover:brightness-[.70] hover:scale-[1.02]"
      />
    </div>
  );
}

export default Story;
