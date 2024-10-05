"use client";
import { SparklesCore } from "./components/ui/sparkles";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timeout when the component unmounts or when the dependency changes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect will run once after the first render

  return (
    <div className="home">
      {loading ? <Loading /> : null}
      <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="top-[-140px] relative">
          <Navbar onPage="Home" />
        </div>
        <div className="flex flex-col items-center justify-center transition-opacity duration-1000">
          <div className="avatar">
            <div className="w-20 md:w-28 rounded-full overflow-hidden ring ring-white ring-offset-base-100 ring-offset-1">
              <Image
                src="images/richard.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <h1 className=" md:text-5xl text-3xl lg:text-4xl font-bold text-center text-white">
            Richard Shaju
          </h1>
          <p className="text-md text-white animate-pulse">
            FULL STACK DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
}
