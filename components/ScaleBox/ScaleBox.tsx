import React, { useMemo, useContext } from 'react';
import { IntersectionContext } from '../StaggerWrap/intersectionObserver';
import { MotionBox } from '../MotionBox/MotionBox';

export const ScaleBox = ({ children, delayOrder, duration = 0.4, easing = [0.42, 0, 0.58, 1] }) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      ease: easing,
    }),
    [duration, delayOrder, easing],
  );

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: transition,
    },
  };

  return (
    <MotionBox initial="hidden" animate={inView ? 'show' : 'hidden'} exit="hidden" variants={variants}>
      {children}
    </MotionBox>
  );
};
