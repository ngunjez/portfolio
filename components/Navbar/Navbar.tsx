import {
  NavLinks,
  NavLogo,
  NavbarContainer,
  NavButton, 
  MobileMenuIcon,
  MobileMenu,
} from "@/styles/Navbar/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import useOutsideClick from "@/Helpers/CloseModal";
import { StyleSheetManager } from 'styled-components';


const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/projects", label: "Projects" },
];

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const modalContainerRef = useOutsideClick(() => setIsOpen(false));

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isOpen'}>
    <NavbarContainer>
      <NavLogo onClick={() => handleNavigation("/")}></NavLogo>

      <NavLinks isOpen={isOpen} ref={modalContainerRef}>
        {navigationItems.map((item, index) => (
          <NavButton key={index} onClick={() => handleNavigation(item.path)}>
            {item.label}
          </NavButton>
        ))}
      </NavLinks>

      <MobileMenuIcon onClick={toggleMobileMenu} className="mobile-menu-toggle">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </MobileMenuIcon>

      {isOpen && (
        <MobileMenu ref={modalContainerRef}>
          {navigationItems.map((item, index) => (
            <div key={index}>
              <h3 onClick={() => handleNavigation(item.path)}>{item.label}</h3>
            </div>
          ))}
        </MobileMenu>
      )}
    </NavbarContainer>
    </StyleSheetManager>
  );
};

export default Navbar;
