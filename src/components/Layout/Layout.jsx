// import React from "react";
// import Home from "../../pages/Home/Home";

// import {
//   MdKeyboardDoubleArrowLeft,
//   MdKeyboardDoubleArrowRight,
// } from "react-icons/md";
// import Menu from "../Menu/Menu";
// import { useTheme } from "../../context/ThemeContext";

// const Layout = () => {
//   const { open, setOpen } = useTheme();

//   const handleOpen = () => {
//     setOpen(!open);
//   };
//   return (
//     <>
//       <div className="flex bg-black relative h-64">
//         <div
//           className={`${
//             open ? "w-52" : "w-28"
//           } bg-gray-600 h-[100vh] pt-4 fixed hidden sm:block`}
//         >
//           <p
//             onClick={handleOpen}
//             className="cursor-pointer text-white right-3 absolute"
//           >
//             {open ? (
//               <MdKeyboardDoubleArrowLeft size={34} />
//             ) : (
//               <MdKeyboardDoubleArrowRight size={34} />
//             )}
//           </p>
//           {/* <Menu open={open} /> */}
//           <Menu />
//         </div>
//         <div className="absolute sm:left-56 left-4">
//           <Home />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Layout;

import React from "react";
import Home from "../../pages/Home/Home";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

import Menu from "../Menu/Menu";
import { useTheme } from "../../context/ThemeContext";

const Layout = () => {
  const { open, setOpen } = useTheme();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      {/* Desktop Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 hidden h-screen bg-gray-600 pt-4 transition-all duration-300 sm:block ${
          open ? "w-52" : "w-28"
        }`}
      >
        <button
          type="button"
          onClick={handleOpen}
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          className="absolute right-2 top-3 cursor-pointer text-white"
        >
          {open ? (
            <MdKeyboardDoubleArrowLeft size={34} />
          ) : (
            <MdKeyboardDoubleArrowRight size={34} />
          )}
        </button>

        <Menu />
      </aside>

      {/* Main Content */}
      <main
        className={`min-h-screen w-full min-w-0 bg-black transition-all duration-300 ${
          open
            ? "sm:ml-52 sm:w-[calc(100%-13rem)]"
            : "sm:ml-28 sm:w-[calc(100%-7rem)]"
        }`}
      >
        <Home />
      </main>
    </div>
  );
};

export default Layout;