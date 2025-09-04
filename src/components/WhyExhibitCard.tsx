import RetroCard from "./RetroCard";
interface CardProps {
    title: String;
    description: String;
}

function ExhibitCard({title, description}: CardProps) {
  return (
    <>
      <RetroCard>
  <div className="space-y-3">
    <h3 className="font-mono font-bold text-xl text-center">{title}</h3>
    
    <div className="font-mono text-lg text-center text-gray-300">
      {description}
    </div>
  </div>
</RetroCard>
    </>
  );
}

export default ExhibitCard;
