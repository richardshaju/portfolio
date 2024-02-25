"use client"
import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import { SparklesCore } from "../components/ui/sparkles";
import { Button, MovingBorder } from "../components/ui/moving-border";
import Loading from "../components/Loading";

function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 
  return (
    <div className="media">
      {loading ? <Loading /> : null}
      <div className="h-[28rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
        <Navbar onPage="Contact" />
        <h1 className="top-[100px] md:text-5xl text-5xl lg:text-7xl font-bold text-center text-white relative z-20">
          Contact
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
      <div className="bg-black h-screen text-white flex flex-col items-center">
        
        <form action="" className=" w-3/4 md:w-1/3 ">
          <div className="flex flex-col  ">
            <label htmlFor="" className="text-sm ml-1 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="focus:bg-blsck focus:border-[rgba(28,150,231,0.65)]  focus:outline-none border-2 border-solid border-slate-800 bg-black  text-white p-2 rounded-md w-ful font-sans"
              placeholder="Name"
            />
            <label htmlFor="" className="text-sm ml-1 mb-1 mt-4">
              Email
            </label>
            <input
              type="email"
              required
              className="focus:bg-balck focus:border-[#1c96e7a5]  focus:outline-none border-2 border-solid border-slate-800 bg-black  text-white p-2 rounded-md w-ful font-sans"
              placeholder="Email"
            />
            <label htmlFor="" className="text-sm ml-1 mb-1 mt-4">
              Address
            </label>
            <input
              type="address"
              required
              className="focus:bg-balck focus:border-[#1c96e7a5]  focus:outline-none border-2 border-solid border-slate-800 bg-black  text-white p-2 rounded-md w-ful font-sans"
              placeholder="Address"
            />
            <label htmlFor="" className="text-sm ml-1 mb-1 mt-4">
              Message
            </label>
            <textarea
              name="message"
              id=""
              required
              className="focus:bg-black focus:border-[#1c96e7a5]  focus:outline-none border-2 border-solid border-slate-800 bg-black  text-white p-2 rounded-md w-ful font-sans"
              placeholder="Your message..."
              cols="30"
              rows="10"
            ></textarea>
            <div className="text-center">
            <input type="submit" className="cursor-pointer rounded-lg hover:border-[#1c96e7a5] border-2 border-slate-800  border-solid w-1/2 mt-5 p-2" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
