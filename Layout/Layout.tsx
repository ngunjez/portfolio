// components/Layout/HomeLayout.tsx
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import { FadeTransition } from '@/components/FadeTransition';
import styled from 'styled-components';
import Loader from '@/components/Loader/loader';

const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

const LoaderWrapper = styled.div<{ $isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  opacity: ${({ $isLoading }) => ($isLoading ? 1 : 0)};
  visibility: ${({ $isLoading }) => ($isLoading ? 'visible' : 'hidden')};
  transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;
  z-index: 1000;
`;

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LayoutWrapper>
      <LoaderWrapper $isLoading={isLoading}>
        <Loader />
      </LoaderWrapper>
      <Navbar />
      {!isLoading && (
        <FadeTransition>
          {children}
        </FadeTransition>
      )}
    </LayoutWrapper>
  );
}