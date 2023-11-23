import { useEffect, useRef, useState, MouseEvent } from "react";

const useOutsideClick = (toggleMobileMenu: () => void) => {
  const [isClient, setIsClient] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalContainerRef.current &&
        !modalContainerRef.current.contains(event.target as Node)
      ) {
        toggleMobileMenu();
      }
    };

    if (isClient) {
      document.addEventListener("mousedown", handleOutsideClick as unknown as EventListener);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick as unknown as EventListener);
      };
    }
  }, [isClient, toggleMobileMenu]);

  return modalContainerRef;
};

export default useOutsideClick;
