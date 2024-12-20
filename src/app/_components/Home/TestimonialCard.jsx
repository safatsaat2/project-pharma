import Image from 'next/image';
import React from 'react';

const TestimonialCard = () => {
    return (
        <div className='rounded-2xl px-10 py-8 border border-slate-500 '>
            <div className='flex items-center gap-4'>
                <div>
                    <Image width={65} height={65} className='w-16 h-16 rounded-full object-cover' src='/images/user.jpg'/>
                </div>
                <div>
                    <h4 className='text-xl text-secondary font-semibold mb-2'>Robert Mugabe</h4>
                    <h4 className='text-sm text-[#727272] font-semibold'>Author</h4>
                </div>
            </div>
            <p className='text-sm text-[#454545] font-medium mt-4'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
            </p>
            <div>

            </div>
        </div>
    );
};

export default TestimonialCard;