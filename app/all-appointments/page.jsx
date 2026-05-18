
import AllPointments from '@/components/sections/all-appointments/AllPointments';
import { getDoctors } from '@/lib/data';
import React from 'react';

const AllAppointments = async () => {
    const allDocs = await getDoctors()
    return (
        <section>
            <AllPointments allDocs={allDocs}></AllPointments>
        </section>
    );
};

export default AllAppointments;