import { auth } from '@/app/lib/auth';
import { getTopDoctors } from '@/app/lib/data';
import DoctorCard from '@/components/cards/DoctorCard';
import { ArrowRight } from 'lucide-react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const TopDocs = async () => {
    const topDocs = await getTopDoctors()

    return (
        <section>
            <div className="section-heading space-y-0 flex items-center justify-between">
                <h2>
                    Top Rated Doctors
                </h2>

                <Link href={`all-appointments`} className='inline-block'>
                    <button className="group px-2 flex items-center gap-1 cursor-pointer bg-transparent text-accent border-0">
                        <span>View all</span>
                        <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' size={16}></ArrowRight>
                    </button>
                </Link>
            </div>
            <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    topDocs.map(doc => <DoctorCard key={doc.id} doc={doc}></DoctorCard>)
                }
            </div>
        </section>
    );
};

export default TopDocs;