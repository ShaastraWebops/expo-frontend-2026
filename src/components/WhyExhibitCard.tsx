interface CardProps {
    title: String;
    description: String;
}

function ExhibitCard({title, description}: CardProps) {
  return (
    <>
      <div className="m-5 rounded-sm relative sm:w-100 w-90 h-45 sm:h-60 p-5 flex items-center justify-center bg-primary-yellow overflow-hidden cursor-pointer font-bold text-3xl group">
        {/* Front text (black) */}
        <span className="absolute text-4xl text-secondary-black z-10 transition-[clip-path] duration-500 ease-in-out group-hover:[clip-path:inset(0_0_0_100%)] [clip-path:inset(0_0_0_0)] w-full text-center">
          {title}
        </span>

        {/* Back text (yellow) */}
        <span className="absolute text-primary-yellow z-10 transition-[clip-path] duration-500 ease-in-out group-hover:[clip-path:inset(0_0_0_0)] [clip-path:inset(0_100%_0_0)]">
          {description}
        </span>

        {/* Sliding black background */}
        <div className="absolute inset-0 bg-secondary-black -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
      </div>
    </>
  );
}

export default ExhibitCard;
