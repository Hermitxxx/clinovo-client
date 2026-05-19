
// import DashboardPage from '@/components/sections/Dashboard.jsx/Dashboard';
import DashboardPage from '@/components/sections/Dashboard.jsx/Dashboard';
import { headers } from 'next/headers';
import React from 'react';
import { auth } from '../lib/auth';
import { getBookingByUserId } from '../lib/data';

const Dashboard = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const userId = session?.user?.id

    const bookings = await getBookingByUserId(userId)

    console.log(bookings, ' bookings');

    return (
        <DashboardPage bookings={bookings}></DashboardPage>
    );
};

export default Dashboard;