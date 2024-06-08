/* eslint-disable no-unused-vars */

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of learning Experiences",
  },
  {
    num: 3,
    text: "Projects Completed",
  },
  {
    num: 9,
    text: "Technologies learned",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 ">
      <div className="w-11/12 mx-auto  mt-8">
        <div className=" flex flex-wrap  gap-6 max-w-[80vw] mx-auto lg:max-w-none  ">
          {stats.map((item, index) => {
            return (
              <div
                className="
                flex-1 flex  gap-4 items-center justify-center lg:justify-start 
                "
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl lg:text-6xl font-extrabold"
                ></CountUp> 
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
