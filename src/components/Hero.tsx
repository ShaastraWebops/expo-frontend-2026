// import Countdown from "./Countdown.tsx";
import Button from "./RetroButton";
import RetroCard from "./RetroCard";

function Hero() {
  return (
    <>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 min-h-screen  items-center justify-center bg-black-300 p-6 mt-16 md:items-center md:justify-between lg:p-16 mx-16 ">

        {/* --- LEFT COLUMN --- */}  
        <div className="text-left font-primary lg:col-span-2 ">
          <h1 className=" text-7xl font-bold text-[#00ff84] md:text-8xl xl:text-9xl pb-2">
            EXPO'26
          </h1>
          <h2 className="font-primary xl:text-3xl text-left lg:text-2xl text-xl text-[#76ffbd] ">
            Where innovation finds expression
          </h2>
          <p className="xl:text-2xl sm:text-xl text-md text-white sm:w-[75%] w-full pt-15 mb-20 text-left">
            The Shaastra Expo is IIT Madras' flagship exhibition showcasing
            cutting-edge innovations in AI, robotics, biotech, clean energy, and
            more. With curated exhibits from startups, corporates, and premier
            research labs, it offers a dynamic platform to display emerging tech
            and engage with a highly technical audience. Attracting thousands from
            across India, the Expo is a vibrant confluence of technology, talent,
            and opportunity.
          </p>
        </div>

        {/* --- RIGHT COLUMN (Desktop View) --- */}
        <div className="md:flex flex-col items-end gap-8 ">
          <RetroCard className="w-full md:mb-1 mb-6">
            <div className="text-center w-full">
              <h3 className="font-mono text-lg font-bold mb-2">
                WHEN
              </h3>
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                2ND TO 6TH JAN, 2026
              </p>
            </div>
          </RetroCard>
          <RetroCard className="w-full">
            <div className="text-center">
              <h3 className="font-mono text-lg font-bold mb-2 w-full">
                WHERE
              </h3>
              <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                KV GROUNDS, IIT MADRAS
              </p>
            </div>
          </RetroCard>
          <div className="mt-10 flex gap-4 w-full">
            <Button className="bg-[#00ff84] text-[#000000] border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_#000000] dark:bg-[#00ff84] dark:text-[#000000] dark:border-[#000000] dark:shadow-[4px_4px_0px_0px_#ffffff] w-full">
              <h1 className="xl:text-2xl sm:text-lg font-primary">Register</h1>
            </Button>
            <Button className="bg-[#00ff84] text-[#000000] border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_#000000] dark:bg-[#00ff84] dark:text-[#000000] dark:border-[#000000] dark:shadow-[4px_4px_0px_0px_#ffffff] w-full">
              <h1 className="xl:text-2xl sm:text-lg font-primary">Brochure</h1>
            </Button>
          </div>
        </div>

      </div>



    </>
  );
}
export default Hero;
