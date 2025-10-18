import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-[#403F3F] text-[20px] font-semibold mb-[20px]'>Login With</h2>
            <div className='space-y-3'>
                <button className='flex items-center gap-2 w-full justify-center border border-[#403F3F] rounded-[4px] py-2.5 text-[#403F3F] font-medium cursor-pointer'><FaGoogle /><span>Login with Google</span></button>
                <button className='flex items-center gap-2 w-full justify-center border border-[#403F3F] rounded-[4px] py-2.5 text-[#403F3F] font-medium cursor-pointer'><FaGithub /><span>Login with Github</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;