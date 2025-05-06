import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#f3f3f3]'>
            <div className='w-11/12 mx-auto py-3'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;