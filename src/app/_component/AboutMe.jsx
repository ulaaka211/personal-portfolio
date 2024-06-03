export const AboutMe = () => {
  return (
    <div
      id="About"
      className="w-full md:py-32 py-10 flex bg-white dark:bg-[#121212]"
    >
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-8 items-center md:px-10 px-5 max-w-[1000px] m-auto w-full">
        <div className="md:w-[50%] w-[75%] overflow-hidden rounded-xl">
          <img src="/coding.png" alt="coding" />
        </div>
        <div className="md:w-[50%] w-[80%] flex flex-col gap-3">
          <h3 className="text-md font-extrabold text-[#3A7CF3] lg:text-left text-center">
            ABOUT ME
          </h3>

          <h2 className="md:text-4xl text-2xl md:font-bold font-semibold lg:text-left text-center text-black dark:text-white">
            Full-Stack Developer
          </h2>

          <p className=" text-gray-500 lg:text-left text-center">
            I am a passionate Full Stack Developer with a focus on the MERN
            stack (MongoDB, Express.js, React, and Node.js). My expertise in
            these technologies allows me to design and develop dynamic,
            user-friendly web applications that are both seamless and scalable.
            I am dedicated to continuous learning and applying new technologies
            to solve real-world problems efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};
