import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import purpleLogo from '../assets/logo-purple.png'
const NavBar = () => {
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
                <Link>circle</Link>
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