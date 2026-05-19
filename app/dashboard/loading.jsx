import { Skeleton } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <section className=''>
            <div className="grid w-full items-stretch grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 min-h-[calc(100vh-15rem)]">
                <div className="space-y-2 h-full">
                    <div className="shadow-panel space-y-3 h-full rounded-lg bg-transparent p-4">
                        <Skeleton animationType="shimmer" className="h-20 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-3/5 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
                <div className="space-y-2 h-full">
                    <div className="shadow-panel space-y-3 h-full rounded-lg bg-transparent p-4">
                        <Skeleton animationType="shimmer" className="h-20 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-3/5 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
                <div className="space-y-2 h-full">
                    <div className="shadow-panel space-y-3 h-full rounded-lg bg-transparent p-4">
                        <Skeleton animationType="shimmer" className="h-20 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-3/5 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
                <div className="space-y-2 h-full">
                    <div className="shadow-panel space-y-3 h-full rounded-lg bg-transparent p-4">
                        <Skeleton animationType="shimmer" className="h-20 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-3/5 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
                <div className="space-y-2 h-full">
                    <div className="shadow-panel space-y-3 h-full rounded-lg bg-transparent p-4">
                        <Skeleton animationType="shimmer" className="h-20 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-3/5 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
                <div className="space-y-2 h-full">
                    <div className="shadow-panel space-y-3 h-full rounded-lg bg-transparent p-4">
                        <Skeleton animationType="shimmer" className="h-20 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-3/5 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default loading;