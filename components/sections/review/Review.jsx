import Image from 'next/image';
import React from 'react';
import review from '@/public/assets/review.svg'
import { Button } from '@heroui/react';
import { Mail, MapPin } from 'lucide-react';
import { Envelope } from '@gravity-ui/icons';

const Review = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-accent mb-6">Get in touch with us!</h2>
                        <div className='flex flex-col items-start mb-5 text-accent gap-2'>
                            <span className='inline-flex flex-center gap-2'>
                                <MapPin></MapPin>
                                Los Angeles, California
                            </span>
                            <span className='inline-flex flex-center gap-2'>
                                <Mail></Mail>
                                support@clinovo.com
                            </span>
                        </div>
                        <div>
                            <Button className="bg-primary hover:bg-primary text-white">Schedule your consultation</Button>
                        </div>
                    </div>

                    <div className="md:col-span-6 flex justify-center">
                        <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg bg-white">
                            <Image src={review} width={680} height={460} alt="Review" className="w-full h-auto object-cover" />
                            <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;