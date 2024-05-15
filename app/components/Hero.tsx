// 'use client'
import "./../globals.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" h-screen flex px-24 py-24  justify-center items-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 right-0 w-full h-full object-cover"
        src={require("/public/videos/blog.mp4")}
      />
      <div className="lg:flex-grow w-full lg:w-3/4 text-white flex flex-col z-10">
        {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Before they sold out
          <br className="hidden lg:inline-block" />
          readymade gluten
        </h1> */}
        <q className="text-xl md:text-3xl font-serif font-extrabold  text-left">
          If something works, that's good. How it works doesn't matter.
        </q>
        <div className="mt-5 text-end -ml-5  ">
          <h1 className="font-bold text-md md:text-lg">~ Joel K. Zimba</h1>
          <p className="text-xs md:text-sm">Computer Systems Engineer</p>
        </div>
        {/* <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Button
          </button>
        </div> */}
      </div>
      <div className=" md:w-1/4 ">
        {/* <img
          className="object-cover object-center rounded"
          alt="hero"
          //   width={180}
          //   height={37}
          src="https://dummyimage.com/720x600"
        /> */}
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>
    </div>
  );
};

export default Hero;
