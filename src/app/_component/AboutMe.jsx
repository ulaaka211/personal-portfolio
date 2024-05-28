export const AboutMe = () => {
  return (
    <div
      id="About"
      className="w-full md:h-[70vh] py-10 flex bg-white dark:bg-[#121212]"
    >
      <div className="flex md:flex-row flex-col items-center md:gap-20 gap-8 md:w-[55%] w-full m-auto px-4">
        <div className="md:w-[50%] w-[75%] h-[50%] overflow-hidden rounded-xl">
          <img src="/coding.png" alt="coding" />
        </div>
        <div className="md:w-[50%] w-[80%] flex flex-col gap-3">
          <h3 className="text-md font-extrabold text-[#3A7CF3] md:text-left text-center">
            ABOUT ME
          </h3>

          <h2 className="md:text-4xl text-2xl md:font-bold font-semibold md:text-left text-center text-black dark:text-white">
            A dedicated FullStack Developer
          </h2>

          <p className=" text-gray-500 md:text-left text-center">
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
