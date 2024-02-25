"use client"
import React,{useState,useEffect} from "react"; 
import { SparklesCore } from "../components/ui/sparkles";
import Navbar from "../components/Navbar";
import { media } from "@/utils/media";
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
      <div className="h-[28rem] w-full  bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
        <Navbar onPage="About" />
        <h1 className="top-[100px]  md:text-5xl text-5xl lg:text-7xl font-bold text-center text-white relative z-20">
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
      
      <div className= 'flex pb-10 md:py-6  justify-center  bg-black text-white ' >
        <div className=" w-3/4
         md:w-1/2 ">
        <p>I&#39;m a Self-Taught  <span style={{ color: '#189ce8' }}>MERN Stack Developer</span> , highly self-motivated and passionate about learning new things. Moreover, I&#39;m a Tech enthusiast.</p>
        Checkout my handles to know more😃
        </div>
      </div>
      <div className="bg-black h-full pb-10 align-middle justify-items-center px-0 md:px-16 rounded-none grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-4 gap-y-6">
        {media.map((item, index) => {
          let Icon = item.logo;
          return (
            <a key={index} href={item.link} target="_blank" >
              <div className="flex hover:border-[#189ce8] hover:scale-105 rounded-2xl md:duration-200 ease-linear flex-row max-h-[8rem] overflow-hidden max-w-[23rem] border-2 border-white text-white">
                <div className="w-[20rem] flex">
                  <div className="p-3 flex flex-col justify-center items-center">
                    <Icon size="4rem" />
                  </div>
                  <div className="flex flex-col p-3 ">
                    <p className="font-semibold">
                      {item.title} <br />
                    </p>
                    <p className="text-sm text-slate-200">@{item.id}</p>
                    <p className="pt-2">
                      • {item.desp}
                      <br />• {item.active}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      {/*     instagram, telegram, youtube, meduim  */}
    </div>
  );
}

export default Page;
