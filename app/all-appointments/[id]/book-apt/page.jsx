import React from 'react';

const BookApt = async ({ params }) => {
    const { id } = await params
    console.log(id);
    return (
        <div>
            this is book apt
        </div>
    );
};

export default BookApt;