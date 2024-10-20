import Link from 'next/link';
import React from 'react';

const BorderBtn = ({extraClass, label, icon, link}) => {
    return (
        <>
          <Link className={`bg-transparent hover:bg-primary  rounded-lg text-primary border-2 border-primary hover:text-white text-xl leading-normal transition-all ease-linear duration-300 py-2 px-4 ${extraClass && extraClass} `} href={`${link}`}>{label} {icon && <span>{icon}</span>} </Link>   
        </>
    );
};

export default BorderBtn;