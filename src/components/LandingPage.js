import React from 'react';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import AdminSidePanel from './AdminSidePanel';
import MembershipCard from './MembershipCard';

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <div className='flex'>
                <AdminSidePanel />
                {/* <Dashboard /> */}
                <MembershipCard />
            </div>
        </div>
    );
};

export default LandingPage;