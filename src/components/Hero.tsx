// import Countdown from "./Countdown.tsx";

function Hero() {
  return (
    <>
      <section id="about" className="relative">
        <div className="max-w-5xl mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-primary text-primary-yellow mb-6">Shaastra Expo 2026</h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl">
            IIT Madras' flagship exhibition showcasing innovations across AI, robotics, biotech, clean energy, mobility, and beyond. Meet startups, corporates, and research labs shaping the future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="rounded-xl border border-white/10 bg-secondary-black p-6 hover:border-primary-yellow transition-colors">
              <div className="text-sm text-gray-400">When</div>
              <div className="text-2xl md:text-3xl font-primary text-primary-yellow mt-1">2–6 January, 2026</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-secondary-black p-6 hover:border-primary-yellow transition-colors">
              <div className="text-sm text-gray-400">Where</div>
              <div className="text-2xl md:text-3xl font-primary text-primary-yellow mt-1">KV Grounds, IIT Madras</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
