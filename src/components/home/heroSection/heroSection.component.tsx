import image from "src/assets/image/herosection.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 lg:max-w-7xl lg:px-8 text-gray-600  dark:text-white ">
      <div className="flex flex-row h-[calc(100vh-80px)] mx-auto justify-center">
        <div className=" basis-full md:basis-1/2 self-center">
          <div className="text-center md:text-left lg:max-w-2xl lg:w-full m-auto ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl sm:3xl font-extrabold block xl:inline uppercase text-gray-900 dark:text-white">
              Your Trusted partner in
              <span className="block text-indigo-600 dark:text-indigo-400 xl:inline">
                {" "}
                software development
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We Analyze Complexity and Deliver Simplified Solutions.
            </p>
          </div>
        </div>
        <div className="basis-0 md:basis-1/2 self-center ">
          <Image src={image} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
