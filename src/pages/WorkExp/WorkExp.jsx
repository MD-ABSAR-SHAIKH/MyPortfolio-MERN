// import React from "react";

// const WorkExp = () => {
//   return (
//     <div className="sm:mr-16 sm:ml-4 text-black" id="WorkExp">
//       <div className="mt-12">
//         <h1 className="text-3xl font-bold flex justify-center">
//           WORK EXPERIENCE
//         </h1>
//         <hr className="bg-black h-0.5 my-2 sm:mx-64 mx-16" />
//       </div>
//       <p className="bg-gray-100 p-8 rounded-md mt-4">
//         As a passionate Full Stack Developer, I have honed my skills through
//         hands-on experience in building dynamic and responsive web applications
//         using the MERN stack. My academic journey in esteemed government
//         institutions has equipped me with a strong foundation in software
//         development principles, while my dedication to practical learning is
//         reflected in the completion of several impactful projects. These include
//         applications demonstrating robust backend architecture, intuitive
//         frontend design, and seamless integration of APIs. As a fresher, I bring
//         enthusiasm, a quick learning ability, and a commitment to leveraging
//         technology to solve real-world problems effectively.
//       </p>{" "}
//     </div>
//   );
// };

// export default WorkExp;

import React from "react";

const WorkExp = () => {
  return (
    <section
      id="WorkExp"
      className="mx-auto mt-8 w-full max-w-6xl min-w-0 px-4 pb-8 text-black sm:px-6 sm:mt-12"
    >
      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          WORK EXPERIENCE
        </h1>

        <hr className="mx-auto my-3 h-0.5 w-2/3 border-0 bg-black sm:w-1/2" />
      </div>

      {/* Experience Content */}
      <div className="w-full rounded-xl bg-gray-100 p-5 shadow-md sm:p-8">
        <p className="break-words text-justify text-sm leading-7 sm:text-base sm:leading-8">
          As a passionate Full Stack Developer, I have honed my skills through
          hands-on experience in building dynamic and responsive web
          applications using the MERN stack. My academic journey in government
          institutions has equipped me with a strong foundation in software
          development principles, while my dedication to practical learning is
          reflected in the completion of several projects. These include
          applications demonstrating robust backend architecture, intuitive
          frontend design, and seamless API integration. As a fresher, I bring
          enthusiasm, a quick learning ability, and a commitment to leveraging
          technology to solve real-world problems effectively.
        </p>
      </div>
    </section>
  );
};

export default WorkExp;