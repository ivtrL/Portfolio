import AnimatedText from "@/src/components/AnimatedText";
import Layout from "@/src/components/Layout";
import ParticlesButton from "@/src/components/Particles/ParticlesButton";
import React from "react";

const ArticlesPage = () => {
  return (
    <main>
      <Layout className="flex flex-col items-center justify-center">
        <AnimatedText text="Incoming Soon!" className="mb-32" />
        <h2 className="font-bold text-4xl mb-4">Sorry! 😥</h2>
        <p className="font-medium text-2xl w-3/4">
          I still did not make any articles yet. As soon as I make one and post
          it, will be displayed in this page!😉
          <br />
          While it does not have anything I will be using this page to display
          my creativity and some of my knowledge of JS libraries.
        </p>
        <ParticlesButton />
      </Layout>
    </main>
  );
};

export default ArticlesPage;
