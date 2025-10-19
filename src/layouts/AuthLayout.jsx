import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] min-h-screen'>
            <div className='container'>
                <header className='py-[36px]'>
                    <NavBar></NavBar>
                </header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;