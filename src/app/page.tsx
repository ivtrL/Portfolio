import IosShareIcon from "@mui/icons-material/IosShare";
import Image from "next/image";
import Link from "next/link";

import AnimatedText from "@/src/components/AnimatedText";
import Layout from "@/src/components/Layout";
import HireMe from "@/src/components/HireMe";
import lightBulb from "@/public/images/lightbulb.svg";

export default function Home() {
  return (
    <main className="flex items-center dark:text-light text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src="/images/profile/developer-pic-1.png"
              width={580}
              height={580}
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume <IosShareIcon className="w-6 ml-1" />
              </Link>
              <Link
                href="/mailto:isaacvitorinola@gmail.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBulb} alt="Isaac Vitorino" className="w-full h-auto" />
      </div>
    </main>
  );
}
