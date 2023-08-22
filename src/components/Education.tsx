"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

interface IDetails extends React.HTMLAttributes<HTMLLIElement> {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details = (props: IDetails) => {
  const { type, time, place, info, className, ...restProps } = props;
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-center justify-between"
      {...restProps}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-3/4 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            info="Relevant courses like Statistics, Programming Fundamentals, Arduino, Artificial Intelligence, IoT and some team management classes."
            place="Tiradentes University/AFYA (UNIT)"
            time="2021-current"
            type="Bacharel Of Mechatronics Engineering"
          />
          <Details
            info="Completing coursework in frontend topics such as learning Angular and Vue for making big projects with high scalability, security and reliability."
            place="EdX"
            time="current"
            type="Online Coursework"
          />
          <Details
            info="Completing coursework in backend topics such as using Golang to make APIs for Web Services as well as Ruby on Rails. Also, I'm learning about databases, SQL, some Data Science and getting a deeper understanding of Node.Js and Express."
            place="Alura"
            time="current"
            type="Online Coursework"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
