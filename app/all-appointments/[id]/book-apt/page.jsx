
import { auth } from '@/app/lib/auth';
import { getAptById } from '@/app/lib/data';
import BookAptClient from '@/components/sections/book-appointments/BookAptClient';
import { headers } from 'next/headers';
import React from 'react';

const BookApt = async ({ params }) => {
    const { id } = await params

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const authHeader = {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        }
    }

    const apt = await getAptById(id, authHeader)

    // get users session
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    return (
        <>
            <BookAptClient apt={apt} session={session} id={id} token={token}></BookAptClient>
        </>
    );
};

export default BookApt;