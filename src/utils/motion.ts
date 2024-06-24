export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  let x = 0,
    y = 0;

  if (direction === 'left') {
    x = 100;
  } else if (direction === 'right') {
    x = -100;
  } else if (direction === 'up') {
    y = 100;
  } else if (direction === 'down') {
    y = -100;
  }

  return {
    hidden: {
      x: x,
      y: y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  };
};

export const slideIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: string,
  delay: number,
  duration: number
) => {
  let x = '0%',
    y = '0%';

  if (direction === 'left') {
    x = '-100%';
  } else if (direction === 'right') {
    x = '100%';
  } else if (direction === 'up') {
    y = '100%';
  } else if (direction === 'down') {
    y = '100%';
  }

  return {
    hidden: {
      x: x,
      y: y,
    },
    show: {
      x: '0%',
      y: '0%',
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween' as const,
        delay: delay,
        duration: duration,
        ease: 'easeOut' as const,
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren ?? 0,
      },
    },
  };
};
