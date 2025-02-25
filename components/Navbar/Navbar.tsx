import {
  NavLinks,
  NavLogo,
  NavbarContainer,
  MobileMenuIcon,
  MobileMenu,
} from "@/styles/Navbar/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import useOutsideClick from "@/Helpers/CloseModal";
import { StyleSheetManager } from "styled-components";
import { Link } from "react-scroll";
import styled from "styled-components";

const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
`;

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
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "isOpen"}>
      <NavbarContainer>
        <NavLogo onClick={() => handleNavigation("/")}>
          <h1>OWEN</h1>
        </NavLogo>

        <NavLinks isOpen={isOpen} ref={modalContainerRef}>
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.label.toLowerCase()}
              smooth={true}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </NavLinks>

        <MobileMenuIcon
          onClick={toggleMobileMenu}
          className="mobile-menu-toggle"
        >
          <MenuIcon />
        </MobileMenuIcon>

        <MobileMenu isOpen={isOpen} ref={modalContainerRef}>
          <CloseButton onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </CloseButton>
          {navigationItems.map((item, index) => (
            <div key={index}>
              <Link
                to={item.label.toLowerCase()}
                smooth={true}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </MobileMenu>
      </NavbarContainer>
    </StyleSheetManager>
  );
};

export default Navbar;