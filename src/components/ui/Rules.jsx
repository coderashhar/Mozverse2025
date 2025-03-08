"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
"use client";
import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";

export const Rules = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };
  return (
    (<div className="py-14">
    <Header />
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 ms-15 max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 my-20 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-neutral-700 px-8 pb-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--neutral-800), var(--neutral-900)",
            }}
            key={item.title}>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-lg leading-[1.6] pb-2 text-gray-400 font-normal ">
                    {item.title}
                  </span>
                </span>
              </div>
              <span
                className=" relative z-20 leading-[1.6] text-gray-100 font-normal">
                <div className="space-y-2">
                    {item.details.map((detail, i) => (
                        <p key={i} className="text-sm">
                        {detail}
                        </p>
                    ))}
                </div>
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
    </div>)
  );
};



export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative mx-auto pt-10  md:pb-0 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-6xl font-bold dark:text-white">
        Event Highlights: THE MARVEL EDITION
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        In this challenge, you’ll need to tap into your superpower of coding and problem-solving to
        crack puzzles that will test your Marvel knowledge and your technical prowess. Think of it as
        assembling the Avengers — but with logic, code, and creativity as your weapons!
      </p>
    </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0">
        <img
          src={product.superhero}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>)
  );
};
