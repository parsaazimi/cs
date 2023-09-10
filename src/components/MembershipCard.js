import React, { useState } from 'react';

const MembershipCard = () => {
    const [members, setMembers] = useState([
        {
            id:1,
            fullName:'پارسا عظیمی',
            studentNo:'123456789',
            nationalNo:'987654321',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:false,
            isComplete:false,
        },
        {
            id:2,
            fullName:'پارسا عظیمی',
            studentNo:'123456789',
            nationalNo:'987654321',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:false,
            isComplete:true,
        },
        {
            id:3,
            fullName:'پارسا عظیمی',
            studentNo:'123456789',
            nationalNo:'987654321',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:false,
            isComplete:false,
        }
        
    ])
    return (
        <div>
            <div className='p-[30px] bg-[#F8F8FF] h-[92.2vh] w-[84.5vw] mt-[4px]'>
                        <h1 className='text-[18px] font-bold py-[20px]'>کارت عضویت</h1>
                        <div className='border-2'>
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
                            <div className={member.id % 2 ? 'flex justify-evenly bg-red-100 items-center': 'items-center flex justify-evenly'} key={member.id}>
                                <h1 className='m-[10px] mr-[20px]'>{member.id}</h1>
                                <h1 className='m-[10px] mr-[55px] max-w-[100px] min-w-[100px] text-center flex-wrap'>{member.fullName}</h1>
                                <h1 className='m-[10px] pl-[5px]  mr-[50px] max-w-[100px] min-w-[100px]'>{member.studentNo}</h1>
                                <h1 className='m-[10px] pl-[5px] max-w-[100px] min-w-[100px] text-center'>{member.nationalNo}</h1>
                                <h1 className='m-[10px] pl-[5px] max-w-[100px] min-w-[100px] text-center'>{member.joinDate}</h1>
                                <h1 className='m-[10px] pl-[5px] max-w-[100px] min-w-[100px] text-center'>{member.phoneNo}</h1>
                                {member.isComplete ? <h1 className='m-[10px] py-[5px] bg-[#FFD699] min-w-[100px] rounded-2xl text-center'>انتظار</h1> : <h1 className='m-[10px] rounded-2xl py-[5px] bg-[#FF9C9C] max-w-[100px] min-w-[100px] text-center'>تغییرات</h1> }
                                <h1 className='m-[10px] pl-[5px] max-w-[100px] min-w-[100px] text-center'>احراز هویت</h1>
                            </div>)}
                        </div>
            </div>
        </div>
    );
};

export default MembershipCard;