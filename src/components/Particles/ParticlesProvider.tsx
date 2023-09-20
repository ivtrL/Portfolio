"use client";

import {
  useCallback,
  ContextType,
  createContext,
  useState,
  Suspense,
} from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { particles_hash } from "@/lib/utils";

interface IParticlesContext {
  particlesOn?: boolean;
  ToggleParticles?: () => void;
}

export const ParticlesContext = createContext<IParticlesContext>({});

interface IParticlesProvider extends ContextType<typeof ParticlesContext> {
  children: React.ReactNode;
}

export function ParticlesProvider(props: IParticlesProvider) {
  const [particlesOn, setParticlesOn] = useState(false);
  const { children } = props;

  function ToggleParticles() {
    setParticlesOn((prev) => (prev ? false : true));
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <ParticlesContext.Provider value={{ particlesOn, ToggleParticles }}>
      <Suspense>
        {particlesOn && (
          <Particles
            id="tsparticles"
            className="fixed -z-50"
            options={particles_hash.normal_dark2}
            init={particlesInit}
            loaded={particlesLoaded}
          />
        )}
      </Suspense>
      {children}
    </ParticlesContext.Provider>
  );
}
