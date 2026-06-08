import React from "react";
import { heroLogos } from "../constant/data";
import { RiPlayFill } from "react-icons/ri";
import MarqueeModule from "react-fast-marquee";

// import motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Hero = () => {
  const Marquee = MarqueeModule.default || MarqueeModule;
  return (
    <section>
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* content */}
        <div className="mt-[50px] md:mt-20 text-center">
          {/* title */}
          <div className="relative max-w-max mx-auto pt-8 pl-8">
            <motion.span
              variants={variants.fadeInUp}
              className="absolute top-0 left-0"
            >
              <img
                src="/images/shape-1.png"
                alt="title shape"
                width={39}
                height={43}
              />
            </motion.span>

            <motion.div className="flex items-center bg-white-90 border border-white-95 rounded-lg p-3.5 justify-center gap-2.5 max-w-max mx-auto flex-wrap text-center">
              <span>
                <img
                  src="/images/shape-2.png"
                  alt="title shape"
                  width={48}
                  height={48}
                />
              </span>
              <h1 className="text-2xl md:text-4xl">
                <span className="text-orange-50">Unlock</span> Your Creative
                potential
              </h1>
            </motion.div>
          </div>

          <motion.p className="text-2xl font-medium mt-4 md:text-[28px]">
            with Online Design and Development Courses.
          </motion.p>
          <motion.p variants={variants.fadeInUp}>Learn from Industry Experts and Enhance Your Skills.</motion.p>

          {/* btn wrapper */}
          <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
            <motion.button variants={variants.fadeInUp} className="primary-btn max-sm:w-[80%]">
              Explore Courses
            </motion.button>
            <motion.button variants={variants.fadeInUp} className="secondary-btn max-sm:w-[80%]">
              {" "}
              View Pricing
            </motion.button>
          </div>

          {/* Clients logo  */}

          <motion.div variants={variants.fadeInUp} className="mt-8 lg:mt-[100px] relative overflow-hidden">
            <Marquee speed={40} pauseOnHover gradient={false}>
              {heroLogos.map((logo) => (
                //logo
                <div className="px-14 py-5" key={logo.id}>
                  <img
                    src={logo.img}
                    alt="logo"
                    width={logo.width}
                    height={28}
                  />
                </div>
              ))}
            </Marquee>

            {/* left gradient  */}
            <div className="absolute top-0 left-0  bg-gradient-to-r  from-white-97 via-white-97/80 to-transparent-24 h-full z-10 pointer-events-none" />

            {/* Right gradient */}
            <div className="absolute top-0 right-0  bg-gradient-to-l  from-white-97 via-white-97/80 to-transparent-24 h-full z-10 pointer-events-none" />
          </motion.div>
        </div>

        {/* banner */}
        <motion.figure variants={variants.fadeInUp} className="relative rounded-xl overflow-hidden mt-10 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto">
          <img
            src="/images/hero-banner.png"
            alt="hero-banner"
            width={940}
            height={500}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay  */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* play btn  */}
          <div className="absolute top-1/2 left-1/2 z-20 -transalte-x-1/2 transalte-y-1/2 cursor-pointer">
            <span className="flex bg-white w-16 h-16 items-center justify-center rounded-full play-btn">
              <RiPlayFill size={30} />
            </span>
          </div>
        </motion.figure>
      </motion.div>
    </section>
  );
};

export default Hero;
