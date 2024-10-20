import React from 'react';
import Link from 'next/link';

const PrimaryBtn = ({extraClass, label, icon, link}) => {
    return (
        <>
           <Link className={`bg-bgBtnPrimary hover:bg-primary hover:bg-bgBtnHover  rounded-lg text-white text-xl leading-normal transition-all ease-linear duration-300 py-2 px-4 ${extraClass} `} href={`${link}`}>{label && label} {icon && <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3.66666C5 2.87101 5.31607 2.10795 5.87868 1.54534C6.44129 0.982727 7.20435 0.666656 8 0.666656C8.79565 0.666656 9.55871 0.982727 10.1213 1.54534C10.6839 2.10795 11 2.87101 11 3.66666V4.66666H14V15.3333H2V4.66666H5V3.66666ZM5 5.99999H3.33333V14H12.6667V5.99999H11V7.99999H9.66667V5.99999H6.33333V7.99999H5V5.99999ZM9.66667 4.66666V3.66666C9.66667 3.22463 9.49107 2.80071 9.17851 2.48815C8.86595 2.17558 8.44203 1.99999 8 1.99999C7.55797 1.99999 7.13405 2.17558 6.82149 2.48815C6.50893 2.80071 6.33333 3.22463 6.33333 3.66666V4.66666H9.66667Z"
                    fill="white"
                  />
                </svg>} </Link> 
        </>
    );
};

export default PrimaryBtn;