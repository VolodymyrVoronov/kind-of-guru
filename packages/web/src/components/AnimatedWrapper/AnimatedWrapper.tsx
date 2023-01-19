import { ReactNode } from "react";
import { AnimationProps, motion } from "framer-motion";

interface IAnimatedWrapperProps {
  animation?: AnimationProps;
  className?: string;
  children: ReactNode;
}

const defaultAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.5,
  },
};

const AnimatedWrapper = ({
  animation = defaultAnimation,
  children,
  className,
}: IAnimatedWrapperProps): JSX.Element => {
  return (
    <motion.div className={className} {...animation}>
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
