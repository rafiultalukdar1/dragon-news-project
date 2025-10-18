import React from 'react';
import swimImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='p-[15px] bg-[#F3F3F3] rounded-[4px] mt-[20px]'>
            <h2 className='text-[#403F3F] text-[20px] font-semibold pb-[20px]'>Q-Zone</h2>
            <div className='space-y-[20px]'>
                <img src={swimImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;