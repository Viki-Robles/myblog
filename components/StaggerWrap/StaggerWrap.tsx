import React, { useContext } from 'react';
import { IntersectionContext } from '../StaggerWrap/intersectionObserver';
import { MotionBox } from '../MotionBox/MotionBox';

export const StaggerContext = React.createContext({
  stagger: false,
  ease: false,
});

export const StaggerWrap = ({ children, childrenDelay, delayOrder, ease }) => {
  const { inView } = useContext(IntersectionContext);

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delay: delayOrder ? delayOrder : 0,
        staggerChildren: childrenDelay ? childrenDelay : 0.1,
      },
    },
  };

  return (
    <StaggerContext.Provider value={{ stagger: true, ease: true }}>
      <MotionBox initial="hidden" animate={inView ? 'show' : 'hidden'} exit="hidden" variants={variants}>
        {children}
      </MotionBox>
    </StaggerContext.Provider>
  );
};
