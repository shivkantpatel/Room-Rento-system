import React from "react";
import { NavLink } from "react-router-dom";

function NavMenu({ navMenuContent }) {
  return (
    <nav className="flex gap-6">
      {navMenuContent.map((element, index) => (
        <NavLink
          key={index}
          to={element.path}
          className={({ isActive }) =>
            `relative text-[15px] font-medium tracking-wide transition-all duration-300 ${
              isActive
                ? "text-indigo-600 after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-indigo-600 after:rounded-full"
                : "text-gray-700 hover:text-indigo-500"
            }`
          }
        >
          {element.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavMenu;
