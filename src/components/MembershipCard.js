import React, { useState } from 'react';
import NavBar from './NavBar';
import AdminSidePanel from './AdminSidePanel';
import { Link } from 'react-router-dom';

const MembershipCard = () => {
    const [members, setMembers] = useState([
        {
            id:1,
            fullName:'پارسا عظیمی',
            studentNo:'402999999999',
            nationalNo:'9999999999',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:false,
            isComplete:false,
        },
        {
            id:2,
            fullName:'پارسا عظیمی',
            studentNo:'402999999999',
            nationalNo:'9999999999',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:false,
            isComplete:true,
        },
        {
            id:3,
            fullName:'پارسا عظیمی',
            studentNo:'99999999999',
            nationalNo:'9999999999',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:false,
            isComplete:false,
        }
        
    ])
    return (
        <div>
            <div>
                <NavBar />
                <div className='flex'>
                    <AdminSidePanel />
                    <div className='p-[30px] bg-[#F8F8FF] h-[92.2vh] w-[85.3vw] mt-[4px]'>
                                <h1 className='text-[18px] font-bold py-[20px]'>کارت عضویت</h1>
                                <div className='border-2 bg-[#ffffff] rounded-xl'>
                                    <div className='flex justify-evenly'> 
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>#</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>نام و نام خانوادگی</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>شماره دانشجویی</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>کد ملی</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>تاریخ عضویت</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>شماره تلفن</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>وضعیت</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>احراز هویت</h1>
                                    </div>
                                    {members.map(member => 
                                    <tr className={member.id % 2 ? 'flex justify-evenly bg-blue-100 items-center': 'items-center flex justify-evenly'} key={member.id}>
                                        <td className='m-[10px] mr-[30px]'>{member.id}</td>
                                        <td className='m-[10px] mr-[50px] w-[100px] text-center flex-wrap'>{member.fullName}</td>
                                        <td className='m-[10px] pl-[5px] ml-[50px] mr-[50px] w-[100px]'>{member.studentNo}</td>
                                        <td className='m-[10px] pl-[5px] w-[100px] text-center'>{member.nationalNo}</td>
                                        <td className='m-[10px] pl-[5px] w-[100px] text-center'>{member.joinDate}</td>
                                        <td className='m-[10px] pl-[5px] w-[100px] text-center'>{member.phoneNo}</td>
                                        {member.isComplete ? <td className='m-[10px] py-[5px] bg-[#FFD699] w-[100px] rounded-2xl text-center'>انتظار</td> : <td className='m-[10px] rounded-2xl py-[5px] bg-[#FF9C9C] max-w-[100px] min-w-[100px] text-center'>تغییرات</td> }
                                        <Link to='/userdatapage' className='m-[10px] pl-[5px] w-[100px] text-center'>ثبت وضعیت</Link>
                                    </tr>)}
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipCard;