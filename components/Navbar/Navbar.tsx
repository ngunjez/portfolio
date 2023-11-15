import { NavLinks, NavLogo, NavbarContainer, Navlink } from '@/styles/Navbar/Navbar';
import Link from 'next/link'; 
import React from 'react';
import { useRouter } from "next/router";


const Navbar = () => {
  return ( 
    <NavbarContainer>
      <NavLogo></NavLogo>
        <NavLinks>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/Projects">Projects</Link>
        </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar;
