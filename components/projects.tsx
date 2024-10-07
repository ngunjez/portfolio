import {
  PCardContainer,
  PHeader,
  ProjectsContainer,
  PCasesCard,
  PImageContainer,
  PCasesBody,
  PCasesTitle,
  PCasesText,
  PButtonContainer,
  ReadMoreText,
  PWwrapper,
} from "@/styles/Projects";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeLayout from "@/Layout/Layout";
import styled from "styled-components";

const projectUrls = [
  "https://www.xntree.co/",
  "https://www.eqcap.fund/",
  "https://www.dollarmarkets.africa/",
  "https://www.bettercallpaul.world/",
  "https://www.code3camp.dev/",
  "https://parallel-88-fd73osf7e-parallel-88.vercel.app/",
  "https://www.peer2peer.pro/",
  "https://skyswyp.vercel.app/",
  "https://www.brokerbox.app/",
];

const smartCityCases = [
  {
    title: "Xntree",
    description: "Next js,Typescript, Styled-Components",
    imageSrc: "/xntree.png",
  },
  {
    title: "EQAM",
    description: "Next js, Javascript,",
    imageSrc: "/eqam.jpg",
  },
  {
    title: "Dollar Markets",
    description: "Next js,Typescript, Styled-Components",
    imageSrc: "/dollarmarkets.png",
  },
  {
    title: "Better Call Paul",
    description: "Next js,Typescript, Styled-Components,Node js,",
    imageSrc: "/bcp.png",
  },
  {
    title: "Code3camp",
    description: "Next js, Typescript, Styled-Components, Material UI",
    imageSrc: "/code3camp.jpg",
  },
  {
    title: "Parallel88",
    description: "Next js, Javascript",
    imageSrc: "/p88.jpg",
  },
  {
    title: "P2P Processor",
    description: "Next js, Javscript, Web3.js, Nodejs",
    imageSrc: "/p2p.jpg",
  },
  {
    title: "Skyswyp",
    description: "Next js, Javascript, Styled-Components",
    imageSrc: "/skyswyp.jpg",
  },
  {
    title: "BrokerBox",
    description: "Next js,Typescript, Styled-Components",
    imageSrc: "/brokerbox.jpg",
  },
];

const ScrollArrow = styled.div<{ direction: 'right' | 'left' }>`
  display: none;
  position: absolute;
  ${({ direction }) => (direction === 'right' ? 'right: 10px;' : 'left: 10px;')}
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  animation: pulse 1.5s infinite;

  &::after {
     content: ${({ direction }) => (direction === 'right' ? "'→'" : "'←'")};
    color: white;
    font-size: 24px;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
    50% {
      opacity: 0.7;
      transform: translateY(-50%) scale(1.1);
    }
    100% {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;


const Projects = () => {
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  const checkScroll = () => {
    if (wrapperRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = wrapperRef.current;
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
      setShowLeftArrow(scrollLeft > 0);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (wrapperRef.current) {
      const scrollAmount = wrapperRef.current.clientWidth * 0.8;
      wrapperRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    } else {
    }
  };
  return (
    <ProjectsContainer id="projects">
      <PHeader>PROJECTS</PHeader>
      <PWwrapper ref={wrapperRef}>
        <PCardContainer>
          {smartCityCases.map((smartCityCase, index) => (
            <PCasesCard key={index}>
              <PImageContainer>
                <Image
                  src={smartCityCase.imageSrc}
                  alt={smartCityCase.title}
                  width={383}
                  height={191}
                />
              </PImageContainer>
              <PCasesBody>
                <PCasesTitle>{smartCityCase.title}</PCasesTitle>
                <PCasesText>{smartCityCase.description}</PCasesText>
                <PButtonContainer>
                  {projectUrls[index] && (
                    <Link
                      href={projectUrls[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReadMoreText>View Site &#x2192;</ReadMoreText>
                    </Link>
                  )}
                </PButtonContainer>
              </PCasesBody>
            </PCasesCard>
          ))}
        </PCardContainer>
        {showLeftArrow && (
          <ScrollArrow 
            direction="left" 
            onClick={() => handleScroll('left')}
          />
        )}
        {showRightArrow && (
          <ScrollArrow 
            direction="right" 
            onClick={() => handleScroll('right')}
          />
        )}
      </PWwrapper>
    </ProjectsContainer>
  );
};

export default Projects;

Projects.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
