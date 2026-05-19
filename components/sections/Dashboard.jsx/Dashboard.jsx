'use client'
import BookingCard from '@/components/cards/BookingCard';
import { Button } from '@heroui/react';
import { FileText } from 'lucide-react';
import React, { useState } from 'react';

const DashboardPage = ({ bookings }) => {
    const [state, setState] = useState('bookings')
    return (
        <section className='dahsboard'>
            <div className="section-heading space-y-3">
                <h2>
                    Your Dashboard
                </h2>
                <p>
                    Find all your informations here
                </p>
            </div>

            <div className="toggle-area mb-5">
                <div className='rounded-full'>
                    <Button onClick={() => setState('bookings')} variant={`${state === 'bookings' ? 'primary' : 'outline'}`} className={`rounded-none`}>My Appointments</Button>
                    <Button onClick={() => setState('profile')} variant={`${state === 'profile' ? 'primary' : 'outline'}`} className={`rounded-none`}>My Profile</Button>
                </div>
            </div>

            {
                state === 'bookings' ?
                    <>
                        {
                            bookings.length === 0 ?
                                <div className='border rounded-lg flex-col gap-3 flex-center min-h-[calc(100vh-12rem)]'>
                                    <FileText size={100} color='#07003B'></FileText>
                                    <h2>No bookings yet.</h2>
                                </div> :
                                <div className='bookings-container min-h-[calc(100vh-12rem)]'>
                                    <div className='flex-between mb-5'>
                                        <h2>Bookings :</h2>
                                        <p className='text-sm'>{bookings.length} appointment</p>
                                    </div>

                                    <div className="user-bookings grid grid-cols-1 gap-4 lg:grid-cols-3">
                                        {
                                            bookings.map((booking, i) => <BookingCard key={i} booking={booking}></BookingCard>)
                                        }
                                    </div>
                                </div>
                        }
                    </> :
                    <>
                        <div className="profile min-h-[calc(100vh-12rem)]">
                            <h2>Your Profile</h2>
                        </div>
                    </>
            }
        </section>
    );
};

export default DashboardPage;