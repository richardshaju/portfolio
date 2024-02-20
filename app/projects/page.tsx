import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
const page = () => {
  return (
    <div className="projects">
      <div className="h-[15rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
        <h1 className="top-[50px] md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
          Projects
        </h1>
        <div className="top-[50px] w-[40rem] relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={500}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>

      </div>
        <div className="bg-black h-screen px-32 py-9 rounded-none grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white h-[20rem] w-[25rem] "></div>
          <div className="bg-white h-[20rem] w-[25rem] "></div>
          <div className="bg-white h-[20rem] w-[25rem]"></div>
          <div className="bg-white h-[20rem] w-[25rem]"></div>
          <div className="bg-white h-[20rem] w-[25rem]"></div>

        </div>
    </div>
  );
};

export default page;
