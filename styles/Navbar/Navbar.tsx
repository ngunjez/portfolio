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
  z-index:20;
`;

export const NavLogo = styled.div`
  position: absolute;
  height: 100%;
  width: 255px;
  display: flex;
  background-image: url("/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
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
  cursor: pointer;

  ${(props) =>
    props.isOpen &&
    css`
      background-color: #333;
      flex-direction: column;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    `}
`

export const Navlink = styled.div`
  text-decoration: none;
  font-weight: bold;
   cursor: pointer;
  font-family: Inter;
`;
