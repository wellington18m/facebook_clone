function CenterHeaderIcon({ Icon, active }) {
  return (
    <div className="cursor-pointer flex hover:bg-zinc-600 w-16 h-10 sm:w-14 md:w-16 lg:w-24 xl:w-32 Xl:h-12 items-center justify-center rounded-lg">
      <Icon className={`h-7 text-zinc-400 ${active && "text-blue-400"}`} />
    </div>
  );
}

export default CenterHeaderIcon;
