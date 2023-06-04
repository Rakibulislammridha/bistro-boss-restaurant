import React from 'react';
import UseAuth from '../../../hooks/UseAuth';

const AdminHome = () => {

    const {user} = UseAuth();

    return (
        <div className='w-full m-4'>
            <h2 className='text-3xl'>Hi, {user.displayName}</h2>
        </div>
    );
};

export default AdminHome;