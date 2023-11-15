import { NavLinks, NavLogo, NavbarContainer, Navlink } from '@/styles/Navbar/Navbar';
import Link from 'next/link'; 
import React from 'react';
import { useRouter } from "next/router";


const Navbar = () => {
  return ( 
    <NavbarContainer>
      <NavLogo></NavLogo>
        <NavLinks>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/projects">Projects</Link>
        </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar;
