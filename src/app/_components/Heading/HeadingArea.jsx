import React from "react";
import Link from "next/link";

const HeadingArea = ({
  heading,
  link,
  headingExClass,
  linkExClass,
  prExClass,
  linkLabel,
  icon,
}) => {
  return (
    <div
      className={`flex items-center justify-between  border-b-2 border-blue-300 pb-4 mb-6 ${
        prExClass && prExClass
      }`}
    >
      <h5
        className={`text-base md:text-lg lg:text-2xl font-bold text-secondary ${
          headingExClass && headingExClass
        }`}
      >
        {heading}
      </h5>
      <Link
        className={`text-sm md:text-base lg:text-md font-semibold text-primary flex items-center gap-2 ${
          linkExClass && linkExClass
        }`}
        href={link && link}
      >
        {linkLabel && linkLabel}{" "}
        {icon === true ? (
          <svg
            width="8"
            height="15"
            viewBox="0 0 13 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 18.6667L11 10.3334L1 2.00008"
              stroke="url(#paint0_linear_185_8301)"
              stroke-width="3"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_185_8301"
                x1="11"
                y1="10.3334"
                x2="1"
                y2="10.3334"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#004680" />
                <stop offset="1" stop-color="#4484BA" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <></>
        )}
      </Link>
    </div>
  );
};

export default HeadingArea;
