// LandingPage.tsx
import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
  ActionButton,
  ParticleCanvas,
  ImageContainer,
  ProfileImage // Ensure ProfileImage is imported if it's a styled component
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

// Smooth scroll function to navigate to about section
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
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
      `}</style>
      <ParticleCanvas ref={canvasRef} />
      
      <HeroSection>
        <ContentWrapper>
          <InfoSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProfileTitle
                style={{
                  background: 'linear-gradient(90deg, rgb(255, 255, 255), rgb(30, 169, 164), rgb(255, 255, 255)) 0% 0% / 200%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  animation: 'gradientShift 4s ease infinite'
                }}
              >
                SOFTWARE ENGINEER
              </ProfileTitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ProfileDescription>
                I am an experienced frontend engineer with a strong grasp of both <HighlightedText>web2</HighlightedText>, <HighlightedText>web3</HighlightedText> and <HighlightedText>AI</HighlightedText> technologies, 
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
      
      {/* Enhanced Scroll Indicator with Click Handler */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.8 }}
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10
        }}
        onClick={scrollToAbout}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#1ea9a4',
            filter: 'drop-shadow(0 2px 8px rgba(30, 169, 164, 0.3))'
          }}
        >
          {/* Animated Down Arrow */}
          <motion.svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: '10px' }}
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </motion.svg>
          
          {/* Scroll Text - More Visible */}
          <motion.span
            style={{
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#1ea9a4',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
              opacity: 1
            }}
          >
            Scroll Down
          </motion.span>
        </motion.div>
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