"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { SparklesCore } from "../components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const [isInfoClicked, setisInfoClicked] = useState(false);
  return (
    <div className="projects">
      <div className="h-[28rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
        <ul className="menu menu-horizontal menu-xs md:menu-md font-semibold  bg-[#323232]  text-white rounded-box relative">
          <li className="hover:bg-white hover:text-black rounded-box ">
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li className="hover:bg-white hover:text-black rounded-box ">
            <Link href="/media">MEDIA</Link>
          </li>
          <li className="hover:bg-white hover:text-black rounded-box ">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <h1 className="top-[100px] md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
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

      <div className="bg-black h-full align-middle justify-items-center px-0 md:px-16 rounded-none grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-4 gap-y-6">
        <div className="flex flex-col max-h-[19rem] max-w-[26rem]  gap-4 ">
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
                <h4>Netflix Clone</h4>
                <p>
                  Back-end : <b>Nill</b> <br />
                  API used : <b>TMDB</b> <br />
                  FrameWorks : <b>ReactJS</b>
                  <br />
                  Front-end : <b>React,Css,Javascript</b> <br />
                </p>
              </div>
            ) : (
              ""
            )}
            <Image
              height="100"
              width="600"
              alt="project images"
              src="/images/netflix.png"
              className=" transition-transform hover:-translate-y-[40%]  hover:duration-1000 ease-linear"
            />
          </div>
          <div className="flex justify-between text-white">
            <IoMdInformationCircleOutline
              onClick={() => setisInfoClicked(!isInfoClicked)}
              className="cursor-pointer text-slate-600 hover:text-white"
              size="1.3rem"
            />
            <Link
              href=""
              className="text-slate-600 hover:text-white flex items-center justify-center"
            >
              Neflix Clone <FiExternalLink />
            </Link>
            <a href="https://www.google.com" target="_blank">
              <FaGithub
                className="cursor-pointer text-slate-600 hover:text-white"
                size="1.3rem"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col max-h-[19rem] max-w-[26rem] gap-4 ">
          <div className="bg-black  aspect-video overflow-hidden md:hover:scale-105 md:duration-200 ">
            <Image
              height="100"
              width="600"
              alt="project images"
              src="/images/netflix.png"
              className=" transition-transform hover:-translate-y-[40%]  hover:duration-1000 ease-linear"
            />
          </div>
          <div className="flex justify-between text-white">
            <IoMdInformationCircleOutline
              className="cursor-pointer text-slate-600 hover:text-white"
              size="1.3rem"
            />
            <Link
              href=""
              className="text-slate-600 hover:text-white flex items-center justify-center"
            >
              Neflix Clone <FiExternalLink />
            </Link>
            <a href="https://www.google.com" target="_blank">
              <FaGithub
                className="cursor-pointer text-slate-600 hover:text-white"
                size="1.3rem"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col max-h-[19rem] max-w-[26rem] gap-4 ">
          <div className="bg-black  aspect-video overflow-hidden md:hover:scale-105 md:duration-200 ">
            <Image
              height="100"
              width="600"
              alt="project images"
              src="/images/netflix.png"
              className=" transition-transform hover:-translate-y-[40%]  hover:duration-1000 ease-linear"
            />
          </div>
          <div className="flex justify-between text-white">
            <IoMdInformationCircleOutline
              className="cursor-pointer text-slate-600 hover:text-white"
              size="1.3rem"
            />
            <Link
              href=""
              className="text-slate-600 hover:text-white flex items-center justify-center"
            >
              Neflix Clone <FiExternalLink />
            </Link>
            <a href="https://www.google.com" target="_blank">
              <FaGithub
                className="cursor-pointer text-slate-600 hover:text-white"
                size="1.3rem"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col max-h-[19rem] max-w-[26rem] gap-4 ">
          <div className="bg-black  aspect-video overflow-hidden md:hover:scale-105 md:duration-200 ">
            <Image
              height="100"
              width="600"
              alt="project images"
              src="/images/netflix.png"
              className=" transition-transform hover:-translate-y-[40%]  hover:duration-1000 ease-linear"
            />
          </div>
          <div className="flex justify-between text-white">
            <IoMdInformationCircleOutline
              className="cursor-pointer text-slate-600 hover:text-white"
              size="1.3rem"
            />
            <Link
              href=""
              className="text-slate-600 hover:text-white flex items-center justify-center"
            >
              Neflix Clone <FiExternalLink />
            </Link>
            <a href="https://www.google.com" target="_blank">
              <FaGithub
                className="cursor-pointer text-slate-600 hover:text-white"
                size="1.3rem"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col max-h-[19rem] max-w-[26rem] gap-4 ">
          <div className="bg-black  aspect-video overflow-hidden md:hover:scale-105 md:duration-200 ">
            <Image
              height="100"
              width="600"
              alt="project images"
              src="/images/netflix.png"
              className=" transition-transform hover:-translate-y-[40%]  hover:duration-1000 ease-linear"
            />
          </div>
          <div className="flex justify-between text-white">
            <IoMdInformationCircleOutline
              className="cursor-pointer text-slate-600 hover:text-white"
              size="1.3rem"
            />
            <Link
              href=""
              className="text-slate-600 hover:text-white flex items-center justify-center"
            >
              Neflix Clone <FiExternalLink />
            </Link>
            <a href="https://www.google.com" target="_blank">
              <FaGithub
                className="cursor-pointer text-slate-600 hover:text-white"
                size="1.3rem"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col max-h-[19rem] max-w-[26rem] gap-4 ">
          <div className="bg-black  aspect-video overflow-hidden md:hover:scale-105 md:duration-200 ">
            <Image
              height="100"
              width="600"
              alt="project images"
              src="/images/netflix.png"
              className=" transition-transform hover:-translate-y-[40%]  hover:duration-1000 ease-linear"
            />
          </div>
          <div className="flex justify-between text-white">
            <IoMdInformationCircleOutline
              className="cursor-pointer text-slate-600 hover:text-white"
              size="1.3rem"
            />
            <Link
              href=""
              className="text-slate-600 hover:text-white flex items-center justify-center"
            >
              Neflix Clone <FiExternalLink />
            </Link>
            <a href="https://www.google.com" target="_blank">
              <FaGithub
                className="cursor-pointer text-slate-600 hover:text-white"
                size="1.3rem"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
