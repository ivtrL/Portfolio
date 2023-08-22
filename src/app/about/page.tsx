"use client";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "@/../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if (ref.current && latestValue.toFixed(0) <= value) {
        ref.current.textContent = latestValue.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AboutPage = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase">About Me!</h2>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              cupiditate autem consequatur fuga similique perspiciatis vero,
              laborum officiis minima obcaecati sit nobis voluptatum ex sapiente
              rem eligendi enim quidem velit.
            </p>
            <p className="my-4 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vero
              iste, quibusdam odit, dolorem labore dolorum optio accusamus
              officia iure error consequatur quaerat quos porro culpa ipsam quam
              quisquam tempora.
            </p>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              vel possimus saepe aliquam temporibus nobis expedita odio,
              delectus unde ullam minus neque, molestias maiores aspernatur
              laborum? Praesentium maxime quia illo!
            </p>
          </div>

          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            <Image
              src={profilePic}
              alt=""
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumber value={100} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                commits on github
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumber value={10} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                repositories
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumber value={2} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                years working on projects
              </h2>
            </div>
          </div>
        </div>

        <Skills />
        <Education />
      </Layout>
    </main>
  );
};

export default AboutPage;
