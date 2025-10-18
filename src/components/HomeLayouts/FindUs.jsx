import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='pt-[30px] pb-[20px] text-[#403F3F] text-[20px] font-semibold'>Find Us On</h2>
            <div className='rounded-[5px] border border-[#E7E7E7]'>
                <button className='findus-button'><FaFacebookF className='text-[#3B599C]' size={18} /><span>Facebook</span></button>
                <button className='findus-button border-y border-[#E7E7E7]'><FaTwitter className='text-[#58A7DE]' size={18} /><span>Twitter</span></button>
                <button className='findus-button'><FaInstagram className='text-[#e24d93]' size={18} /><span>Instagram</span></button>
            </div>
        </div>
    );
};

export default FindUs;