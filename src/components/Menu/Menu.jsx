// import React from "react";
// import { FaHome } from "react-icons/fa";
// import {
//   FcAbout,
//   FcBiotech,
//   FcReadingEbook,
//   FcVideoProjector,
// } from "react-icons/fc";
// import { TbSortAscending } from "react-icons/tb";
// import { RiContactsFill } from "react-icons/ri";
// import { Link } from "react-scroll";
// import { useTheme } from "../../context/ThemeContext";
// const Menu = () => {
//   const { open } = useTheme();

//   return (
//     <>
//       {open ? (
//         <>
//           <img
//             src="/profile.jpg"
//             alt="profile_pic"
//             className="w-32 rounded-tr-full mx-auto"
//           />
//           <div className="ml-4 text-white flex flex-col gap-4 mt-4">
//             <Link
//               to="home"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={400}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FaHome size={23} /> <span>Home</span>
//               </p>
//             </Link>
//             <Link
//               to="About"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-100}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FcAbout size={23} /> <span>About</span>
//               </p>
//             </Link>
//             <Link
//               to="WorkExp"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-100}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <TbSortAscending size={23} /> <span>Work Experience</span>
//               </p>
//             </Link>
//             <Link
//               to="techstack"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-100}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FcBiotech size={23} /> <span>Tech Stack</span>
//               </p>
//             </Link>
//             <Link
//               to="Education"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-100}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FcReadingEbook size={23} /> <span>Education</span>
//               </p>
//             </Link>
//             <Link
//               to="Projects"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-60}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FcVideoProjector size={23} /> <span>Projects</span>
//               </p>
//             </Link>
//             <Link
//               to="Contact"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-120}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <RiContactsFill size={23} /> <span>Contact</span>
//               </p>
//             </Link>
//           </div>
//         </>
//       ) : (
//         <div className="text-white flex justify-center items-center flex-col gap-4 pt-8 mt-24">
//           <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//             <FaHome size={28} title="Home" />
//           </p>
//           <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//             <FcAbout size={28} title="About" />
//           </p>
//           <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//             <TbSortAscending size={28} title="Work Experience" />
//           </p>
//           <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//             <FcBiotech size={28} title="Tech Stack" />
//           </p>
//           <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//             <FcReadingEbook size={28} title="Education" />
//           </p>
//           <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//             <FcVideoProjector size={28} title="Projects" />
//           </p>
//           <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//             <RiContactsFill size={28} title="Contact" />
//           </p>
//         </div>
//       )}
//     </>
//   );
// };
// export default Menu;

// import React from "react";
// import { FaHome } from "react-icons/fa";
// import {
//   FcAbout,
//   FcBiotech,
//   FcBusinessContact,
//   FcReadingEbook,
//   FcVideoProjector,
//   FcVoicePresentation,
// } from "react-icons/fc";
// import { TbSortAscending } from "react-icons/tb";

// const Menu = ({ open }) => {
//   return (
//     <div className={`${open ? "flex" : "hidden"} flex-col`}>
//       <img
//         src="/profile.jpg"
//         alt="profile_pic"
//         className="w-32 rounded-full mx-auto m-4"
//       />
//       <div className="ml-4 text-white flex flex-col gap-4">
//         <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//           <FaHome  size={23}/> <span>Home</span>
//         </p>
//         <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//           <FcAbout  size={23}/> <span>About</span>
//         </p>
//         <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//           <TbSortAscending  size={23}/> <span>Experience</span>
//         </p>
//         <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//           <FcBiotech  size={23}/> <span>Tech Stack</span>
//         </p>
//         <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//           <FcReadingEbook  size={23}/> <span>Education</span>
//         </p>
//         <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//           <FcVideoProjector  size={23}/> <span>Projects</span>
//         </p>
//         <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//           <FcVoicePresentation  size={23}/> <span>Testimonial</span>
//         </p>
//         <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//           <FcBusinessContact  size={23}/> <span>Contact</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FcAbout,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { TbSortAscending } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { useTheme } from "../../context/ThemeContext";

const Menu = () => {
  const { open } = useTheme();

  const menuItems = [
    {
      title: "Home",
      to: "home",
      icon: <FaHome size={23} />,
      offset: -100,
    },
    {
      title: "About",
      to: "About",
      icon: <FcAbout size={23} />,
      offset: -100,
    },
    {
      title: "Work Experience",
      to: "WorkExp",
      icon: <TbSortAscending size={23} />,
      offset: -100,
    },
    {
      title: "Tech Stack",
      to: "techstack",
      icon: <FcBiotech size={23} />,
      offset: -100,
    },
    {
      title: "Education",
      to: "Education",
      icon: <FcReadingEbook size={23} />,
      offset: -100,
    },
    {
      title: "Projects",
      to: "Projects",
      icon: <FcVideoProjector size={23} />,
      offset: -60,
    },
    {
      title: "Contact",
      to: "Contact",
      icon: <RiContactsFill size={23} />,
      offset: -120,
    },
  ];

  return (
    <div className="w-full">
      {/* Profile Image */}
      {open && (
        <div className="flex justify-center px-3 pt-12">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-28 max-w-full rounded-tr-full object-cover sm:w-32"
          />
        </div>
      )}

      {/* Navigation Menu */}
      <nav
        className={`mt-6 flex flex-col text-white ${
          open
            ? "ml-4 items-start gap-5"
            : "mt-24 items-center gap-6"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeClass="text-blue-400"
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={400}
            className="block max-w-full cursor-pointer"
            title={item.title}
          >
            <div
              className={`flex items-center transition-colors duration-200 hover:text-blue-400 ${
                open
                  ? "gap-2"
                  : "justify-center"
              }`}
            >
              <span className="flex shrink-0 items-center justify-center">
                {React.cloneElement(item.icon, {
                  size: open ? 23 : 28,
                })}
              </span>

              {open && (
                <span className="pr-2 text-sm lg:text-base">
                  {item.title}
                </span>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Menu;