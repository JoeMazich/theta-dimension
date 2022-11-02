import React, { useRef } from "react";
import NavigationScreen from "../../screens/NavigationScreen";
import "./styles.scss";

interface NavigationHandlerButtonProps {
  className?: string;
}

const NavigationHandlerButton = ({ className }: NavigationHandlerButtonProps) => {
  const navElement = useRef<HTMLElement>(null);

  const handleOnClick = () => {
    navElement.current!.dataset.navOpen = "true";
  };

  return (
    <nav ref={navElement} onClick={handleOnClick} className={className}>
      <NavigationScreen />
    </nav>
  );
};

export default NavigationHandlerButton;
