import React from 'react';
import NavBar from './NavBar';
import AdminSidePanel from './AdminSidePanel';

const UserDataPage = () => {
    return (
        <div>
            <div>
                <NavBar />
                <div className='flex'>
                    <AdminSidePanel />
                    <div className='p-[30px] bg-[#F8F8FF] min-h-[92.2vh] w-[85.3vw] mt-[4px]'>
                        <h1 className='text-[18px] font-bold py-[20px]'>کارت عضویت</h1>
                        <div className='bg-[#fff]'>
                            <h2 className='border-b-[1px] text-[16px] font-bold p-[17px]'>اطلاعات کاربر</h2>
                            <div className='flex-col p-[17px]'>
                                <div className='flex w-full justify-between mt-[16px]'>
                                    <div className='flex justify-between w-[500px]'>
                                        <div className='flex-col '>
                                            <h2 className='text-[#707070] mb-[12px]'>نام</h2>
                                            <span className='flex flex-wrap w-[100px] '>پارسا</span>
                                        </div>
                                        <div  className='flex-col '>
                                            <h2 className='text-[#707070] mb-[12px]'>نام خانوادگی</h2>
                                            <span className='flex flex-wrap w-[100px]'>عظیمی</span>
                                        </div>
                                        <div  className='flex-col '>
                                            <h2 className='text-[#707070] mb-[12px]'>نام پدر</h2>
                                            <span className='flex flex-wrap w-[100px]'>پارسا</span>
                                        </div>
                                    </div>
                                    <div className='absolute right-[1740px]'>
                                        <div className='w-[126px] h-[157px] bg-blue-100'>
                                                عکس
                                        </div>
                                        <div>
                                            دانلود
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-[800px] justify-between mt-[16px]'>
                                    <div  className='flex-col'>
                                        <h2 className='text-[#707070] mb-[12px]'>نام به لاتین</h2>
                                        <span className='flex flex-wrap w-[100px]'>parsa</span>
                                    </div>
                                    <div  className='flex-col'>
                                        <h2 className='text-[#707070] mb-[12px]'>نام خانوادگی به لاتین</h2>
                                        <span className='flex flex-wrap w-[100px]'>عظیمی</span>
                                    </div>
                                    <div  className='flex-col'>
                                        <h2 className='text-[#707070] mb-[12px]'>ایمیل</h2>
                                        <span className='flex'>example@email.com</span>
                                    </div>
                                    <div  className='flex-col'>
                                        <h2 className='text-[#707070] mb-[12px]'>جنسیت</h2>
                                        <span>آقا</span>
                                    </div>
                                </div>
                                <div className='flex w-[800px] justify-between mt-[16px]'>
                                    <div>
                                        <h2 className='text-[#707070] mb-[12px]'>دانشجو دانشگاه آزاد کرمانشاه هستید؟</h2>
                                        <span>بله</span>
                                    </div>
                                    <div>
                                        <h2 className='text-[#707070] mb-[12px]'>تاریخ تولد</h2>
                                        <span>1111/11/11</span>
                                    </div>
                                    <div>
                                        <h2 className='text-[#707070] mb-[12px]'>محل صدور شناسنامه</h2>
                                        <span>کرمانشاه</span>
                                    </div>
                                </div>
                                <div className='flex w-[400px] justify-between mt-[16px]'>
                                    <div>
                                        <h2 className='text-[#707070] mb-[12px]'>کدملی</h2>
                                        <span>9999999999</span>
                                    </div>
                                    <div>
                                        <h2 className='text-[#707070] mb-[12px]'>شماره دانشجویی</h2>
                                        <span>999999999</span>
                                    </div>
                                </div>
                                <div className='mt-[16px] absolute right-[1596px]'>
                                    <div>
                                        <h2 className='text-[#707070] mb-[12px]'>کارت دانشجویی</h2>
                                        <div className='w-[270px] h-[159px] bg-blue-100'>
                                            عکس کارت دانشجویی
                                        </div>
                                        <div>دانلود</div>
                                    </div>
                                </div>
                                <h1 className='mt-[53px]'>ثبت وضعیت</h1>
                                <form>
                                    <div className='flex'>
                                        <div className='flex ml-[12px] p-[10px] bg-[#FFEFEF] rounded-lg'>
                                            <input type='radio' id='accept' name='verification' value='accept' />
                                            <label className='mr-[8px]' for='accept'>تایید عضویت</label>
                                        </div>
                                        <div className='flex p-[10px] bg-[#FFEFEF] rounded-lg'>
                                            <input type='radio' id='reject' name='verification' value='reject' />
                                            <label className='mr-[8px]' for='reject'>رد عضویت</label>
                                        </div>
                                    </div>
                                    <div className='flex p-[10px] w-[570px] bg-[#FFEFEF] rounded-lg mt-[24px] mb-[16px]'>
                                        <input type='checkbox' />
                                        <label className='mr-[8px]'>عکس کارت دانشجویی و عکس پرسنلی با اطلاعات وارد شده مطابقت ندارد</label>
                                    </div>
                                    <div className='flex w-[338px] p-[10px] bg-[#FFEFEF] rounded-lg mb-[16px]'>
                                        <input type='checkbox' />
                                        <label className='mr-[8px]'>عکس پرسنلی آپلود شده بی کیفیت است</label>
                                    </div>
                                    <div className='flex w-[398px] p-[10px] bg-[#FFEFEF] rounded-lg mb-[16px]'>
                                        <input type='checkbox' />
                                        <label className='mr-[8px]'>عکس کارت دانشجویی آپلود شده بی کیفیت است</label>
                                    </div>
                                    <div className='flex justify-end'>
                                        <button className='px-[50.5px] py-[10px] bg-[#0E8AF2] text-[18px] font-bold text-[#fff] rounded '>ثبت</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDataPage;