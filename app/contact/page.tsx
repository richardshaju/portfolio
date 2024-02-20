import React from "react";
import { LampDemo } from "../components/ui/lamp";
import { Button } from "../components/ui/moving-border";
function page() {
  return (
    <div>
      <LampDemo />
      <form action="" className="rounded-none bg-black h-screen px-10 justify-center flex flex-col">
        <div className="w-[25rem]">

        <label className="input  bg-black  border-slate-800  border-2 input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#ffff"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>

          <input type="text" className="grow " placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 opacity-70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
            <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
          </svg>

          <input type="text" className="grow" placeholder="Address" />
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Bio"
        ></textarea>
        </div>
        <Button
        borderRadius="1.75rem"
        className="bg-black  text-white border-neutral-200"
      >
        Send
      </Button>
      </form>
    </div>
  );
}

export default page;
