import ExhibitCard from "./WhyExhibitCard";

const exhibitData = [
    {
        title: "Maximum Exposure",
        description: "Put your tech in front of 70,000+ visitors at one of India’s largest student-led tech festivals."
    },
    {
        title: "Meet Tomorrow’s Innovators",
        description: "Engage directly with IIT Madras talent and researchers shaping the future."
    },
    {
        title: "Build Your National Presence",
        description: "Showcase your brand to a pan-India audience of young innovators and tech enthusiasts."
    },
    {
        title: "Diverse Tech Domains",
        description: "Present your work across AI, robotics, biotech, mobility, clean energy, and more."
    },
    {
        title: "Collaborate with Cutting-Edge Research",
        description: "Connect with IIT Madras’ vibrant research ecosystem and explore opportunities for tech collaboration."
    },
    {
        title: "Talent Access",
        description: "Connect with top-tier students from IIT Madras and beyond for hiring or collaboration."
    }
]

function WhyExhibit() {
  return (
    <>
      <div className="flex flex-col items-center justify-center m-10 mb-60">
        <h1 className="text-6xl font-primary text-[#00ff84] my-24">Why Exhibit?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-60">
                {exhibitData.map((exhibit, index) => {
                    return (
                        <ExhibitCard 
                            key={index} 
                            title={exhibit.title} 
                            description={exhibit.description} 
                        />
                    );
                })}
            </div>
      </div>
    </>
  );
}

export default WhyExhibit;
