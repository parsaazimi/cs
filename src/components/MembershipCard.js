import React, { useState } from 'react';

const MembershipCard = () => {
    const [members, setMembers] = useState([
        {
            id:1,
            fullName:'parsa azimi',
            studentNo:'123456789',
            nationalNo:'987654321',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:true,
            needsChange:false,
        },
        {
            id:2,
            fullName:'parsa azimi',
            studentNo:'123456789',
            nationalNo:'987654321',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:true,
            needsChange:false,
        },
        {
            id:3,
            fullName:'parsa azimi',
            studentNo:'123456789',
            nationalNo:'987654321',
            joinDate:'1402/02/02',
            phoneNo:'09188888888',
            isVerified:true,
            needsChange:false,
        },
    ])
    return (
        <div>
            <div className='p-[30px] bg-[#F8F8FF] h-[92.2vh] w-[85.4vw] mt-[4px]'>
                        <h1 className='text-[18px] font-bold py-[20px]'>کارت عضویت</h1>
                        {/* <div className='flex flex-wrap'>
                            {cards.map(card => <DashboardCard name= {card.name} color = {card.color} unit = {card.unit}/>)}
                        </div> */}
                        {/* <table className='border '>
                            <tr>
                                <th>#</th>
                                <th>نام و نام خانوادگی</th>
                                <th>شماره دانشجویی</th>
                                <th>کد ملی</th>
                                <th>تاریخ عضویت</th>
                                <th>شماره تلفن</th>
                                <th>وضعیت</th>
                                <th>احراز هویت</th>
                            </tr>
                            <tr>

                                {members.map(member => <tr>{member.id}</tr>)}
                            </tr>
                            <tr>
                                {members.map(member => <td>{member.fullName}</td>)}

                            </tr>
                                {members.map(member => <tr>{member.studentNo}</tr>)}
                                {members.map(member => <tr>{member.nationalNo}</tr>)}
                                {members.map(member => <tr>{member.joinDate}</tr>)}
                                {members.map(member => <tr>{member.phoneNo}</tr>)}
                                {/* {members.map(member => <tr>{member.id}</tr>)}
                                {members.map(member => <tr>{member.id}</tr>)}    
                        </table> */}
                        <div className='border-2'>
                            <div className='flex justify-evenly'> 
                                <h1 className='m-[10px] bg-red-100'>#</h1>
                                <h1 className='m-[10px] bg-red-100'>نام و نام خانوادگی</h1>
                                <h1 className='m-[10px] bg-red-100'>شماره دانشجویی</h1>
                                <h1 className='m-[10px] bg-red-100'>کد ملی</h1>
                                <h1 className='m-[10px] bg-red-100'>تاریخ عضویت</h1>
                                <h1 className='m-[10px] bg-red-100'>شماره تلفن</h1>
                                <h1 className='m-[10px] bg-red-100'>وضعیت</h1>
                                <h1 className='m-[10px] bg-red-100'>احراز هویت</h1>
                            </div>
                            {members.map(member => 
                            // `flex justify-evenly {${member.id}  % 2 ? bg-black-100 : bg-red-100} `
                            <div className={member.id % 2 ? 'flex justify-evenly bg-red-100': 'flex justify-evenly'} key={member.id}>
                                <h1 className='m-[10px] bg-red-100'>{member.id}</h1>
                                <h1 className='m-[10px] bg-red-100'>{member.fullName}</h1>
                                <h1 className='m-[10px] bg-red-100'>{member.studentNo}</h1>
                                <h1 className='m-[10px] bg-red-100'>{member.nationalNo}</h1>
                                <h1 className='m-[10px] bg-red-100'>{member.joinDate}</h1>
                                <h1 className='m-[10px] bg-red-100'>{member.phoneNo}</h1>
                                <h1 className='m-[10px] bg-red-100'>وضعیت</h1>
                                <h1 className='m-[10px] bg-red-100'>احراز هویت</h1>
                            </div>)}
                            {/* <div className='flex'>
                                <h1 className='m-[10px]'>#</h1>
                                <h1 className='m-[10px]'>نام و نام خانوادگی</h1>
                                <h1 className='m-[10px]'>شماره دانشجویی</h1>
                                <h1 className='m-[10px]'>کد ملی</h1>
                                <h1 className='m-[10px]'>تاریخ عضویت</h1>
                                <h1 className='m-[10px]'>شماره تلفن</h1>
                                <h1 className='m-[10px]'>وضعیت</h1>
                                <h1 className='m-[10px]'>احراز هویت</h1>
                            </div> */}
                        </div>
            </div>
        </div>
    );
};

export default MembershipCard;