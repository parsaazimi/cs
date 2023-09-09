import React from 'react';

const DashboardCard = (props) => {
    return (
        <div className='rounded-2xl text-[#ffffff] m-[10px] flex-col p-[16px] w-[360px] h-[172px]' style={{"background":`${props.color}`}}>
            <h1 className=' text-[20px] font-bold'>{props.name}</h1>
            <div className='flex justify-center'>
                <h1 className='text-[32px] font-bold mt-[14px]'>{props.number}<span className='text-[20px] font-normal'> {props.unit}</span></h1>
            </div>
        </div>
    );
};

export default DashboardCard;