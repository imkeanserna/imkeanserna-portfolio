"use client";

import { Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AnimationVariants {
  containerVariants: Variants;
  sectionVariants: Variants;
}

export function useSequentialAnimation(
  delay: number = 50,
  staggerDelay: number = 0.15,
  duration: number = 0.4,
  blurAmount: number = 8
): [boolean, AnimationVariants] {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const animationVariants: AnimationVariants = {
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    },
    sectionVariants: {
      hidden: {
        opacity: 0,
        y: 15,
        filter: `blur(${blurAmount}px)`,
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: duration,
          ease: "easeOut"
        }
      },
    }
  };

  return [isLoaded, animationVariants];
}
