import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface FadeTransitionProps {
  children: React.ReactNode;
  duration?: number;
}

const FadeWrapper = styled.div<{ $isVisible: boolean; $duration: number }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity ${({ $duration }) => $duration}ms ease-in-out;
`;

export const FadeTransition: React.FC<FadeTransitionProps> = ({ 
  children, 
  duration = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FadeWrapper $isVisible={isVisible} $duration={duration}>
      {children}
    </FadeWrapper>
  );
};