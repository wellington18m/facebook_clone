function PostActivityIcon({ Icon, text, Iconcolor, textColor, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer hover:bg-zinc-600 rounded-lg py-1 px-3"
    >
      <Icon className={`w-8 ${Iconcolor}`} />
      <span className={`${textColor}`}>{text}</span>
    </div>
  );
}

export default PostActivityIcon;
