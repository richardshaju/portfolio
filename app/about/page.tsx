import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";

function page() {
  return (
    <div className="media">
      <div className="h-[28rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
        <Navbar onPage="About" />
        <h1 className="top-[100px] md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
          About
        </h1>
        <div className="top-[100px] w-[40rem] relative">
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
      <div className="bg-black h-full pb-10 align-middle justify-items-center px-0 md:px-16 rounded-none grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-4 gap-y-6">
        <div className="flex flex-row max-h-[15rem] max-w-[26rem] gap-4 border border-white text-white">
          <div className="p-3 flex items-center">
            <FaGithub size="4rem" />
          </div>
          <div className="flex flex-col p-3">
            Github <br /> @richardshaju
            <p>My Coding Arena | Super active</p>
          </div>
        </div>
        <div className="flex flex-row max-h-[15rem] max-w-[26rem] gap-4 border border-white text-white">
          <div className="p-3 flex items-center">
            <FaGithub size="4rem" />
          </div>
          <div className="flex flex-col p-3">
            Github <br /> @richardshaju
            <p>My Coding Arena | Super active</p>
          </div>
        </div>
        <div className="flex flex-row max-h-[15rem] max-w-[26rem] gap-4 border border-white text-white">
          <div className="p-3 flex items-center">
            <FaGithub size="4rem" />
          </div>
          <div className="flex flex-col p-3">
            Github <br /> @richardshaju
            <p>My Coding Arena | Super active</p>
          </div>
        </div>
        <div className="flex flex-row max-h-[15rem] max-w-[26rem] gap-4 border border-white text-white">
          <div className="p-3 flex items-center">
            <FaGithub size="4rem" />
          </div>
          <div className="flex flex-col p-3">
            Github <br /> @richardshaju
            <p>My Coding Arena | Super active</p>
          </div>
        </div>
        <div className="flex flex-row max-h-[15rem] max-w-[26rem] gap-4 border border-white text-white">
          <div className="p-3 flex items-center">
            <FaGithub size="4rem" />
          </div>
          <div className="flex flex-col p-3">
            Github <br /> @richardshaju
            <p>My Coding Arena | Super active</p>
          </div>
        </div>
      </div>
      {/* github linkdin fiver x instagram, telegram, youtube, meduim  */}
    </div>
  );
}

export default page;
