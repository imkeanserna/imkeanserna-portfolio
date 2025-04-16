import { useState, useRef, useEffect } from 'react';

interface HoverStyles {
  [key: string]: {
    width: string;
  };
}

export const useBlogTitleHover = (dependencies: number[] = []) => {
  const titleRefs = useRef<{
    [key: string]: HTMLSpanElement | null;
  }>({});

  const [hoverBgStyles, setHoverBgStyles] = useState<HoverStyles>({});

  useEffect(() => {
    const updateWidths = () => {
      const newStyles: HoverStyles = {};

      Object.keys(titleRefs.current).forEach(id => {
        if (titleRefs.current[id]) {
          const width = titleRefs.current[id]?.offsetWidth || 0;
          newStyles[id] = { width: `${width}px` };
        }
      });

      setHoverBgStyles(newStyles);
    };

    updateWidths();

    const resizeObserver = new ResizeObserver(updateWidths);

    Object.keys(titleRefs.current).forEach(id => {
      if (titleRefs.current[id]) {
        resizeObserver.observe(titleRefs.current[id]!);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, dependencies);

  return { titleRefs, hoverBgStyles };
};
