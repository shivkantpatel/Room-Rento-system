import React from 'react';
import { NavLink } from 'react-router-dom';

function NavMenu({ navMenuContent }) {
  return (
    <div className="flex gap-4">
      {navMenuContent.map((element, index) => (

      
        <NavLink
          key={index}
          to={element.path}
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-bold' : 'text-gray-700'
          }
        >
          {element.name}
        </NavLink>
      ))}
    </div>
  );
}

export default NavMenu;
