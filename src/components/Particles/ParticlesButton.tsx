"use client";

import { useContext, useMemo, useState, useEffect } from "react";
import { ParticlesContext } from "./ParticlesProvider";
import { Button } from "../Button";
import { useTheme } from "next-themes";

const ParticlesButton = () => {
  const { theme, setTheme } = useTheme();
  const { particlesOn, ToggleParticles } = useContext(ParticlesContext);
  const [lastTheme, setLastTheme] = useState<typeof theme>();

  useEffect(() => {
    setLastTheme(theme);
  }, [theme]);

  console.log(lastTheme);

  return (
    <Button
      onClick={() => {
        if (lastTheme === "dark" && particlesOn) {
          setTheme("dark");
        } else if (lastTheme === "light" && particlesOn) {
          setTheme("light");
        } else if (lastTheme === "system" && particlesOn) {
          setTheme("system");
        } else if (!particlesOn) {
          setTheme("dark");
        }
        if (typeof ToggleParticles === "function") ToggleParticles();
      }}
    >
      Try it out!
    </Button>
  );
};

export default ParticlesButton;
