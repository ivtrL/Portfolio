"use client";

import { useContext } from "react";
import { ParticlesContext } from "./ParticlesProvider";
import { Button } from "../Button";

const ParticlesButton = () => {
  const { ToggleParticles } = useContext(ParticlesContext);

  return <Button onClick={ToggleParticles}>Try it out!</Button>;
};

export default ParticlesButton;
