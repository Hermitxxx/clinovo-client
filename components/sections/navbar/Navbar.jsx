'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg'
import { Avatar, Button, Spinner } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/app/lib/auth-client';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()

    async function handleLogout() {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/"); // redirect to login page
                },
            },
        });
    }

    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    // console.log(session);
    return (
        <header className='sticky top-0 z-1000 w-full bg-bg-secondary border-b border-gray-200'>
            <nav className='navbar w-11/12 mx-auto flex-between py-4 bg-bg-secondary'>
                <Link className='cursor-pointer' href={`/`}>
                    <div className="logo flex-center gap-1">
                        <Image src={logo} width={44} height={44} alt='Clinovo'></Image>
                        <div>
                            <p className='text-xl'><span className='text-primary font-bold'>Clin</span><span className='text-text font-bold'>ovo</span></p>
                        </div>
                    </div>
                </Link>

                <div className="nav-links hidden md:flex">
                    <ul className='flex-between gap-8'>
                        <NavLink href={`/`}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink href={`/all-appointments`}>
                            <li>All Appointments</li>
                        </NavLink>
                        {
                            session ?
                                <>
                                    <NavLink href={`/dashboard`}>
                                        <li>Dashboard</li>
                                    </NavLink>
                                </> :
                                <>
                                </>
                        }
                    </ul>
                </div>

                <div className="button flex-center gap-2">
                    {
                        session ?
                            isPending ?
                                <>
                                    <Button isPending>
                                        {({ isPending }) => (
                                            <>
                                                {isPending ? <Spinner color="current" size="sm" /> : null}
                                                Loading...
                                            </>
                                        )}
                                    </Button>
                                </> :
                                <>
                                    <Avatar>
                                        <Avatar.Image alt="John Doe" src={session?.image ? `${session?.image}` : 'https://robohash.org/utquibusdamquod.png?size=250x250&set=set1'} />
                                        <Avatar.Fallback>JD</Avatar.Fallback>
                                    </Avatar>
                                    <Button onClick={handleLogout} variant='danger'>Logout</Button>
                                </> :
                            <>
                                <Link href={`/register`} className='hidden md:flex'>
                                    <Button>Register</Button>
                                </Link>

                                <Link href={`/login`} className='hidden md:flex'>
                                    <Button className={`btn-outline`} variant='outline'>Login</Button>
                                </Link>
                            </>
                    }

                    <button
                        className="md:hidden cursor-pointer flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-muted transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {
                menuOpen && (
                    <div className="md:hidden z-1000 w-full border-t border-gray-200 bg-bg-secondary p-5 flex flex-col gap-4 text-sm">
                        <ul className="flex flex-col gap-3">
                            <NavLink onClick={() => setMenuOpen(false)} href={`/`}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink onClick={() => setMenuOpen(false)} href={`/all-appointments`}>
                                <li>All Appointments</li>
                            </NavLink>
                            {
                                session ?
                                    <>
                                        <NavLink onClick={() => setMenuOpen(false)} href={`/dashboard`}>
                                            <li>Dashboard</li>
                                        </NavLink>
                                    </> :
                                    <>
                                    </>
                            }
                        </ul>
                        <div className="flex items-center gap-3">
                            {
                                session ?
                                    isPending ?
                                        <>
                                            <Button isPending>
                                                {({ isPending }) => (
                                                    <>
                                                        {isPending ? <Spinner color="current" size="sm" /> : null}
                                                        Loading...
                                                    </>
                                                )}
                                            </Button>
                                        </> :
                                        <>
                                            <Button onClick={handleLogout} variant='danger'>Logout</Button>
                                        </> :
                                    <>
                                        <Link href={`/register`} className='hidden md:flex'>
                                            <Button>Register</Button>
                                        </Link>

                                        <Link href={`/login`} className='hidden md:flex'>
                                            <Button className={`btn-outline`} variant='outline'>Login</Button>
                                        </Link>
                                    </>
                            }
                        </div>
                    </div >
                )
            }
        </header >
    );
};

export default Navbar;