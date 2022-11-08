import "./navigationStyles.scss";

import React, { useEffect, useRef, useState } from "react";

import NavigationScreen from "../../screens/NavigationScreen";
import timings from "../../constants/variables.scss";

interface NavigationHandlerButtonProps {
  className?: string;
}

const NavigationHandlerButton = ({ className }: NavigationHandlerButtonProps) => {
  const navElement = useRef<HTMLElement>(null);
  const [navOpen, SetNavOpen] = useState(false);

  const handleOnClick = () => {
    SetNavOpen(true);
  };

  useEffect(() => {
    if (!navOpen) {
      setTimeout(() => {
        navElement.current!.dataset.navOpen = String(navOpen);
      }, timings.navTransitionTime.replace("ms", ""));

      navElement.current!.dataset.navOpenScreen = String(navOpen);
    } else {
      navElement.current!.dataset.navOpen = String(navOpen);

      setTimeout(() => {
        navElement.current!.dataset.navOpenScreen = String(navOpen);
      }, timings.navTransitionTime.replace("ms", ""));
    }
  }, [navOpen]);

  return (
    <nav ref={navElement} onClick={handleOnClick} className={className}>
      <NavigationScreen />
    </nav>
  );
};

export default NavigationHandlerButton;
