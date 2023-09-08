import React from 'react';
import NavBar from './NavBar';
import AdminSidePanel from './AdminSidePanel';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
    return (
        <>
            <div>
                <NavBar/>
                <div className='flex w-full h-full bg-red-100'>
                    <AdminSidePanel/>
                    <div className='p-[20px]'>
                        <h1 className='text-[18px] font-bold py-[20px]'>داشبورد</h1>
                        <DashboardCard color='#6049CD' name="تعداد کل اعضا" number="10" unit="نفر"/> {/* takes values from back and uses map to iterate on data array */}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;