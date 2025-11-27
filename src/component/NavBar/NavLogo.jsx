import React from "react";
import imagePng from "../../../public/image.png";

function NavLogo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <img
        src={imagePng}
        alt="Room Rento Logo"
        className="w-[120px] h-auto object-contain select-none"
        loading="lazy"
      />
    </div>
  );
}

export default NavLogo;
