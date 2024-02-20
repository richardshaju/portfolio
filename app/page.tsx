import { SparklesCore } from "./components/ui/sparkles";
import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
      <ul className="menu menu-horizontal menu-xs md:menu-md font-semibold  bg-[#323232]  text-white rounded-box top-[-150px] relative">
        <li className="hover:bg-white hover:text-black rounded-box ">
        <Link href='/projects'>PROJECTS</Link>
        </li>
        <li className="hover:bg-white hover:text-black rounded-box ">
          <Link href="/media">MEDIA</Link>
        </li>
        <li className="hover:bg-white hover:text-black rounded-box ">
          <Link href='/contact'>CONTACT</Link>
        </li>
      </ul>
      <div  className="flex flex-col items-center justify-center transition-opacity duration-1000">

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
      <h1 className=" md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white">
        Richard Shaju
      </h1>
      <p className="text-md text-white animate-pulse">FULL STACK DEVELOPER</p>
      </div>
    </div>
    
  );
}
