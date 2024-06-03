"use client";

import { GithubIcon } from "../assets/GithubIcon";
import { InstaIcon } from "../assets/InstaIcon";
import { Planguage } from "./Planguage";

export const Introduction = () => {
  return (
    <div
      id="Home"
      className="w-full lg:h-[100vh] md:py-20 py-10 flex flex-col justify-center items-center md:gap-20 gap-6 m-auto bg-[#F9F9F9] dark:bg-[#090a0b] lg:pb-[200px]"
    >
      <div className="max-w-[1000px] w-full flex flex-col justify-between md:gap-20 gap-10 px-5 md:px-10 ">
        <div className="flex md:flex-row flex-col-reverse gap-10 items-center justify-between">
          <div className="flex md:flex-col flex-col md:gap-8 gap-4 md:items-start items-center text-black dark:text-white">
            <h1 className="text-5xl font-bold md:text-left text-center">
              Full-Stack Developer 👋
            </h1>
            <p className="text-1xl text-black dark:text-white md:text-left text-center">
              Hello, I'm Saikhanbayar, a passionate full stack developer <br />
              focus on the MERN stack.
            </p>
            <div className="flex gap-5">
              <GithubIcon />
              <InstaIcon />
            </div>
          </div>

          <div
            className="avatar lg:w-[35%] md:w-[40%] w-[65%] border-[3px] border-black dark:border-white"
            style={{
              overflow: "hidden",
            }}
          >
            <img src={"/me.png"} alt="profilePicture" />
          </div>
        </div>
        <div className="w-full flex md:flex-row flex-col items-center lg:gap-20 md:gap-10 gap-5">
          <p className="text-lg font-semibold flex md:flex-row flex-col gap-5 justify-center items-center text-black dark:text-white">
            Tech Stack
            <span className="hidden md:flex text-lg font-normal text-black dark:text-white">
              |
            </span>
            <span className="flex md:hidden mb-4 text-lg font-normal w-full border-b border-black dark:border-white"></span>
          </p>
          <div className="grid lg:grid-cols-8 md:grid-cols-8 grid-cols-5 lg:gap-10 md:gap-8 sm:gap-10 gap-4">
            <Planguage source="/icon-html.png" />
            <Planguage source="/icon-css.png" />
            <Planguage source="/icon-javascript.png" />
            <Planguage source="/icon-typescript.svg" />
            <Planguage source="/icon-react.svg" />
            <Planguage source="/icon-nextjs.svg" />
            <Planguage source="/icon-nodejs.svg" />
            <Planguage source={"/icon-express.svg"} />
            <Planguage source="/icon-mongodb.svg" />
            <Planguage source="/icon-graphql.png" />
            <Planguage source="/icon-tailwindcss.svg" />
            <Planguage source="/icon-materialui.png" />
            <Planguage source={"/icon-cypress.svg"} />
            <Planguage source="/icon-jest.jpeg" />
            <Planguage source="/icon-git.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
