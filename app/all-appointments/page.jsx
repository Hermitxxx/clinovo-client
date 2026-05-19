
import DoctorCard from '@/components/cards/DoctorCard';
import React from 'react';
import SearchField from '@/components/ui/Search';
import Empty from '@/components/empty-field/Empty';
import { getDoctors } from '../lib/data';

const AllAppointments = async ({ searchParams }) => {
    const { search = '' } = await searchParams

    const searchValue = String(search).toLowerCase()
    const allDocs = await getDoctors()

    const filteredArr = allDocs.filter(doc => {
        const matchesSearch = doc.specialty.toLowerCase().includes(searchValue) || doc.name.toLowerCase().includes(searchValue)
        return matchesSearch
    })

    return (
        <section>
            <div>
                <div className="section-heading">
                    <h2>
                        All Appointments
                    </h2>

                    <p className='font-medium'>
                        Find who fits you best
                    </p>
                </div>

                <SearchField searchValue={searchValue}></SearchField>

                <div>
                    {
                        filteredArr.length === 0 ?
                            <>
                                <Empty></Empty>
                            </> :
                            <>
                                <div className='services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                    {
                                        filteredArr.map(doc => <DoctorCard key={doc.id} doc={doc}></DoctorCard>)
                                    }
                                </div>
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default AllAppointments;