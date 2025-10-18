import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Latestnews from '../components/Latestnews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/HomeLayouts/LeftAside';
import RightAside from '../components/HomeLayouts/RightAside';

const HomeLayout = () => {
    return (
        <div className='container'>
            <header>
                <Header></Header>
                <Latestnews></Latestnews>
                <NavBar></NavBar>
            </header>
            <main className='mt-[75px] grid grid-cols-12 gap-[24px]'>
                <aside className='lg:col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <main className='main lg:col-span-6'>
                    <Outlet></Outlet>
                </main>
                <aside className='lg:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;