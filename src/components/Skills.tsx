import React from "react";
import { motion } from "framer-motion";

interface ISkill {
  name: string;
  x: string;
  y: string;
}

const Skill = (props: ISkill) => {
  const { name, x, y } = props;

  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          Dev
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-5vw" />
        <Skill name="Javascript" x="19vw" y="4vw" />
        <Skill name="React" x="0vw" y="9vw" />
        <Skill name="NextJS" x="0vw" y="-9vw" />
        <Skill name="Java" x="15vw" y="-12vw" />
        <Skill name="Python" x="-15vw" y="12vw" />
        <Skill name="MySQL" x="0vw" y="-18vw" />
        <Skill name="C++" x="-15vw" y="-12vw" />
        <Skill name="Tailwind CSS" x="10vw" y="0vw" />
        <Skill name="Firebase" x="9vw" y="17vw" />
      </div>
    </>
  );
};

export default Skills;
