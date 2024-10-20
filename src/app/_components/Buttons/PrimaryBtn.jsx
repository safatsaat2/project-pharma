import React from 'react';
import Link from 'next/link';

const PrimaryBtn = ({extraClass, label, icon}) => {
    return (
        <>
           <Link className={`bg-bgBtnPrimary hover:bg-primary hover:bg-bgBtnHover  rounded-lg text-white text-xl leading-normal transition-all ease-linear duration-300 py-2 px-4 ${extraClass} `} href="/">{label} <>{icon}</> </Link> 
        </>
    );
};

export default PrimaryBtn;