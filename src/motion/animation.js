// stagger container :animates child elements sequentially with a delay between each.
export const taggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    filter: "blur(8px",
  },
  show: {
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeout",
    },
  },
};

export const fadeInUp = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(8px",
  },
  show: {
    y:30,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeout",
    },
  },
};
