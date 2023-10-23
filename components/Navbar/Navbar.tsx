import { NavLinks, NavLogo, NavbarContainer, Navlink } from '@/styles/Navbar/Navbar';
import Link from 'next/link'; 
import React from 'react';

const Navbar = () => {
  return ( 
    <NavbarContainer>
      <NavLogo></NavLogo>
        <NavLinks>
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
        </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar;
