import { useState, useEffect } from 'react';
import blob from '/heroVector.svg';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const superheroes = [
  { src: '/superheroes/ironman.png', alt: 'Ironman' }, 
  { src: '/superheroes/captainamerica.png', alt: 'Captain America' }, 
  { src: '/superheroes/blackwidow.png', alt: 'Black Widow' },
  { src: '/superheroes/captainmarvel.png', alt: 'Captain Marvel' },
  { src: '/superheroes/thor.png', alt: 'Thor' },
  { src: '/superheroes/hulk.png', alt: 'Hulk' },
  { src: '/superheroes/deadpool.png', alt: 'Deadpool' },
  { src: '/superheroes/scarletwitch.png', alt: 'Scarlet Witch' },
  { src: '/superheroes/spiderman.png', alt: 'Spiderman' },
];

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % superheroes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getCarouselStyles = (index) => {
    const totalHeroes = superheroes.length;
    const offset = (index - currentHero + totalHeroes) % totalHeroes;

    if (offset === 0) {
      return {
        transform: 'translateX(0) scale(1.5)',
        zIndex: 10,
        opacity: 1,
      };
    } else if (offset === 1 || offset === totalHeroes - 1) {
      const translateX = offset === 1 ? '70%' : '-70%';
      return {
        transform: `translateX(${translateX}) scale(0.5)`,
        zIndex: 5,
        opacity: 0.5,
      };
    } else {
      return {
        transform: `translateX(${offset > 1 ? '70%' : '-70%'}) scale(0.5)`,
        zIndex: 1,
        opacity: 0,
      };
    }
  };

  return (
    <div className="grid lg:grid-cols-2 my-0 mx-auto text-left h-[calc(100vh-4rem)] relative px-5 md:px-20 lg:px-40">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start font-semibold text-white tracking-widest">
        <motion.h4
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: 'spring', duration: 2 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-left text-3xl md:text-4xl font-extralight"
        >
          The Marvel Quest <br /> 
          Embark on <span className='font-bold'>MOZVERSE</span> <br /> 
          A thrilling Marvel-inspired quest where  
        </motion.h4>
        <p className="mt-1 text-secondary font-semibold text-4xl md:text-5xl lg:text-7xl text-left">
          <Typewriter
            words={['Puzzles', 'Codes', 'Camaraderie']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </p>
        <motion.h4
          initial={{ x: -200, opacity: 0 }}
          transition={{ type: 'spring', duration: 2 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-left mt-1 text-3xl md:text-4xl font-extralight"
        >
          awaits!
        </motion.h4>
        <div className="flex flex-wrap justify-start mt-10 md:mb-5 z-10">
          <a
            id="button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6ol2nHMR6Dlj2s8RkiPss9rL1b3GlQIF1ZP0U3bZDsBkylg/viewform?usp=sf_link"
            className="bg-gradient-to-r from-red-600 to-red-700 py-3 px-4 mx-2 md:my-2 rounded-md text-lg flex items-center justify-center"
          >
            Register Now
          </a>
          <Link 
            to="upcoming-events"
            smooth={true} 
            duration={500}
            offset={-50}
            id="button"
            className="py-3 px-4 text-lg mx-2 md:my-2 rounded-md border border-neutral-600 bg-black/80">
              View Schedule
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center relative overflow-hidden p-5 md:p-10">
        <motion.img
          src={blob}
          alt="Decorative Blob"
          className="absolute w-2/3 lg:w-1/2 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="relative flex items-center justify-center md:w-full md:h-full w-1/4">
        {superheroes.map((hero, index) => (
  <motion.img
    key={index}
    src={hero.src}
    alt={hero.alt}
    className="absolute transition-all duration-500 ease-in-out w-[90%] h-auto lg:max-w-[300px] lg:max-h-[350px] object-contain"
    style={{
      ...getCarouselStyles(index),
    }}
  />
))}
        </div>
      </div>
    </div>
  );
};

export default Hero;