const images = [
  { src: "/images/e1.jpg", title: "BrahMos" },
  { src: "/images/e2.png", title: "DRDO" },
  { src: "/images/e3.webp", title: "Drobots" },
  { src: "/images/e4.jpg", title: "Drones for Life" },
  { src: "/images/e5.png", title: "Guvi Geeks" },
  { src: "/images/e6.jpg", title: "ISRO" },
  { src: "/images/e7.jpg", title: "Indian Navy" },
  { src: "/images/e8.png", title: "Neomotion" },
  { src: "/images/e9.jpg", title: "Raptee Energy" },
  { src: "/images/e10.jpg", title: "Satori XR" },
];

function PrevExhibits() {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-20">
        <h1 className="text-6xl font-primary text-primary-yellow mx-10">
          Previous Exhibits
        </h1>

        <div className="flex flex-wrap items-center justify-center mt-10 md:gap-0 gap-5">
          {images.map(({ src, title }, i) => {
            return (
              <div key={i} className="m-2 relative" 
              onMouseEnter={() => {
                const tooltip = document.getElementById(`tooltip-${i}`);
                if (tooltip) {
                  tooltip.style.opacity = "1";
                  tooltip.style.transform = "translateY(-10px)";
                }
              }}
              onMouseLeave={() => {
                const tooltip = document.getElementById(`tooltip-${i}`);
                if (tooltip) {
                  tooltip.style.opacity = "0";
                  tooltip.style.transform = "translateY(0)";
                }
              }}
              >
                <div id={`tooltip-${i}`} className="absolute z-100 rounded-2xl -bottom-5 md:-bottom-10 w-fit h-fit md:px-5 p-2 bg-secondary-yellow/95 flex items-center justify-center text-black text-xl font-bold md:opacity-0 transition-all duration-300">
                  {title}
                </div>
                <img
                  src={src}
                  alt={`Exhibit ${i + 1}`}
                  className="w-90 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PrevExhibits;
