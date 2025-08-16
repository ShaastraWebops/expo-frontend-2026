// import Countdown from "./Countdown.tsx";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative min-h-screen">
        <p className="text-[#f7a13f] text-md sm:text-3xl/normal sm:text-center font-semibold w-[75%] mx-auto mb-20 ">
          The Shaastra Expo is IIT Madras' flagship exhibition showcasing
          cutting-edge innovations in AI, robotics, biotech, clean energy, and
          more. With curated exhibits from startups, corporates, and premier
          research labs, it offers a dynamic platform to display emerging tech
          and engage with a highly technical audience. Attracting thousands from
          across India, the Expo is a vibrant confluence of technology, talent,
          and opportunity.
        </p>

        <div className="mb-25">
          <div className="mb-20 transform md:-translate-x-40 when hover:cursor-default hover:scale-x-110 hover:scale-y-102 transition-all duration-100">
            <h1 className="font-bangers text-primary-yellow text-7xl transform -translate-x-10">
              When?
            </h1>
            <h2 className="text-2xl font-primary text-secondary-yellow transform translate-x-10">
              2nd to 6th Jan , 2026
            </h2>
          </div>

          <div
            className="mb-20 transform md:translate-x-40 where hover:cursor-default hover:scale-x-110 hover:scale-y-102 transition-all duration-100"
            // onMouseEnter={() => {
            //   document
            //     .querySelector("#deer")!
            //     .classList.remove(
            //       "scale-0"
            //     );
            //   document
            //     .querySelector("#deer")!
            //     .classList.add(
            //       "scale-100"
            //     );
            // }}
          >
            <h1 className="font-bangers text-primary-yellow text-7xl text-right transform translate-x-10">
              Where?
            </h1>
            <h2 className="text-2xl font-primary text-secondary-yellow text-right transform">
              KV grounds , IIT Madras
            </h2>
          </div>
        </div>
      </div>

      <div
        id="deer"
        className="w-40 absolute bottom-0 left-0 transition-all duration-300 md:block hidden"
      >
        <img src="/images/bitmap.svg" alt="" />
      </div>
    </>
  );
}
export default Hero;
