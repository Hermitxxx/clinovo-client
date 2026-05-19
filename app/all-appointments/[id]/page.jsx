

import { getAptById } from '@/lib/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorDetails = async ({ params }) => {
    const { id } = await params;

    const apt = await getAptById(id);
    const {
        name,
        image,
        description,
        specialty,
        experience,
        hospital,
        location,
        fee,
        rating,
        availability = [],
    } = apt ?? {};
    const formattedFee = `$${fee}`;
    const rows = [
        ['Specialty', specialty],
        ['Experience', experience],
        ['Hospital', hospital],
        ['Location', location],
        ['Fee', formattedFee],
        ['Rating', rating],
    ].filter(([, value]) => value);

    return (
        <section className="my-12">
            <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-bg-secondary p-6 md:p-8 shadow-sm">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    {image ? (
                        <div className="relative h-52 w-full overflow-hidden rounded-xl md:h-60 md:w-56 shrink-0">
                            <Image
                                src={image}
                                alt={name || 'Doctor'}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 224px"
                            />
                        </div>
                    ) : null}

                    <div className="w-full space-y-4">
                        <div className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                Appointment Details
                            </p>
                            <h2 className="text-2xl md:text-3xl">{name || 'Doctor details'}</h2>
                            {description ? (
                                <p className="text-sm md:text-base leading-relaxed font-medium">{description}</p>
                            ) : null}
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {rows.map(([label, value]) => (
                                <div key={label} className="rounded-lg border border-primary/15 bg-bg-primary px-4 py-3">
                                    <p className="text-[11px] uppercase tracking-wider text-text">{label}</p>
                                    <p className="mt-1 text-sm font-semibold text-accent">{value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-lg border border-primary/15 bg-bg-primary px-4 py-3">
                            <p className="text-[11px] uppercase tracking-wider text-text">Availability</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {availability.map((time) => (
                                    <span
                                        key={time}
                                        className="rounded-full border border-primary/20 bg-bg-secondary px-3 py-1 text-xs font-medium text-accent"
                                    >
                                        {time}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link href={`/all-appointments/${id}/book-apt`}>
                            <Button className={`w-full font-bold`}>Book Appointment</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorDetails;
