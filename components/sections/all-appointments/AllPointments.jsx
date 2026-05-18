'use client'
import DoctorCard from '@/components/cards/DoctorCard';
import BtnOutline from '@/components/ui/btn/BtnOutline';
import React, { useState } from 'react';

const AllPointments = ({ allDocs }) => {
    const [value, setValue] = useState('')
    return (
        <div>
            <div className="section-heading">
                <h2>
                    All Appointments
                </h2>

                <p className='font-medium'>
                    Find who fits you best
                </p>
            </div>

            <div className='flex items-center justify-center gap-3 mb-12 w-full'>
                <div className="group w-[70%] md:w-[50%] relative">
                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-surface-alt/60 transition-colors duration-300">
                        <svg className="h-[1.1em] w-[1.1em] text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full rounded-full border border-accent focus:border-accent bg-bg py-2.5 pl-10 pr-4 text-sm caret-accent focus:placeholder:text-accent placeholder:text-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300 text-accent"
                    />
                </div>

                <div>
                    <BtnOutline>
                        <button
                            onChange={() => setValue(e.target.value)}
                            className="btn whitespace-nowrap tracking-tighter max-sm:text-xs font-thin max-sm:p-3 py-2.5">
                            Search
                        </button>
                    </BtnOutline>
                </div>
            </div>

            <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    allDocs.map(doc => <DoctorCard key={doc.id} doc={doc}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default AllPointments;