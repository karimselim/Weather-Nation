export const showing = {
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.35,
    },
  },
};

export const logoVariant = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const cityShowing = {
  hidden: { opacity: 0, x: "110vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.35,
    },
  },
};
