
import { postApt } from '@/lib/actions';
import { auth } from '@/lib/auth';
import { getAptById } from '@/lib/data';
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const BookApt = async ({ params }) => {
    const { id } = await params

    const apt = await getAptById(id)

    const { name: docName, specialty, fee } = apt
    // get users session
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const user = session?.user
    console.log(user);

    async function onSubmit(formData) {
        'use server'
        const userData = Object.fromEntries(formData.entries())

        const bookingData = {
            bookingId: session?.user?.id,
            aptId: id,
            docName: docName,
            speciality: specialty,
            aptTime: userData?.time,
            patientName: userData?.['patient-name'],
            aptDate: userData?.date,
            patientPhone: userData?.phone,
            reason: userData?.reason,
            patientEmail: userData?.email,
            bookingFee: fee
        }

        await postApt(bookingData)

        console.log(bookingData);
    }
    return (
        <>
            <section className=' min-h-[calc(100vh-30rem)]'>
                <div className='flex flex-col flex-center w-11.5/12 sm:w-xl mx-auto'>
                    <div className="section-heading-form w-full mx-auto">
                        <h2>
                            Book An Appointment
                        </h2>
                    </div>
                    <Form action={onSubmit} className='w-full mx-auto border p-6 rounded-lg'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <TextField
                                name="name"
                                type="text"
                                defaultValue={docName}
                                isReadOnly
                            >
                                <Label className='text-black!'>Doctor Name</Label>
                                <Input className="border border-gray-300/50 bg-blue-200/60 text-black!" />
                            </TextField>

                            <TextField
                                name="appointment"
                                type="text"
                                defaultValue={specialty}
                                isReadOnly
                            >
                                <Label className='text-black!'>Speciality</Label>
                                <Input className="border border-gray-300/50 bg-blue-200/60 text-black!" />
                            </TextField>

                            <TextField
                                isRequired
                                name="email"
                                type="email"
                            >
                                <Label>User Email</Label>
                                <Input className="border border-gray-300/50" placeholder="john@example.com" />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                name="patient-name"
                                type="text"
                            >
                                <Label>Patient Name</Label>
                                <Input className="border border-gray-300/50" placeholder="John Doe" />
                            </TextField>

                            <TextField name="phone" isRequired type="tel">
                                <Label>Phone</Label>
                                <Input className="border border-gray-300/50" placeholder="+1 (555) 000-0000" />
                            </TextField>

                            <TextField isRequired name="time" type="time">
                                <Label>Appointment Time</Label>
                                <Input className="border border-gray-300/50 w-full" placeholder='Ex : 9:00 PM - 10 PM' />
                            </TextField>

                            <TextField isRequired name="date" type="date">
                                <Label>Date</Label>
                                <Input className="border border-gray-300/50" />
                            </TextField>
                        </div>
                        <div className='w-full mt-5 space-y-3'>
                            <Label>Reason (Optional)</Label>
                            <TextArea
                                aria-label="Quick project update"
                                className="h-32 w-full border border-gray-300/50"
                                placeholder="Tell us about your present condition..."
                                name='reason'
                            />
                            <Button type='submit' className={`w-full`}>Submit</Button>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    );
};

export default BookApt;