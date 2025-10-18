import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../assets/user.png'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='nav flex items-center gap-[15px]'>
                <NavLink className='text-[#706F6F] text-[18px] font-[500]' to='/'>Home</NavLink>
                <NavLink className='text-[#706F6F] text-[18px] font-[500]' to='/about'>About</NavLink>
                <NavLink className='text-[#706F6F] text-[18px] font-[500]' to='/career'>Career</NavLink>
            </div>
            <div className='login flex items-center gap-[10px]'>
                <img className='w-[40px] h-[40px] object-cover' src={userImg} alt="" />
                <button className='px-[32px] py-[6px] bg-[#403F3F] text-white text-[20px] font-semibold cursor-pointer rounded-[4px]'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;