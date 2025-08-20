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
      <section id="exhibits" className="my-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-primary text-primary-yellow">Previous Exhibits</h2>

          <div className="mt-10 [column-fill:balance] columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {images.map(({ src, title }, i) => (
              <figure key={i} className="break-inside-avoid mb-4 relative group">
                <img
                  src={src}
                  alt={title}
                  className="w-full rounded-lg shadow-lg hover:opacity-95 transition"
                />
                <figcaption className="absolute bottom-2 left-2 right-2 px-3 py-1 rounded-md text-sm font-semibold text-black bg-yellow-200/90 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                  {title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PrevExhibits;
