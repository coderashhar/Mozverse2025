import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Timeline({ events }) {
  return (
    <div className="flex flex-col gap-y-1 w-full pb-20 mt-10 pt-20 items-center ">
      <h2 className="text-4xl mb-2 text-white">About the Events</h2>
      <Circle />
      {events.map((event, key) => (
        <Fragment key={key}>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center justify-center mx-auto">
            {event.direction === "left" ? (
              <EventCard {...event} />
            ) : (
              <div></div>
            )}

            <Pillar />

            {event.direction === "right" ? (
              <EventCard {...event} />
            ) : (
              <div></div>
            )}
          </div>
          {key < events.length - 1 && <Circle />}
        </Fragment>
      ))}
      <Circle />
    </div>
  );
}

const Circle = () => {
  return (
    <div className="rounded-full w-4 h-4 bg-gradient-to-r from-red-400 via-red-600 to-red-800 mx-auto"></div>
  );
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full h-72 w-2 bg-gradient-to-b from-red-500 to-red-600 mx-auto"></div>
  );
};

const EventCard = ({
  heading = "Unknown Event",
  subHeading = "Details coming soon...",
  date = "TBD",
  superhero,
  direction = "left",
  scale = 1,
  position = 100,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <div className="relative" ref={ref}>
      {/* Superhero Image */}
      {superhero && isInView && (
        <motion.img
        src={superhero}
        alt={`${heading} Superhero`}
        className={`absolute ${
          direction === "left" ? "left-0" : "right-0"
        } delay-10 top-1/2 transform -translate-y-1/2 w-40 object-contain hidden sm:block z-30`}
        style={{
          [direction === "left" ? "left" : "right"]: `-${position}px`,
        }}
        initial={{ opacity: 0, x: direction === "left" ? -200 : 200, scale: 0.7 }}
        animate={{ opacity: 1, x: 0, scale }}
        exit={{ opacity: 0, x: direction === "left" ? -200 : 200 }}
        transition={{ duration: 1.5 }}
      />
      )}

      {/* Event Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className='transition duration-300 transform hover:-translate-y-2 hover:shadow-md flex flex-col gap-y-2 border shadow-sm shadow-red-600 rounded-xl p-4 bg-red-100 w-100 sm:w-80 md:w-96'
      >
        <div className="text-red-600 font-bold text-lg border-b">{heading}</div>
        <div className="text-sm text-black my-0">{date}</div>
        <div className="text-sm text-neutral-600">{subHeading}</div>
      </motion.div>
    </div>
  );
};