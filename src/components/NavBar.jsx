import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {

    const {user, logOut} = use(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('You logged out successfully')
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div className='flex flex-col md:flex-row gap-y-[20px] justify-between items-center'>
            <div className=''>{user ? <p>{user.email}</p> : <p>No user logged in</p>}</div>
            <div className='nav flex items-center gap-[18px]'>
                <NavLink className='text-[#706F6F] text-[18px] font-[500]' to='/'>Home</NavLink>
                <NavLink className='text-[#706F6F] text-[18px] font-[500]' to='/about'>About</NavLink>
                <NavLink className='text-[#706F6F] text-[18px] font-[500]' to='/career'>Career</NavLink>
            </div>
            <div className='login flex items-center gap-[10px]'>
                <img className='w-[40px] h-[40px] object-cover' src={`${user ? user.photoURL : userImg}`} alt="" />
                {
                    user ? (
                        <button onClick={handleLogOut} className='log-button'>LogOut</button>
                    ) : (
                        <Link to='/auth/login' className='log-button'>Login</Link>
                    )
                }
            </div>
        </div>
    );
};

export default NavBar;