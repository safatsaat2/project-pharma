import React from 'react';
import Link from 'next/link';

const PrimaryBtn = ({extraClass, label, icon, link}) => {
    return (
        <>
           <Link className={`bg-bgBtnPrimary hover:bg-primary hover:bg-bgBtnHover  rounded-lg text-white text-xl leading-normal transition-all ease-linear duration-300 py-2 px-4 ${extraClass} `} href={`${link}`}>{label} {icon && <span>{icon}</span>} </Link> 
        </>
    );
};

export default PrimaryBtn;