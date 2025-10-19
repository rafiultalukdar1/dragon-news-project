import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {logIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(result => {
                e.target.reset();
                const user = result.user;
                console.log(user)
                navigate(`${location.state? location.state : '/'}`);
            })
            .catch(error => {
                setError(error.code)
            })
    }

    return (
        <div className='pb-[50px] lg:pb-[75px]'>
            <div className='max-w-[600px] lg:px-[95px] lg:py-[75px] p-[20px] sm:p-[50px] rounded-[8px] bg-white mx-auto mt-[30px] sm:mt-[50px] lg:mt-[75px]'>
                <h2 className='text-[#403F3F] text-center text-[25px] md:text-[32px] lg:text-[35px] font-semibold'>Login your account</h2>
                <span className='block bg-[#E7E7E7] h-[1px] w-full my-[20px] md:my-[35px]'></span>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        {/* Email Field */}
                        <label className="form-label">Email address</label>
                        <input name='email' className='form-input' type="email" placeholder="Enter your email address" required/>
                        {/* Password Field */}
                        <label className="form-label">Password</label>
                        <input name='password' className='form-input' type="password" placeholder="Enter your password" required/>
                        {error && <p className='text-red-500 text-[14px] pt-3'>{error}</p>}
                        {/* Button */}
                        <button type="submit" className="py-[15px] w-full bg-[#403F3F] rounded-[5px] mt-[20px] text-white text-[20px] font-semibold cursor-pointer">Login</button>
                    </fieldset>
                </form>
                <p className='text-[#706F6F] text-center text-[16px] font-semibold pt-[22px]'>Dont’t Have An Account ? <Link to='/auth/register' className='bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent'>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;