import styled from "styled-components";

export const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #131917;
  padding:5% 0;
  @media screen and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:5% 0;
  }
`;

export const PWwrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
`;

export const PHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: clamp(24px, calc(1.5rem + ((1vw - 7.68px) * 0.5208)), 30px);
  font-weight: 500;
  line-height: normal;
  padding: 3%;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    margin-top:70px;
  }
`;

export const PCardContainer = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    gap:10px;
  }
`;

export const PImageContainer = styled.div`
  width: 100%;
  height: 191px;
  mix-blend-mode: normal;
  img {
    transition: transform 0.3s ease-in-out;
    border-radius: 20px 20px 0px 0px;
    object-position: center;
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const PCasesCard = styled.div`
  width: clamp(250px, 100%, 383px);
  height: clamp(370px, 100%, 407px);
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #033437;
  margin: 2%;
  overflow: hidden;
  box-sizing: border-box;
  &:hover {
    ${PImageContainer} img {
      transform: scale(1.1);
    }
  }
`;

export const PCasesBody = styled.div`
  display: flex;
  padding: 25.5px 20px 24.5px 20px;
  justify-content: center;
  align-items: flex-start;
  height: 222px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 15px 10px 20px 10px;
  }
`;

export const PCasesTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 7;
  line-height: 26.3px;
  letter-spacing: -0.8px;
`;

export const PCasesText = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26.8px;
  letter-spacing: -0.8px;
  width: 100%;
`;

export const PButtonContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReadMoreText = styled(PCasesText)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  cursor:pointer;
`;
