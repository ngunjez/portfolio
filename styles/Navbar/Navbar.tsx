import styled, { css } from "styled-components";

interface NavLinksProps {
  isOpen: boolean;
}

export const NavbarContainer = styled.nav`
  position: fixed;
  width: 100vw;
  height: 10%;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  z-index: 20;
  @media screen and (max-width:768px){
    width:100vw;
    height:9.5%;
    /* background-color:red; */
  }
  @media screen and (max-width:380px){
    height:12%;
  }
`;

export const NavLogo = styled.div`
  position: absolute;
  height: 100%;
  width: 15vw;
  display: flex;
  background-image: url("/Logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color:inherit;
  cursor: pointer;
  @media screen and (max-width: 1290px) {
    width:20%;
  }
  @media screen and (max-width: 1100px){
    width:40%;
  }
  @media screen and (max-width: 768px) {
    height: 65px;
    width: 200px;
    left: 10px;
  }
`;

export const NavLinks = styled.div<NavLinksProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 483.47px;
  height: auto;
  padding-left: 30px;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  right: 40px;
  font-size: clamp(20px, calc(1.25rem + ((1vw - 7.68px) * 0.3472)), 24px);
  font-family: DM Sans;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 10px;
    top: 15px;
    width: 45px;
    height: 45px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.103);
    display: none;
    justify-content: center;
    align-items: center;
  }
`;

export const NavButton = styled.div`
  padding: 13px;
  font-size: 21px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  transition: opacity 0.3s;
  letter-spacing: 2px;
  background: none;
  font-family: Inter;
  
  &:hover {
    text-decoration: underline;
  }

  &.active {
    border: 1px solid black;
  }
`;

export const MobileMenuIcon = styled.div`
@media screen and (max-width: 768px) {
  position: absolute;
  right: 15px;
  top: 25px;
  width: 45px;
  height: 45px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
`;

export const MobileMenu = styled.div<NavLinksProps>`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  color:#fff;
  border-radius: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 85px 50px 15px;
  display: flex;
  font-family: DM Sans;
  font-weight: 800;
  gap: 30px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
`;

export const MobileMenuArrow = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 2px;
  position: absolute;
  top: -5px;
  bottom: auto;
  left: auto;
  right: 10px;
  transform: rotate(45deg);
`;

export const NavigationItems = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    &.NavMobile, &.NavMenuIcon {
      display: none;
    }
  }

  @media screen and (max-width: 899px) {
    &.Nav {
      display: none;
    }

    &.NavContainer {
      width: 100vw;
      height: auto;
    }

    &.NavMenuIcon {
      ${MobileMenuIcon}
    }

    &.NavMobile {
      ${MobileMenu}
    }

    &.mobile_menu_arrow {
      ${MobileMenuArrow}
    }
  }

  @media screen and (max-width: 299px) {
    &.NavMobile {
      right: auto;
      width: 95%;
      margin: auto;
    }
  }
`;
