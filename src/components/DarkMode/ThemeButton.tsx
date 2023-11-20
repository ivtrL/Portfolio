"use client";

import { useContext } from "react";
import { useTheme } from "next-themes";

import { ParticlesContext } from "@/src/components/Particles/ParticlesProvider";
import { Button } from "@/src/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/DropdownMenu";
import { Icons } from "@/src/components/Icons";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const { particlesOn, DisableParticles } = useContext(ParticlesContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
            if (typeof DisableParticles === "function" && particlesOn)
              DisableParticles();
          }}
        >
          <Icons.sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");
            if (typeof DisableParticles === "function" && particlesOn)
              DisableParticles();
          }}
        >
          <Icons.moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system");
            if (typeof DisableParticles === "function" && particlesOn)
              DisableParticles();
          }}
        >
          <Icons.laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeButton;
