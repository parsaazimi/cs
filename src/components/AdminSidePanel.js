import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import dashboardImg from '../assets/dashboard_FILL0_wght400_GRAD-25_opsz40.svg'
import newsImg from '../assets/news.svg'
import userCards from '../assets/User Cards.svg'
import members from '../assets/members.svg'
import sendingMessagesImg from '../assets/message.svg'
import arrowDown from '../assets/arrow-right.png'

const AdminSidePanel = () => {
    const droppedItem1 = useRef()
    const droppedItem2 = useRef()
    const dropDownHandler = ()=>{
        droppedItem1.current.classList.toggle("hidden")
        droppedItem2.current.classList.toggle("hidden")
    }
    return (
        <>
            <div className='flex-col justify-center w-[280px] h-full  bg-red-200'>
                <div className='text-center'>
                    <p>circle</p>        
                    <p>name</p>        
                    <p>number</p>        
                </div>
                <div className='pr-[24px]'>
                    <Link className='flex text-sm font-normal items-center py-4'><img className='w-[24px] ml-[12px]' src={dashboardImg} alt='dashboard' />داشبورد</Link>
                    <Link className='flex text-sm font-normal items-center py-4'><img className='w-[24px] ml-[12px]' src={dashboardImg} alt='dashboard' />داشبورد</Link>
                    <ul className='flex-col text-sm font-normal items-center '>
                        <label className='flex cursor-pointer py-4' onClick={dropDownHandler}>
                            <img className='w-[24px] ml-[12px]' src={newsImg} alt='news' />
                            <div className='flex justify-between w-full'>
                                <p>دوره ها</p>
                                <img className='rotate-90 w-[24px] h-[24px] ml-[12px]' src={arrowDown} alt='arrow-down' />
                            </div> 
                        </label>
                        <li className='mr-[36px] py-4 hidden transition ease-in duration-300' ref={droppedItem1}>
                            افزودن دوره
                        </li>
                        <li className='mr-[36px] py-4 hidden transition ease-in duration-300' ref={droppedItem2}>
                            دوره های موجود
                        </li>
                    </ul>
                    <Link className='flex text-sm font-normal items-center py-4'><img className='w-[24px] ml-[12px]' src={userCards} alt='membership card' />کارت عضویت</Link>
                    <Link className='flex text-sm font-normal items-center py-4'><img className='w-[24px] ml-[12px]' src={members} alt='members' />اعضا</Link>
                    <Link className='flex text-sm font-normal items-center py-4'><img className='w-[24px] ml-[12px]' src={sendingMessagesImg} alt='sending messages' />ارسال پیام</Link>
                </div>
            </div>
        </>
    );
};

export default AdminSidePanel;