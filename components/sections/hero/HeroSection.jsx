import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import doctor from '@/public/assets/doctor.svg'
import SecondaryButton from '@/components/ui/btn/SecondaryButton';

const HeroSection = () => {
    return (
        <section className='bg-bg-primary/40 border flex max-lg:flex-col max-lg:gap-10 gap-16 lg:gap-20 justify-between min-h-[calc(100vh-12rem)] rounded-lg max-lg:min-h-0 items-center overflow-hidden px-6 py-10 md:p-12'>
            <div className="intro space-y-7 sm:space-y-8 max-w-xl">
                <h1 className='leading-16 max-sm:text-5xl max-sm:leading-tight'>
                    <span className='text-accent'>Doctor</span> <br />
                    <span>Consultation.</span>
                </h1>

                <p className='max-w-lg md:text-lg font-medium'>
                    Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                </p>

                <div className="cta flex flex-wrap items-center gap-4">
                    <Link href={`/register`}>
                        <button className='whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 sm:text-base'>
                            Consult Now
                        </button>
                    </Link>

                    <Link href={`/login`}>
                        <SecondaryButton>
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow" />
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </SecondaryButton>
                    </Link>
                </div>
            </div>

            <div className="doctor relative mx-auto w-80 h-80 sm:w-96 sm:h-96 lg:w-115 lg:h-115 shrink-0">
                <div className="absolute inset-0 bg-primary rounded-full" />
                <Image
                    className='relative z-10 -bottom-12 block w-full h-full object-contain'
                    src={doctor}
                    width={480}
                    height={480}
                    alt='Doctor'></Image>
            </div>
        </section>
    );
};

export default HeroSection;