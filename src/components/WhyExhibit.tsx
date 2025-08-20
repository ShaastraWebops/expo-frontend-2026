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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-primary text-primary-yellow">Why Exhibit?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
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
      </section>
    </>
  );
}

export default WhyExhibit;
