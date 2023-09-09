import React from 'react';

const DashboardCard = (props) => {
    return (
        <div className='rounded-2xl text-[#ffffff] m-[20px]' style={{"background":`${props.color}`}}>
            <h1 className='pt-[16px] pr-[16px] text-[20px] font-bold'>{props.name}</h1>
            <div className='flex items-center'>
                <h1 className='text-[32px] font-bold px-[152px] py-[61px]'>{props.number}<span className='text-[20px] font-normal'> {props.unit}</span></h1>
            </div>
        </div>
    );
};

export default DashboardCard;