import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HomeLayout from "@/Layout/Layout";
import {
  ProjectsContainer,
  ProjectsInnerContainer,
  ProjectsHeader,
  ProjectsSubheader,
  ProjectsCarousel,
  ProjectsArrow,
  ProjectCard,
  ProjectImageContainer,
  ProjectCardBody,
  ProjectCardTitle,
  ProjectCardText,
  ProjectCardLink
} from "@/styles/Projects";

const projectUrls = [
  "https://app.dollarsapp.ai/copytrading",
  "https://www.xntree.co/",
  "https://www.eqcap.fund/",
  "https://www.dollarmarkets.africa/",
  "https://www.bettercallpaul.world/",
  "https://parallel-88-fd73osf7e-parallel-88.vercel.app/",
  "https://code3camp.vercel.app/",
  "https://www.peer2peer.pro/",
  "https://skyswyp.vercel.app/",
  "https://brokerbox-v2.vercel.app/",
];

const projectCases = [
  {
    title: "Dollars App",
    description: "Next js, Typescript, Material UI, Javascript",
    imageSrc: "/d2.png",
  },
  {
    title: "Xntree",
    description: "Next js, Typescript, Styled-Components",
    imageSrc: "/xntree.png",
  },
  {
    title: "EQAM",
    description: "Next js, Javascript",
    imageSrc: "/eqam.jpg",
  },
  {
    title: "Dollar Markets",
    description: "Next js, Typescript, Styled-Components",
    imageSrc: "/dollarmarkets.png",
  },
  {
    title: "Better Call Paul",
    description: "Next js, Typescript, Styled-Components, Node js",
    imageSrc: "/bcp.png",
  },
  {
    title: "Parallel88",
    description: "Next js, Javascript",
    imageSrc: "/p88.jpg",
  },
  {
    title: "Code3camp",
    description: "Next js, Typescript, Styled-Components, Material UI",
    imageSrc: "/code3camp.jpg",
  },
  {
    title: "P2P Processor",
    description: "Next js, Javascript, Web3.js, Nodejs",
    imageSrc: "/p2p.jpg",
  },
  {
    title: "Skyswyp",
    description: "Next js, Javascript, Styled-Components",
    imageSrc: "/skyswyp.jpg",
  },
  {
    title: "BrokerBox",
    description: "Next js, Typescript, Styled-Components",
    imageSrc: "/brokerbox.jpg",
  },
];

const Projects = () => {
  const [, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      checkScroll();
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      }
    };
  }, []);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
      setShowLeftArrow(scrollLeft > 0);
    }
  };

  const handleScroll = (direction: string) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsInnerContainer>
        <ProjectsHeader>
          <span className="arrow left">&#10092;</span> 
          PROJECTS 
          <span className="arrow right">&#10093;</span>
        </ProjectsHeader>
        <ProjectsSubheader>
          A showcase of my latest web development work
        </ProjectsSubheader>
        
        <ProjectsCarousel ref={carouselRef}>
          {projectCases.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImageContainer>
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={383}
                  height={191}
                  layout="responsive"
                />
              </ProjectImageContainer>
              <ProjectCardBody>
                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                <ProjectCardText>{project.description}</ProjectCardText>
                {projectUrls[index] && (
                  <ProjectCardLink 
                    href={projectUrls[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Site &#x2192;
                  </ProjectCardLink>
                )}
              </ProjectCardBody>
            </ProjectCard>
          ))}
        </ProjectsCarousel>
        
        {showLeftArrow && (
          <ProjectsArrow 
            className="left-arrow" 
            direction="left"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          />
        )}
          <ProjectsArrow 
            className="right-arrow" 
            direction="right"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          />
      
      </ProjectsInnerContainer>
    </ProjectsContainer>
  );
};

export default Projects;

Projects.getLayout = function getLayout(page: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined) {
  return <HomeLayout>{page}</HomeLayout>;
};