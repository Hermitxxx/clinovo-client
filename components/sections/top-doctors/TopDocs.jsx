import { auth } from '@/app/lib/auth';
import { getTopDoctors } from '@/app/lib/data';
import React from 'react';
import TopDocsClient from './TopDocsClient';

const TopDocs = async () => {
    const topDocs = await getTopDoctors()

    return (
        <>
            <TopDocsClient topDocs={topDocs}></TopDocsClient>
        </>
    );
};

export default TopDocs;