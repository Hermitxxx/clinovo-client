'use client'
import { authClient } from '@/app/lib/auth-client';
import BookingCard from '@/components/cards/BookingCard';
import { UpdateProfile } from '@/components/modal/ProfileUpdate';
import { Avatar, Button } from '@heroui/react';
import { FileText } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const DashboardPage = ({ bookings }) => {
    const [state, setState] = useState('bookings')
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    const user = session?.user
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
                            <h2 className='mb-5'>Your Profile</h2>

                            <div className='flex-center'>
                                <div className='profile-card rounded-lg shadow-md shadow-primary/40 border border-primary/60 p-10 relative'>
                                    <Avatar className="size-16">
                                        <Avatar.Image alt={user.name} src={user?.image ? `${user?.image}` : 'https://robohash.org/utquibusdamquod.png?size=250x250&set=set1'} />
                                        <Avatar.Fallback>JD</Avatar.Fallback>
                                    </Avatar>

                                    <div className='user-info my-5 space-y-2'>
                                        <h2 className='text-2xl'>
                                            Name : {user.name}
                                        </h2>

                                        <p className='font-bold'>Email : {user.email}</p>
                                    </div>

                                    <UpdateProfile></UpdateProfile>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </section>
    );
};

export default DashboardPage;