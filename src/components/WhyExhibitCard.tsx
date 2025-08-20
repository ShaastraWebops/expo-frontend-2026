interface CardProps {
    title: String;
    description: String;
}

function ExhibitCard({title, description}: CardProps) {
  return (
    <>
      <div className="m-4 rounded-xl border border-white/10 bg-secondary-black/60 sm:w-100 w-90 p-6 hover:border-primary-yellow transition-colors">
        <h3 className="text-xl font-primary text-primary-yellow mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed text-sm">{description}</p>
      </div>
    </>
  );
}

export default ExhibitCard;
