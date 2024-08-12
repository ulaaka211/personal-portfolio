"use client";

import Image from "next/image";

export const Works = () => {
  return (
    <div
      id="Works"
      className="w-full flex items-center bg-[#F9F9F9] dark:bg-[#090a0b] md:py-24 py-10"
    >
      <div className="flex max-w-[1000px] w-full m-auto md:px-10 px-5 justify-center">
        <div className="flex flex-col gap-8">
          <h3 className=" text-main text-xl font-bold mb-3 m-auto text-black dark:text-white">
            RECENT WORKS
          </h3>

          <div className="flex flex-col md:gap-20 gap-10">
            <h1 className="text-main text-5xl font-bold mb-3 m-auto text-black dark:text-white p-10">
              Coming soon...
            </h1>
            {/* <div className="w-full flex lg:flex-row flex-col md:gap-10 gap-5 items-center ">
              <div
                onClick={() => {
                  window.open("https://ecommerce-mo.vercel.app/");
                }}
                className="relative md:w-[50%] w-[75%] hover:scale-[98%] flex justify-start aspect-video overflow-scroll cursor-pointer rounded-md"
              >
                <Image src="/ecommerce.png" fill alt="work" />
              </div>
              <div className="md:w-[50%] w-[80%] flex flex-col justify-between lg:text-left text-center gap-4">
                <h3
                  onClick={() => {
                    window.open("https://ecommerce-mo.vercel.app/");
                  }}
                  className="text-2xl text-[#3A7CF3] font-semibold hover:text-main cursor-pointer"
                >
                  E-commerce Web Application
                </h3>
                <p className="text-lg text-gray-500">
                  Discover curated selection of trendy fashion, stylish
                  accessories, gadgets, and home goods. Fast shipping, secure
                  payments, reliable customer service.
                </p>
                <p className="text-xl text-gray font-medium text-black dark:text-white">
                  Typescript, ReactJS, NextJS, Vercel, ExpressJS, NodeJS,
                  MongoDB, MUI, Nodemailer, Cloudinary
                </p>
              </div>
            </div>
            <div className="w-full flex lg:flex-row-reverse flex-col md:gap-10 gap-5 items-center">
              <div
                onClick={() => {
                  window.open("https://food-delivery-mo.vercel.app/");
                }}
                className="relative md:w-[50%] w-[75%] hover:scale-[98%] flex justify-start aspect-video overflow-scroll cursor-pointer rounded-md"
              >
                <Image src="/fooddeliver.png" fill alt="work" />
              </div>
              <div className="md:w-[50%] w-[80%] flex flex-col justify-between lg:text-left text-center gap-6">
                <h3
                  onClick={() => {
                    window.open("https://food-delivery-mo.vercel.app/");
                  }}
                  className="text-2xl text-[#3A7CF3] font-semibold hover:text-main cursor-pointer"
                >
                  Food Delivery Web Application
                </h3>
                <p className="text-lg text-gray-500">
                  Food delivery web apps offer convenience, variety, and
                  real-time tracking for users to order meals from restaurants
                  and have them delivered.
                </p>
                <p className="text-xl text-gray font-medium text-black dark:text-white">
                  Typescript, ReactJS, NextJS, Vercel, ExpressJS, NodeJS,
                  MongoDB, MUI, Nodemailer, JWT, Cloudinary
                </p>
              </div>
            </div> */}

            {/* <div className="w-full flex lg:flex-row flex-col md:gap-10 gap-5 items-center">
              <div
                onClick={() => {
                  window.open(
                    "https://intern-cms-dashboard-pinecone-studio.vercel.app/"
                  );
                }}
                className="relative md:w-[50%] w-[75%] hover:scale-[98%] flex justify-start aspect-video overflow-scroll cursor-pointer rounded-md"
              >
                <Image src="/blog.png" fill alt="work" />
              </div>
              <div className="md:w-[50%] w-[80%] flex flex-col justify-between lg:text-left text-center gap-6">
                <h3
                  onClick={() => {
                    window.open(
                      "https://intern-cms-dashboard-pinecone-studio.vercel.app/"
                    );
                  }}
                  className="text-2xl text-[#3A7CF3] font-semibold hover:text-main cursor-pointer"
                >
                  Blog Web Application
                </h3>
                <p className="text-lg text-gray-500">
                  A blog web application is a platform that allows users to
                  create, publish, and manage their own blogs online. It
                  provides an easy-to-use.
                </p>
                <p className="text-xl text-gray font-medium text-black dark:text-white">
                  Typescript, ReactJS, NextJS, Vercel, NodeJS, MongoDB,
                  Nodemailer, JWT, Graphql, Jest, Cypress, Nx-monorepo,
                  TailwindCSS
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
