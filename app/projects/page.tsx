"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { SparklesCore } from "../components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { projects } from "@/utils/projects";
const Page = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); 

  const [infoClickedIndexes, setInfoClickedIndexes]:any = useState([]);

  const toggleInfoClicked = (index:any) => {
    if (infoClickedIndexes.includes(index)) {
      setInfoClickedIndexes(infoClickedIndexes.filter((i:any) => i !== index));
    } else {
      setInfoClickedIndexes([...infoClickedIndexes, index]);
    }
  };

  return (
    <div className="projects bg-black">
      {loading ? <Loading /> : null}
      <div className="h-[28rem] w-full relative bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
        <Navbar onPage="Projects" />
        <h1 className="top-[100px] md:text-5xl text-5xl lg:text-7xl font-bold text-center text-white relative z-20">
          Projects
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

      <div className="bg-black top-[-44px] pb-16 relative h-full align-middle justify-items-center px-4 md:px-16 rounded-none grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-4 gap-y-6">
          {projects.map((item, index)=>{
            const isInfoClicked = infoClickedIndexes.includes(index);
            let Desp = item.desp
            return(
        <div key={index} className="flex flex-col max-h-[19rem] max-w-[26rem]  gap-4 ">
          <div
            className={`rounded-2xl bg-black aspect-video overflow-hidden ${
              isInfoClicked ? "" : `md:hover:scale-105`
            }  md:duration-200 relative`}
          >
            {isInfoClicked ? (
              <div
                style={{ opacity: isInfoClicked ? 1 : 0 }}
                className={`text-white p-12 absolute inset-0 opacity-0 transition-opacity duration-1000 ease-linear  bg-black bg-opacity-50 backdrop-blur-sm`}
              >
                <h4>{item.name}</h4>
                <Desp/>
              </div>
            ) : (
              ""
            )}
            <Image
              height="100"
              width="600"
              alt="project images"
              src={item.img}
              className=" transition-transform hover:-translate-y-[40%]  hover:duration-1000 ease-linear"
            />
          </div>
          <div className="flex justify-between text-white">
            <IoMdInformationCircleOutline
              key={index}
              onClick={() => toggleInfoClicked(index)}
              className="cursor-pointer text-slate-600 hover:text-white"
              size="1.3rem"
            />
            <Link
              href={item.link}
              target="_blank"
              className="text-slate-600 hover:text-white flex items-center justify-center"
            >
              {item.name} <FiExternalLink />
            </Link>
            <a href={item.github} target="_blank">
              <FaGithub
                className="cursor-pointer text-slate-600 hover:text-white"
                size="1.3rem"
              />
            </a>
          </div>
        </div>
            )
          })}
        
      </div>
    </div>
  );
};

export default Page;
