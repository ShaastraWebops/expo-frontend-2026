import RetroCard from "./RetroCard";
interface CardProps {
    title: String;
    description: String;
}

function ExhibitCard({title, description}: CardProps) {
  return (
    <>
      <RetroCard>
  <div className="relative bg-gray-900 shadow-lg rounded-2xl overflow-hidden group cursor-pointer p-10">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-100">{title}</h2>

      {/* Description (hidden by default, slides in on hover) */}
      <p
        className="absolute left-0 top-0 w-full bg-gray-900 text-xl text-gray-100 px-6 py-4
                   transform translate-y-full group-hover:translate-y-0 
                   transition-transform duration-300 ease-in-out"
      >
        {description}
      </p>
    </div>
</RetroCard>
    </>
  );
}

export default ExhibitCard;
