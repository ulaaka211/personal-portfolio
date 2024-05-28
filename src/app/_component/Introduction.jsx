"use client";

import { GithubIcon } from "../assets/GithubIcon";
import { InstaIcon } from "../assets/InstaIcon";
import { Planguage } from "./Planguage";

export const Introduction = () => {
  return (
    <div
      id="Home"
      className="w-full md:h-[100vh] h-[70vh] px-6 flex flex-col justify-center items-center md:gap-20 gap-6 m-auto bg-[#F9F9F9] dark:bg-[#090a0b] md:pb-[200px]"
    >
      <div className="flex md:flex-row flex-col-reverse gap-10 items-center justify-between">
        <div className="flex md:flex-col flex-col md:gap-8 gap-4 md:items-start items-center text-black dark:text-white">
          <h1 className="text-5xl font-bold md:text-left text-center">
            FullStack Developer 👋
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
          className="avatar md:w-[30%] w-[75%] border-[3px] border-black dark:border-white"
          style={{
            overflow: "hidden",
          }}
        >
          <img src={"/catler.png"} alt="profilePicture" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-20 gap-5 items-center md:mr-12">
        <p className="text-lg font-semibold flex md:flex-row flex-col gap-3 justify-center items-center text-black dark:text-white">
          Tech Stack
          <span className="hidden md:flex ml-5 text-lg font-normal text-black dark:text-white">
            |
          </span>
          <span className="flex md:hidden mb-4 text-lg font-normal w-full border-b border-black dark:border-white"></span>
        </p>
        <div className="hidden md:flex flex-col gap-6 items-center">
          <div className="flex md:gap-14 gap-4">
            <Planguage source="/icon-html.png" />
            <Planguage source="/icon-css.png" />
            <Planguage source="/icon-javascript.png" />
            <Planguage source="/icon-typescript.svg" />
            <Planguage source="/icon-react.svg" />
            <Planguage source="/icon-nextjs.svg" />
            <Planguage source="/icon-nodejs.svg" />
            <Planguage source={"/icon-express.svg"} />
          </div>
          <div className="flex md:gap-14 gap-4">
            <Planguage source="/icon-mongodb.svg" />
            <Planguage source="/icon-graphql.png" />
            <Planguage source="/icon-tailwindcss.svg" />
            <Planguage source="/icon-materialui.png" />
            <Planguage source={"/icon-cypress.svg"} />
            <Planguage source="/icon-jest.jpeg" />
            <Planguage source="/icon-git.svg" />
          </div>
        </div>
        <div className="flex md:hidden flex-col gap-6 items-center">
          <div className="flex md:gap-14 gap-4">
            <Planguage source="/icon-html.png" />
            <Planguage source="/icon-css.png" />
            <Planguage source="/icon-javascript.png" />
            <Planguage source="/icon-typescript.svg" />
            <Planguage source="/icon-react.svg" />
          </div>
          <div className="flex md:gap-14 gap-4">
            <Planguage source="/icon-mongodb.svg" />
            <Planguage source="/icon-graphql.png" />
            <Planguage source="/icon-tailwindcss.svg" />
            <Planguage source="/icon-materialui.png" />
            <Planguage source={"/icon-cypress.svg"} />
          </div>
          <div className="flex md:gap-14 gap-4">
            <Planguage source="/icon-nextjs.svg" />
            <Planguage source="/icon-nodejs.svg" />
            <Planguage source={"/icon-express.svg"} />
            <Planguage source="/icon-jest.jpeg" />
            <Planguage source="/icon-git.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
