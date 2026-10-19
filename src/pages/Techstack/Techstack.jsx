// import React from "react";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaBootstrap } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { RiReactjsFill } from "react-icons/ri";
// import { FaNodeJs } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { IoLogoFirebase } from "react-icons/io5";
// import { FaGithub } from "react-icons/fa";
// // import { MdJavascript } from "react-icons/md";

// const Techstack = () => {
//   return (
//     <>
//         <div className="mt-8">
//           <h1 className="text-3xl font-bold flex justify-center">
//             TECHNOLOGIES STACK
//           </h1>
//           <hr className="bg-black h-0.5 my-2 sm:mx-64 mx-24" />
//           <p className="flex justify-center my-4 mx-4">
//             👉 including programming languages, frameworks, databases, front-end
//             and back-end, and APIs
//           </p>
//         </div>
//       <div className="sm:w-[62rem] bg-gray-100 text-black p-4 mb-12 rounded" id="techstack">
//         <div className="flex justify-center items-center sm:flex-row flex-col flex-wrap gap-4 gap-x-16 my-8">
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <FaHtml5 size={30} /> <p>HTML</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <FaCss3 size={30} /> <p>CSS</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <IoLogoJavascript size={30} /> <p>JAVASCRIPT</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <FaBootstrap size={30} /> <p>BOOTSTRAP</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <RiTailwindCssFill size={30} /> <p>TAILWIND CSS</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <RiReactjsFill size={30} /> <p>REACT JS</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <FaNodeJs size={30} /> <p>NODE JS</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <SiExpress size={30} /> <p>EXPRESS JS</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <SiMongodb size={30} /> <p>MONGO DB</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <IoLogoFirebase size={30} /> <p>FIREBASE</p>
//           </div>
//           <div className="flex items-center text-xl sm:px-8 px-4 sm:py-4 py-2 border-solid border border-sky-500 gap-1 rounded-md cursor-pointer hover:bg-blue-300 hover:shadow-2xl">
//             <FaGithub size={30} /> <p>GITHUB</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Techstack;
import React from "react";
import { FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Techstack = () => {
  const technologies = [
    { name: "HTML", icon: <FaHtml5 size={30} /> },
    { name: "CSS", icon: <FaCss3 size={30} /> },
    { name: "JavaScript", icon: <IoLogoJavascript size={30} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={30} /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={30} /> },
    { name: "React JS", icon: <RiReactjsFill size={30} /> },
    { name: "Node JS", icon: <FaNodeJs size={30} /> },
    { name: "Express JS", icon: <SiExpress size={30} /> },
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
    { name: "Firebase", icon: <IoLogoFirebase size={30} /> },
    { name: "GitHub", icon: <FaGithub size={30} /> },
  ];

  return (
    <section
      id="techstack"
      className="mx-auto mt-8 w-full max-w-6xl min-w-0 px-4 pb-12 sm:px-6"
    >
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          TECHNOLOGY STACK
        </h1>

        <hr className="mx-auto my-3 h-0.5 w-2/3 border-0 bg-black sm:w-1/2" />

        <p className="mx-auto my-4 max-w-2xl text-sm leading-7 sm:text-base">
          👉 Technologies I use for frontend and backend development,
          databases, and version control.
        </p>
      </div>

      {/* Technologies */}
      <div className="w-full rounded-xl bg-gray-100 p-4 text-black shadow-lg sm:p-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex min-w-0 items-center justify-center gap-3 rounded-lg border border-sky-500 bg-white px-3 py-4 transition duration-300 hover:bg-blue-100 hover:shadow-lg sm:px-4"
            >
              <span className="shrink-0">{tech.icon}</span>

              <p className="break-words text-base font-medium sm:text-lg">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;