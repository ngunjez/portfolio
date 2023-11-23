import { NavLinks, NavLogo, NavbarContainer, Navlink } from '@/styles/Navbar/Navbar';
import Link from 'next/link'; 
import React, { useState } from "react";
import { useRouter } from "next/router";
import useOutsideClick from '@/Helpers/CloseModal';


const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <NavbarContainer>
      <NavLogo onClick={() => handleNavigation("/")}></NavLogo>
      <NavLinks isOpen={isOpen}>
          <span onClick={() => handleNavigation("/#")}>Home</span>
          <span onClick={() => handleNavigation("/about")}>About</span>
          <span onClick={() => handleNavigation("/contact")}>Contact</span>
          <span onClick={() => handleNavigation("/projects")}>Projects</span>
        </NavLinks>
        <div onClick={toggleMobileMenu}>
        {isOpen ? "Close" : "Menu"}
      </div>
    </NavbarContainer>
  )
}

export default Navbar;
