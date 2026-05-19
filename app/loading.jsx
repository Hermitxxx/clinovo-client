import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 min-h-[calc(100vh-15rem)]">
            <Spinner size="xl" />
            <span className="text-xs text-muted">Loading...</span>
        </div>
    );
};

export default loading;