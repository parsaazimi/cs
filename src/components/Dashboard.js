import React, { useState } from 'react';
import NavBar from './NavBar';
import AdminSidePanel from './AdminSidePanel';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            color:'#6049CD',
            name:"تعداد کل اعضا",
            unit:"نفر",
        },
        {
            id: 2,
            color:'#6787F9',
            name:"تعداد اعضا انجمن",
            unit:"نفر",
        },
        {
            id: 3,
            color:'#F96767',
            name:"درخواست عضویت جدید",
            unit:"نفر",
        },
        {
            id: 4,
            color:'#40C9D8',
            name:"کل هزینه دوره ها",
            unit:"تومان",
        },
        {
            id: 5,
            color:'#D89B40',
            name:"تعداد کل دوره ها",
            unit:"دوره",
        },
        

    ])
    return (
        <div>
            <div>
                <NavBar />
                <div className='flex'>
                    <AdminSidePanel />
                    <div className='p-[30px] bg-[#F8F8FF] min-h-[92.2vh] mt-[4px]'>
                        <h1 className='text-[18px] font-bold py-[20px]'>داشبورد</h1>
                        <div className='flex flex-wrap'>
                            {cards.map(card => <DashboardCard name= {card.name} color = {card.color} unit = {card.unit}/>)}
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;