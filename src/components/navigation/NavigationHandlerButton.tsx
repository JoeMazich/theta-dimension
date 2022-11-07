import React, { useEffect, useRef, useState } from "react";
import NavigationScreen from "../../screens/NavigationScreen";
import "./navigationStyles.scss";

interface NavigationHandlerButtonProps {
  className?: string;
}

const NavigationHandlerButton = ({ className }: NavigationHandlerButtonProps) => {
  const navElement = useRef<HTMLElement>(null);
  const [navOpen, SetNavOpen] = useState(false);

  const handleOnClick = () => {
    SetNavOpen(!navOpen);
  };

  useEffect(() => {
    navElement.current!.dataset.navOpen = String(navOpen);
  }, [navOpen]);

  return (
    <nav ref={navElement} onClick={handleOnClick} className={className}>
      {navOpen && <NavigationScreen />}
    </nav>
  );
};

export default NavigationHandlerButton;
