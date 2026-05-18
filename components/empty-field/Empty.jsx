import React from 'react';

const Empty = () => {
    return (
        <div className='min-h-[calc(100vh-30rem)] p-12 flex-center w-11/12 mx-auto border'>
            <p className='font-bold text-2xl'>
                No matching appointments
            </p>
        </div>
    );
};

export default Empty;