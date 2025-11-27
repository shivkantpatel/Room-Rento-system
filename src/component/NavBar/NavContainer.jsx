import React from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

function NavContainer() {
  const arrayNavMenu = [
    { path: "/Sign-In", name: "Sign In" },
    { path: "/Sign-Up", name: "Sign Up" },
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-[90%] max-w-6xl mx-auto flex justify-between items-center ">
        <NavLogo />
        <NavMenu navMenuContent={arrayNavMenu} />
      </div>
    </header>
  );
}

export default NavContainer;
