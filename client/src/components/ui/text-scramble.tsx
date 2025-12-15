import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TextScrambleProps = {
  text: string;
  className?: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
};

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const TextScramble = ({
  text,
  className,
  duration = 0.8,
  speed = 0.05,
  characterSet = defaultChars,
  as: Component = "span",
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(text);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let iteration = 0;
      const totalIterations = text.length;
      
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return characterSet[Math.floor(Math.random() * characterSet.length)];
            })
            .join("")
        );

        if (iteration >= totalIterations) {
          clearInterval(interval);
        }

        iteration += 1 / (duration * 10); 
      }, speed * 1000);

      return () => clearInterval(interval);
    }
  }, [isInView, text, duration, speed, characterSet]);

  return (
    <Component ref={ref} className={className}>
      {displayText}
    </Component>
  );
};
