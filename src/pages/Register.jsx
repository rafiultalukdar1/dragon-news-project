import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser, updateUser} = use(AuthContext);

    const [nameError, setNameError] = useState('');
    const [photoError, setPhotoError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        if(name.length < 4) {
            setNameError('Name should be 4 character!');
            return;
        }
        else{
            setNameError('');
        }

        const photo = e.target.photo.value;
        if (!photo) {
            setPhotoError('Photo URL is required!');
            return;
        }
        else {
            setPhotoError('');
        }

        const email = e.target.email.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Email is required!');
            return;
        }
        else if (!emailPattern.test(email)) {
            setEmailError('Enter a valid email address!');
            return;
        }
        else {
            setEmailError('');
        }

        const password = e.target.password.value;
        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters!');
            return;
        }
        else if (!passwordPattern.test(password)) {
            setPasswordError('Password must include at least 1 uppercase letter and 1 special character!');
            return;
        }
        else {
            setPasswordError('');
        }

        createUser(email, password)
            .then(result => {
                e.target.reset();
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...user, displayName: name, photoURL: photo});
                        navigate('/');
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    })
                
            })
            .catch(error => {
                alert(error.message)
            })

    };

    return (
        <div className='pb-[50px] lg:pb-[75px]'>
            <div className='max-w-[600px] lg:px-[95px] lg:py-[75px] p-[20px] sm:p-[50px] rounded-[8px] bg-white mx-auto mt-[30px] sm:mt-[50px] lg:mt-[75px]'>
                <h2 className='text-[#403F3F] text-center text-[25px] md:text-[32px] lg:text-[35px] font-semibold'>Register your account</h2>
                <span className='block bg-[#E7E7E7] h-[1px] w-full my-[20px] md:my-[35px]'></span>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        {/* Name Field */}
                        <label className="form-label">Your Name</label>
                        <input name='name' className='form-input' type="text" placeholder="Enter your name"/>
                        {nameError && <p className='text-red-500 text-[14px]'>{nameError}</p>}
                        {/* Photo URL */}
                        <label className="form-label">Photo URL</label>
                        <input name='photo' className='form-input' type="text" placeholder="Photo URL"/>
                        {photoError && <p className='text-red-500 text-[14px]'>{photoError}</p>}
                        {/* Email Field */}
                        <label className="form-label">Email address</label>
                        <input name='email' className='form-input' type="email" placeholder="Enter your email address"/>
                        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                        {/* Password Field */}
                        <label className="form-label">Password</label>
                        <input name='password' className='form-input' type="password" placeholder="Enter your password"/>
                        {passwordError && <p className="text-red-500 text-sm mb-2">{passwordError}</p>}
                        {/* Button */}
                        <button type="submit" className="py-[15px] w-full bg-[#403F3F] rounded-[5px] mt-[20px] text-white text-[20px] font-semibold cursor-pointer">Register</button>
                    </fieldset>
                </form>
                <p className='text-[#706F6F] text-center text-[16px] font-semibold pt-[22px]'>Already Have An Account ? <Link to='/auth/login' className='bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;