// import React from "react";

// const Projects = () => {
//   return (
//     <>
//       <div id="Projects" className="-mt-4">
//         <div>
//           <h1 className="text-3xl font-bold flex justify-center">
//             TOP RECENT PROJECTS
//           </h1>
//           <hr className="bg-black my-2 sm:mx-64 mx-16 h-0.5" />
//           <p className="flex justify-center px-16 just">
//             👉 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
//             necessitatibus labore eos quam voluptatem magnam quas, saepe sequi
//             autem reprehenderit, consectetur soluta vitae ratione minus
//             molestiae ipsam, porro exercitationem adipisci. Quas quis molestiae
//             in doloremque suscipit nemo fugiat, dignissimos illo hic labore.
//             Tempora eius ab cumque quod, omnis dolore a assumenda? Debitis
//             exercitationem cum, numquam quis itaque nam aperiam architecto.
//             Quaerat voluptatem error quae at
//           </p>
//         </div>
//         <div className="flex items-center justify-center mb-4 pb-4 mt-12 sm:mr-8 gap-12 flex-wrap">
//           <div className="text-black p-4 shadow-2xl hover:bg-gray-100 rounded-lg hover:scale-y-110 transition-transform">
//             <div>
//               <img
//                 src="profile.jpg"
//                 className="h-[14rem] w-full rounded-lg shadow-2xl"
//               />
//             </div>
//             <div className="gap-3 flex my-2">
//               <button className="bg-red-500 py-1  px-6 rounded-full">M</button>
//               <button className="bg-red-500 py-1 px-5 rounded-full">E</button>
//               <button className="bg-red-500 py-1 px-5 rounded-full">R</button>
//               <button className="bg-red-500 py-1 px-6 rounded-full">N</button>
//             </div>

//             <h1 className="font-bold flex justify-center my-1">
//               HOSPITAL MANAGEMENT SYSTEM
//             </h1>
//             <div className="mt-4 py-2 flex cursor-pointer justify-center bg-green-500 rounded-full">
//               VIEW
//             </div>
//           </div>
//           <div className="text-black p-4 shadow-2xl hover:bg-gray-100 rounded-lg hover:scale-y-110 transition-transform">
//             <div>
//               <img
//                 src="profile.jpg"
//                 className="h-[14rem] w-full rounded-lg shadow-2xl"
//               />
//             </div>
//             <div className="gap-3 flex my-2">
//               <button className="bg-red-500 py-1  px-6 rounded-full">M</button>
//               <button className="bg-red-500 py-1 px-5 rounded-full">E</button>
//               <button className="bg-red-500 py-1 px-5 rounded-full">R</button>
//               <button className="bg-red-500 py-1 px-6 rounded-full">N</button>
//             </div>

//             <h1 className="font-bold flex justify-center my-1">
//               HOSPITAL MANAGEMENT SYSTEM
//             </h1>
//             <div className="mt-4 py-2 flex cursor-pointer justify-center bg-green-500 rounded-full">
//               VIEW
//             </div>
//           </div>
//           <div className="text-black p-4 shadow-2xl hover:bg-gray-100 rounded-lg hover:scale-y-110 transition-transform">
//             <div>
//               <img
//                 src="profile.jpg"
//                 className="h-[14rem] w-full rounded-lg shadow-2xl"
//               />
//             </div>
//             <div className="gap-3 flex my-2">
//               <button className="bg-red-500 py-1  px-6 rounded-full">M</button>
//               <button className="bg-red-500 py-1 px-5 rounded-full">E</button>
//               <button className="bg-red-500 py-1 px-5 rounded-full">R</button>
//               <button className="bg-red-500 py-1 px-6 rounded-full">N</button>
//             </div>
//             <h1 className="font-bold flex justify-center my-1">
//               HOSPITAL MANAGEMENT SYSTEM
//             </h1>
//             <div className="mt-4 py-2 flex cursor-pointer justify-center bg-green-500 rounded-full">
//               VIEW
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;


import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "HOSPITAL MANAGEMENT SYSTEM",
      image: "/profile.jpg",
      technologies: ["M", "E", "R", "N"],
      description:
        "A MERN stack application for managing hospital operations and related information.",
      link: "#",
    },
    {
      title: "HOSPITAL MANAGEMENT SYSTEM",
      image: "/profile.jpg",
      technologies: ["M", "E", "R", "N"],
      description:
        "A full-stack web application built with MongoDB, Express, React, and Node.js.",
      link: "#",
    },
    {
      title: "HOSPITAL MANAGEMENT SYSTEM",
      image: "/profile.jpg",
      technologies: ["M", "E", "R", "N"],
      description:
        "A responsive web application demonstrating full-stack development skills.",
      link: "#",
    },
  ];

  return (
    <section
      id="Projects"
      className="w-full min-w-0 max-w-full overflow-x-clip px-4 py-8 text-black sm:px-6 sm:py-10"
    >
      {/* Heading */}
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-center text-2xl font-bold sm:text-3xl">
          TOP RECENT PROJECTS
        </h1>

        <hr className="mx-auto my-3 h-0.5 w-2/3 border-0 bg-black sm:w-1/2" />

        <p className="mx-auto mt-4 max-w-4xl text-left text-sm leading-7 sm:text-base">
          👉 Here are some of my recent projects showcasing my skills in
          full-stack web development. I focus on building responsive,
          user-friendly applications using modern technologies and solving
          practical problems through software.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="min-w-0 overflow-hidden rounded-xl bg-white p-4 shadow-xl transition duration-300 hover:bg-gray-100 sm:hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full rounded-lg object-cover sm:h-52"
            />

            {/* Technology Badges */}
            <div className="my-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full bg-red-500 px-4 py-1 text-sm font-semibold text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Details */}
            <h2 className="my-2 break-words text-center text-base font-bold sm:text-lg">
              {project.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-700">
              {project.description}
            </p>

            <a
              href={project.link}
              onClick={(e) => {
                if (project.link === "#") e.preventDefault();
              }}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-green-500 py-2 font-semibold text-white transition hover:bg-green-600"
            >
              VIEW
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;