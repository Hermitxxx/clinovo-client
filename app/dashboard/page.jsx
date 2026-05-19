
import DashboardPage from '@/components/sections/dashboard/Dashboard';
import { auth } from '@/lib/auth';
import { getBookingByUserId } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const Dashboard = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const userId = session?.user?.id

    const bookings = await getBookingByUserId(userId)
    console.log(bookings);
    console.log(userId);
    console.log(session);
    return (
        <DashboardPage bookings={bookings}></DashboardPage>
    );
};

export default Dashboard;