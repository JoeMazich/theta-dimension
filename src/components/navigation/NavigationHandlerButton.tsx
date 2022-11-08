import React, { useEffect, useRef, useState } from "react";
import NavigationScreen from "../../screens/NavigationScreen";
import "./navigationStyles.scss";

import timings from "../../constants/variables.scss";

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

    setTimeout(() => {
      navElement.current!.dataset.navOpenScreen = String(navOpen);
    }, timings.navTransitionTime.replace("ms", ""));
  }, [navOpen]);

  return (
    <nav ref={navElement} onClick={handleOnClick} className={className}>
      <NavigationScreen />
    </nav>
  );
};

export default NavigationHandlerButton;
