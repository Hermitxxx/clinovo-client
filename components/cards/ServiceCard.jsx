import Image from 'next/image';
import React from 'react';
import check from '@/public/assets/check.svg'

const ServiceCard = ({ service }) => {
    const { title, description } = service
    return (
        <div className='flex flex-col gap-3 px-4 py-6 shadow-sm shadow-primary/20 rounded-lg'>
            <div className="icon">
                <Image src={check} width={24} height={24} alt='Check'></Image>
            </div>

            <p className='text-accent text-xl font-bold'>
                {title}
            </p>

            <p className='max-w-sm'>
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;