// LandingPage.tsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HomeLayout from "@/Layout/Layout";
import {
  LandingContainer,
  HeroSection,
  ContentWrapper,
  InfoSection,
  ProfileTitle,
  ProfileDescription,
  HighlightedText,
  ParticleCanvas,
} from "@/styles/LandingPage";

const LandingPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 20));

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = "#1ea9a4";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    init();

    // Connect particles with lines
    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            opacityValue = 1 - distance / 100;
            if (ctx) {
              ctx.strokeStyle = `rgba(30, 169, 164, ${opacityValue})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connect();
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <LandingContainer id="home">
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          color: #1ea9a4;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .scroll-indicator:hover {
          color: #ffffff;
          transform: translateX(-50%) scale(1.1);
        }

        .scroll-text {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
          letter-spacing: 1px;
          animation: fadeInOut 2s ease-in-out infinite;
        }

        .scroll-arrow {
          width: 24px;
          height: 24px;
          border: 2px solid currentColor;
          border-top: none;
          border-left: none;
          transform: rotate(45deg);
          animation: bounce 2s infinite;
        }

        .scroll-line {
          width: 2px;
          height: 30px;
          background: linear-gradient(to bottom, transparent, currentColor);
          margin-bottom: 10px;
          animation: fadeInOut 2s ease-in-out infinite 0.5s;
        }

        @media (max-width: 768px) {
          .scroll-indicator {
            bottom: 30px;
          }
          
          .scroll-text {
            font-size: 12px;
          }
          
          .scroll-arrow {
            width: 20px;
            height: 20px;
          }
          
          .scroll-line {
            height: 25px;
          }
        }
      `}</style>
      <ParticleCanvas ref={canvasRef} />

      <HeroSection>
        <ContentWrapper>
          <InfoSection
            style={{
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProfileTitle
                style={{
                  background:
                    "linear-gradient(90deg, rgb(255, 255, 255), rgb(30, 169, 164), rgb(255, 255, 255)) 0% 0% / 200%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  animation: "gradientShift 4s ease infinite",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                SOFTWARE ENGINEER
              </ProfileTitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginBottom: "30px" }}
            >
              <ProfileDescription>
                I am an experienced frontend engineer with a strong grasp of
                both <HighlightedText>web2</HighlightedText>,{" "}
                <HighlightedText>web3</HighlightedText> and{" "}
                <HighlightedText>AI</HighlightedText> technologies, adept at
                crafting intuitive user interfaces for both conventional and
                decentralized web applications.
              </ProfileDescription>
            </motion.div>
          </InfoSection>
        </ContentWrapper>

        {/* Scroll Down Indicator */}
        <motion.div
          className="scroll-indicator"
          onClick={scrollToProjects}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="scroll-text"
            style={{
              fontSize:
                "clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.6944)), 1.5rem)",
display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 500,
              marginBottom: "8px",
              letterSpacing: "1px",
              animation: "fadeInOut 2s ease-in-out infinite",
            }}
          >
            SCROLL DOWN
          </div>
          <div className="scroll-line"></div>
          <div className="scroll-arrow"></div>
        </motion.div>
      </HeroSection>
    </LandingContainer>
  );
};

export default LandingPage;

LandingPage.getLayout = function getLayout(page: React.ReactNode) {
  return <HomeLayout>{page}</HomeLayout>;
};
