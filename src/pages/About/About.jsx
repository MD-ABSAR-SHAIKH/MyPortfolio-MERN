import React from "react";

const About = () => {
  return (
    <div
      className="text-black flex justify-center flex-col sm:flex-row items-center bg-white gap-4 sm:w-[62rem] rounded-xl sm:ml-56 sm:mt-4 mt-2
     shadow-2xl"
      id="About"
    >
      <div className="w-4/3 p-4">
        <img
          src="profile.jpg"
          className="h-[20rem] w-[50rem] rounded-lg shadow-2xl"
          alt=""
        />
      </div>
      <div className="p-4 sm:w-[110rem]">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tempore totam necessitatibus debitis nam fuga neque nulla, ratione
          labore accusamus molestiae! Voluptatum nesciunt provident repudiandae
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tempore totam necessitatibus debitis nam fuga neque nulla, ratione
          labore accusamus molestiae! Voluptatum nesciunt provident repudiandae
          voluptates earum, mollitia sit quasi!
        </p>
      </div>
    </div>
  );
};

export default About;

// import React from "react";

// const About = () => {
//   return (
//     <section
//       id="About"
//       className="mx-auto mt-4 flex w-full max-w-5xl flex-col items-center gap-4 overflow-hidden rounded-xl bg-white text-black shadow-2xl sm:flex-row sm:gap-6 sm:p-4"
//     >
//       {/* Profile Image */}
//       <div className="w-full shrink-0 p-4 sm:w-2/5 sm:p-2">
//         <img
//           src="/profile.jpg"
//           alt="Profile"
//           className="mx-auto h-64 w-full max-w-sm rounded-lg object-cover shadow-xl sm:h-80 sm:max-w-none"
//         />
//       </div>

//       {/* About Content */}
//       <div className="w-full min-w-0 p-4 sm:flex-1 sm:p-3">
//         <h2 className="mb-4 text-2xl font-bold">About Me</h2>

//         <p className="break-words text-justify text-sm leading-7 sm:text-base">
//           I am a Computer Science and Engineering student passionate about
//           software development and modern technologies. I work with the MERN
//           stack to build responsive web applications and practical projects.
//           I am also interested in Artificial Intelligence and Machine Learning
//           and continuously work on improving my technical skills. My goal is
//           to create useful, reliable solutions while growing as a software
//           developer and AI engineer.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;