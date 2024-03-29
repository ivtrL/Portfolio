"use client";

import AnimatedText from "@/src/components/AnimatedText";
import GitHubIcon from "@mui/icons-material/GitHub";
import Layout from "@/src/components/Layout";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "@/public/images/projects/project-1.png";
import { Button } from "@/src/components/Button";

interface IFeaturedProject {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FeaturedProject = (props: IFeaturedProject) => {
  const { type, title, summary, img, link, github } = props;
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-slate-950 shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-full h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light/90">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GitHubIcon className="w-full scale-150" />
          </Link>
          <Button className="ml-4">
            <Link
              href={link}
              target="_blank"
              className="p-2 px-6 text-lg font-semibold"
            >
              Visit Project
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

interface IProject {
  title: string;
  type: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const Project = (props: IProject) => {
  const { title, type, img, link, github } = props;

  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-slate-950 p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <GitHubIcon className="w-full scale-150" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="E-Commerce Shop Template"
                img={project1}
                summary="A E-Commerce Shop template using React, Tailwind CSS, Next.JS, Material UI and some more dependencies. It is projected to be a complete shop with integrated buying cart and much more. Also using scalable and adaptable components which can be used in other projects."
                link="https://styledshopproject.vercel.app/"
                type="Featured Project"
                github="https://github.com/ivtrL/styledshopproject"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="E-Commerce Shop Template"
                img={project1}
                link="https://styledshopproject.vercel.app/"
                type="Featured Project"
                github="https://github.com/ivtrL/styledshopproject"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="E-Commerce Shop Template"
                img={project1}
                link="https://styledshopproject.vercel.app/"
                type="Featured Project"
                github="https://github.com/ivtrL/styledshopproject"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="E-Commerce Shop Template"
                img={project1}
                summary="A E-Commerce Shop template using React, Tailwind CSS, Next.JS, Material UI and some more dependencies. It is projected to be a complete shop with integrated buying cart and much more. Also using scalable and adaptable components which can be used in other projects."
                link="https://styledshopproject.vercel.app/"
                type="Featured Project"
                github="https://github.com/ivtrL/styledshopproject"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="E-Commerce Shop Template"
                img={project1}
                link="https://styledshopproject.vercel.app/"
                type="Featured Project"
                github="https://github.com/ivtrL/styledshopproject"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="E-Commerce Shop Template"
                img={project1}
                link="https://styledshopproject.vercel.app/"
                type="Featured Project"
                github="https://github.com/ivtrL/styledshopproject"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
