// LandingPage.tsx
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import HomeLayout from "@/Layout/Layout";
import {
  LandingContainer,
  HeroSection,
  ContentWrapper,
  InfoSection,
  ProfileTitle,
  ProfileDescription,
  HighlightedText,
  ProfileImage,
  ActionButton,
  ParticleCanvas,
  ScrollIndicator,
  ImageContainer
} from "@/styles/LandingPage";

const downloadCV = () => {
  const cvFileName = 'Rcv3.pdf';
  const cvFileUrl = '/' + cvFileName;
  
  console.log('CV File URL:', cvFileUrl);
  
  const link = document.createElement('a');
  link.href = cvFileUrl;
  link.download = cvFileName;
  link.click();
};

const LandingPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
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
        this.color = '#1ea9a4';
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
            opacityValue = 1 - (distance / 100);
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
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connect();
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <LandingContainer id="home">
      <ParticleCanvas ref={canvasRef} />
      
      <HeroSection>
        <ContentWrapper>
          <InfoSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProfileTitle>
                <TypeAnimation
                  sequence={[
                    'FRONTEND ENGINEER',
                    3000,
                    'WEB DEVELOPER',
                    3000,
                    'UI/UX ENTHUSIAST',
                    3000,
                    'WEB3 SPECIALIST',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </ProfileTitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ProfileDescription>
                I am an experienced frontend engineer with a strong grasp of both <HighlightedText>web2</HighlightedText><HighlightedText>,web3</HighlightedText> and<HighlightedText> AI</HighlightedText> technologies, 
                adept at crafting intuitive user interfaces for both conventional and decentralized web applications.
              </ProfileDescription>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ActionButton 
                onClick={downloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="download-icon">↓</span> Download Resume
              </ActionButton>
            </motion.div>
          </InfoSection>

          <ImageContainer>
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 5 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                rotate: -5, 
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)"
              }}
            >
              <ProfileImage>
                <Image
                  src="/fav2.jpg"
                  alt="profile picture"
                  width={300}
                  height={350}
                  priority
                  quality={90}
                />
              </ProfileImage>
            </motion.div>
          </ImageContainer>
        </ContentWrapper>
      </HeroSection>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <ScrollIndicator />
      </motion.div>
    </LandingContainer>
  );
};

export default LandingPage;

LandingPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <HomeLayout>
      {page}
    </HomeLayout>
  );
};