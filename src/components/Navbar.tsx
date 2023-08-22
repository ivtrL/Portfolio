"use client";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { motion } from "framer-motion";

interface ICustomLink extends LinkProps {
  title?: string;
  className?: string;
}

const CustomLink = (props: ICustomLink) => {
  const router = usePathname();

  const { href, title, className, ...restProps } = props;

  return (
    <Link href={href} {...restProps} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" className="mr-4" title="Home" />
        <CustomLink href="/about" className="mx-4" title="About" />
        <CustomLink href="/projects" className="mx-4" title="Projects" />
        <CustomLink href="/articles" className="ml-4" title="Articles" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/#"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon className="w-full h-auto" />
        </motion.a>
        <motion.a
          href="/#"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GitHubIcon className="w-full h-auto" />
        </motion.a>
        <motion.a
          href="/#"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon className="w-full h-auto" />
        </motion.a>
        <motion.a
          href="/#"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <InstagramIcon className="w-full h-auto" />
        </motion.a>
      </nav>

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
