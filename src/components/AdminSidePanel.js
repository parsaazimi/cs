import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import dashboardImg from '../assets/dashboard_FILL0_wght400_GRAD-25_opsz40.svg'
import newsImg from '../assets/news.svg'
import userCards from '../assets/User Cards.svg'
import members from '../assets/members.svg'
import sendingMessagesImg from '../assets/message.svg'
import arrowDown from '../assets/arrow-right.png'
import documents from '../assets/documents.svg'
import avatar from '../assets/avatar.png'
import logout from '../assets/logout.svg'
const AdminSidePanel = () => {
    const droppedItem1 = useRef()
    const droppedItem2 = useRef()
    const label = useRef()
    const dropDownHandler = ()=>{
        
        droppedItem1.current.classList.toggle("hidden")
        droppedItem2.current.classList.toggle("hidden")
        label.current.classList.toggle("bg-[#E5EBFF]")
        label.current.classList.toggle("border-r-[4px]")
        label.current.classList.toggle("border-[#0E8AF2]")        
        label.current.classList.toggle("pr-[19.7px]")        
    }
    return (
        <div>
            <div className='w-[280px] h-[86.8vh] flex-col content-between'> {/*spacing between logout and others in the list must be fixed*/} 
                <div className='h-full text-[#4B4B4B] w-full'>
                    <div className='flex justify-center'>
                    <div className='text-center mt-[29px]'>
                            <img src={avatar} alt='avatar' className='w-[60px]' />      
                            <p className='py-[8px]'>name</p>  {/*takes content from back */}      
                            <p className='mb-[32px]'>number</p>{/*takes content from back */}      
                    </div>
                    </div>
                    <div>
                        <Link className='flex text-sm font-normal items-center py-4 pr-[24px] pl-[213px] hover:bg-[#efefef]'><img className='w-[24px] ml-[12px] opacity-70' src={dashboardImg} alt='dashboard' />داشبورد</Link>
                        <ul className='flex-col text-sm font-normal items-center'>
                            <label className='flex cursor-pointer py-4 pr-[24px] hover:bg-[#efefef]' ref={label} onClick={dropDownHandler}>
                                <img className='w-[24px] ml-[12px] opacity-70' src={documents} alt='news' />
                                <div className='flex justify-between w-full '>
                                    <p>دوره ها</p>
                                    <img className='rotate-90 w-[24px] h-[24px] ml-[12px] opacity-70' src={arrowDown} alt='arrow-down' />
                                </div> 
                            </label>
                            <li className='mr-[60px] py-4 hidden' ref={droppedItem1}>
                                <Link>
                                    افزودن دوره     
                                </Link> 
                            </li>
                            <li className='mr-[60px] py-4 hidden' ref={droppedItem2}>
                                <Link>
                                    دوره های موجود 
                                </Link> 
                            </li>
                        </ul>
                        <Link className='flex text-sm font-normal items-center py-4 pr-[24px] hover:bg-[#efefef]'><img className='w-[24px] ml-[12px] opacity-70' src={newsImg} alt='news' />اخبار</Link>
                        <Link className='flex text-sm font-normal items-center py-4 pr-[24px] hover:bg-[#efefef]'><img className='w-[24px] ml-[12px] opacity-70' src={userCards} alt='membership card' />
                            <div className='flex justify-between w-full items-center'>
                                <label>
                                    کارت عضویت  
                                </label>
                                <span className='ml-[15px] bg-[#E24156] px-[4px] py-[1px] rounded text-white'>4</span> {/*takes number from back */}
                            </div>
                        </Link>
                        <Link className='flex text-sm font-normal items-center py-4 pr-[24px] hover:bg-[#efefef]'><img className='w-[24px] ml-[12px] opacity-70' src={members} alt='members' />اعضا</Link>
                        <Link className='flex text-sm font-normal items-center py-4 pr-[24px] hover:bg-[#efefef]'><img className='w-[24px] ml-[12px] opacity-70' src={sendingMessagesImg} alt='sending messages' />ارسال پیام</Link>
                    </div>
                </div>
                <div className='text-[#4B4B4B]'>
                    <Link className='flex text-sm font-normal items-center py-4 pr-[24px] hover:bg-[#efefef]'><img className='w-[24px] ml-[12px] opacity-70' src={logout} alt='logout' />خروج ار حساب کاربری</Link>
                </div>
            </div>

        </div>
    );
};

export default AdminSidePanel;