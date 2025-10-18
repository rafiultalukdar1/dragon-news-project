import React from 'react';
import Marquee from 'react-fast-marquee';

const Latestnews = () => {
    return (
        <div className='w-full p-[16px] bg-[#F3F3F3] my-[30px] flex items-center gap-[20px]'>
            <p className='px-[22px] py-[8px] bg-secondary text-white text-[20px] font-medium'>Latest</p>
            <Marquee pauseOnHover={true}>
            <p className='text-[#403F3F] text-[18px] font-semibold'>Watch the best moments and goals from Germany vs Spain, full match highlights and key plays.</p>
            </Marquee>
        </div>
    );
};

export default Latestnews;