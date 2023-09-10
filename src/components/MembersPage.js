import React, { useState } from 'react';
import NavBar from './NavBar';
import AdminSidePanel from './AdminSidePanel';
import { Link } from 'react-router-dom';
import visibilityIcon from '../assets/visibility.png'
import downloadIcon from '../assets/cloud_download.svg'
import search from '../assets/search.svg'
const Members = () => {
    const [members, setMembers] = useState([
        {
            id:1,
            fullName:'پارسا عظیمی',
            studentNo:'402999999999',
            nationalNo:'9999999999',
            membershipNo: "C-000001",
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
            membershipNo: "C-000001",
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
            membershipNo: "C-000001",
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
                <div className='flex '>
                    <AdminSidePanel />
                    <div className='p-[30px] bg-[#F8F8FF] min-h-[92.2vh] w-[85.3vw] mt-[4px]'>
                                <h1 className='text-[18px] font-bold py-[20px]'>اعضا</h1>
                                <div className='flex justify-between mb-[24px]'>
                                    <div className='flex items-center'>
                                        <select className='py-[10px] px-[16px] border-[1px] rounded border-[#9A9A9A] ml-[20px]'>
                                            <option>{members.length}همه</option>
                                        </select>
                                        <div className='flex bg-[#fff] border-[1px] rounded border-[#9A9A9A]'>
                                            <img className='opacity-40' src={search} alt='search' />
                                            <input className=' outline-0 py-[9.5px] text-[16px] ' type='text' name='search' placeholder='جستجو اعضا...' />
                                        </div>
                                    </div>
                                    <div className='flex items-center bg-[#0E8AF2] rounded-lg p-[10px]'>
                                        <h2>دانلود</h2>
                                        <img className='mr-[8px] w-[24px] ' src={downloadIcon} alt="download" />
                                    </div>
                                </div>
                                <div className='border-2 overflow-hidden bg-[#ffffff] rounded-xl'>
                                    <div className='flex justify-evenly'> 
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>#</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>نام و نام خانوادگی</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>شماره عضویت</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>شماره دانشجویی</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>کد ملی</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>تاریخ عضویت</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>شماره تلفن</h1>
                                        <h1 className='m-[10px] ml-[30px] p-[5px] items-center text-[#4B4B4B]'>وضعیت</h1>
                                        <h1 className='m-[10px] p-[5px] items-center text-[#4B4B4B]'>جزئیات</h1>
                                    </div>
                                    {members.map(member => 
                                    <tr className={member.id % 2 ? 'flex justify-evenly bg-blue-100 items-center': 'items-center flex justify-evenly'} key={member.id}>
                                        <td className='m-[10px] mr-[30px]'>{member.id}</td>
                                        <td className='m-[10px] mr-[50px] w-[100px] text-center flex-wrap'>{member.fullName}</td>
                                        <td className='m-[10px] mr-[80px] w-[100px]'>{member.membershipNo}</td>
                                        <td className='m-[10px] pl-[5px] ml-[50px] mr-[50px] w-[100px]'>{member.studentNo}</td>
                                        <td className='m-[10px] pl-[5px] w-[100px] text-center'>{member.nationalNo}</td>
                                        <td className='m-[10px] pl-[5px] w-[100px] text-center'>{member.joinDate}</td>
                                        <td className='m-[10px] pl-[5px] w-[100px] text-center'>{member.phoneNo}</td>
                                        <td className='m-[10px] py-[5px] bg-[#9BFFB1] w-[100px] rounded-2xl text-center'>صدور</td>
                                        <Link to='/userdatapage' className='m-[10px] pl-[5px] w-[100px] text-center'><img className='opacity-70 mr-[35px]' src={visibilityIcon} alt='details' /></Link>
                                    </tr>)}
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;