'use client'
import React from 'react';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@heroui/react';

const SearchField = ({ searchValue }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function updateParam(key, value) {
        const params = new URLSearchParams(searchParams.toString())

        if (!value || value === 'all') {
            params.delete(key)
        }
        else {
            params.set(key, value)
        }

        const query = params.toString()
        router.replace(query ? `${pathname}?${query}` : pathname)
    }
    return (
        <div className='flex items-center justify-center gap-3 mb-12 w-full'>
            <div className="group w-[70%] md:w-[50%] relative">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-surface-alt/60 transition-colors duration-300">
                    <Search size={20}></Search>
                </div>
                <input
                    type="search"
                    defaultValue={searchValue}
                    onChange={(e) => updateParam('search', e.target.value)}
                    placeholder="Search"
                    className="search-style"
                />
            </div>

            <div>
                <Button variant='outline' onClick={updateParam} className="btn-outline whitespace-nowrap tracking-tighter max-sm:text-sm font-thin max-sm:p-3 py-3">
                    Search
                </Button>

            </div>
        </div>
    );
};

export default SearchField;