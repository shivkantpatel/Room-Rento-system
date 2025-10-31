import React from 'react'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'

function NavContainer() {


  let arrayNavMenu = [
    {path: '/Sign-In' , name:'Sign-In'  },
    {path: '/Sign-Up' , name:'Sign-Up'  },
    
  ]


  return (
    <div className=' w-[90%] m-auto flex justify-between items-center'>
      <NavLogo></NavLogo>
      <NavMenu navMenuContent={arrayNavMenu}/>
    </div>
  )
}

export default NavContainer
