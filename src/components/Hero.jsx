import React from "react";
import { styles } from "../styles";
import Typewriter from "react-ts-typewriter";

const Hero = () => {
  return (
    <section className="relative w-full h-screen pb-10 mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col mt-5 justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#496af0]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              I am
              <span className="text-[#496af0] "> Aditya lingwal</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2 `}>
              A skilled Frontend developer.
              <br className="block sm:hidden" /> A tech Enthusiast and a fast
              learner to take on the challenges that gives me adrenaline shots.
            </p>
          </div>
          <div className="w-full h-auto flex justify-center text-orange-500 font-bold self-start text-5xl">
            <Typewriter 
              text={[
                "<Love to Code/>",
                "Enjoy saying hi to new tech",
                "Fast learner",
              ]}
              loop
              speed={150}
              cursor={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
