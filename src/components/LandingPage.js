import React from 'react';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import AdminSidePanel from './AdminSidePanel';

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <div className='flex'>
                <AdminSidePanel />
                <Dashboard />
            </div>
        </div>
    );
};

export default LandingPage;