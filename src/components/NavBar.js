import React, { useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import purpleLogo from '../assets/logo-purple.png'
import avatar from '../assets/avatar.png'
import arrowDown from '../assets/arrow-right.png'
import profileImg from '../assets/profile.svg'
import logout from '../assets/logout.svg'
const NavBar = () => {
    const dropDown = useRef()
    const dropDownHandler = () => {
        dropDown.current.classList.toggle("hidden")
    }
    return (
        <>
        <div className='px-[117px] flex justify-between h-[72px] items-center shadow-[0_4px_6px_-4px_rgba(0,0,0,0.25)]'>
            <div className='flex items-center'>
                <Link><img className='w-[42px] ml-[40px]' src={purpleLogo} alt='purple-logo' /></Link>
                <Link className='ml-7 font-bold'>خانه </Link>
                <Link className='ml-7 font-bold'>دوره ها </Link>
                <Link className='ml-7 font-bold'>اخبار </Link>
                <Link className='ml-7 font-bold'>درباره ما </Link>
                <Link className='font-bold'>تماس با ما</Link>
            </div>
            <div>
                <div className='flex items-center cursor-pointer' onClick={dropDownHandler}>
                    <img className=' w-[42px] ml-[8px]' src={avatar} alt='avatar' />
                    <img className='rotate-90 w-[24px] h-[24px]' src={arrowDown} alt='arrow-down' />
                </div>
                <div className='absolute top-[76px] left-[109px] hidden rounded z-10 shadow text-[#4B4B4B]' ref={dropDown}>
                    <Link className='flex text-sm font-normal items-center py-[13px] pr-[24px] pl-[127px]'>
                        <img className='w-[24px] ml-[12px]' src={profileImg} alt='sending messages' />حساب کاربری
                    </Link>
                    <Link className='flex text-sm font-normal items-center py-[13px] pr-[24px]'>
                        <img className='w-[24px] ml-[12px]' src={logout} alt='logout' />خروج ار حساب کاربری
                    </Link>
                </div>
            </div>
        </div>
        <div>
            <Routes>                    

            </Routes>
        </div>
        </>
    );
};

export default NavBar;