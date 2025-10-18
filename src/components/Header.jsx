import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='pt-[50px]'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-[#706F6F] text-[18px] pt-[20px] text-center'>Journalism Without Fear or Favour</p>
            <p className='text-[#706F6F] text-[18px] font-medium pt-[10px] text-center'><span className='text-[#403F3F]'>{format(new Date(), 'EEEE, ')}</span>{format(new Date(), 'MMMM MM, yyyy')}</p>
        </div>
    );
};

export default Header;