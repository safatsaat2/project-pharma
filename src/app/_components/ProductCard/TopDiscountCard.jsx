import Link from 'next/link';
import Image from "next/image";
import React from 'react';

const TopDiscountCard = ({extraClass, percentageDis, title, link, description, disPrice, normalPrice, imgLink}) => {
    return (
        <div className={`row-span-2 bg-slate-200 p-4 pb-0 rounded-2xl flex items-center gap-5 ${extraClass && extraClass}`}>
            <div>
              <p className="text-white bg-primary text-sm px-3 py-2 rounded-3xl w-fit mb-3">
                {percentageDis}% OFF
              </p>
              <Link href={link} className="text-slate-900 text-4xl mb-3">{title}</Link>
              <p className="text-slate-600 capitalize mb-5">
                {description}
              </p>
              <del className="text-md text-slate-400 ">${normalPrice}</del>
              <span className="text-2xl text-slate-700 pl-2">${disPrice}</span>
            </div>
            <Image
              width={300}
              height={200}
              className="w-full h-full object-cover"
              src={imgLink}
            />
          </div>
    );
};

export default TopDiscountCard;