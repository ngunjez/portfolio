import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  width: 100vw;
  height: 15vh;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  z-index:20;
`;

export const NavLogo = styled.div`
  position: absolute;
  height: 90px;
  width: 255px;
  display: flex;
  background-image: url("/Logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const NavLinks = styled.div`
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
`;

export const Navlink = styled.div`
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  font-family: Inter;
`;
