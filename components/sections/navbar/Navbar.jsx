'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import PrimaryButton from '../../ui/btn/PrimaryButton';
import BtnOutline from '../../ui/btn/BtnOutline';
import NavLink from './NavLink';
import Image from 'next/image';
import logo from '@/public/assets/logo.svg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className='sticky top-0 z-1000 w-full bg-bg-secondary/10 border-b border-gray-200 backdrop-blur-sm'>
            <nav className='navbar w-11/12 mx-auto flex-between py-4 bg-bg-secondary/70 backdrop-blur-sm'>
                <div className="logo flex-center gap-1">
                    <Image src={logo} width={44} height={44} alt='Clinovo'></Image>
                    <div>
                        <p className='text-xl'><span className='text-primary font-bold'>Clin</span><span className='text-text font-bold'>ovo</span></p>
                    </div>
                </div>

                <div className="nav-links hidden md:flex">
                    <ul className='flex-between gap-8'>
                        <NavLink href={`/`}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink href={`/all-appointments`}>
                            <li>All Appointments</li>
                        </NavLink>
                        <NavLink href={`/dashboard`}>
                            <li>Dashboard</li>
                        </NavLink>
                    </ul>
                </div>

                <div className="button flex-center gap-1">
                    <Link href={`/register`} className='hidden md:flex'>
                        <PrimaryButton>
                            <button>
                                Register
                            </button>
                        </PrimaryButton>
                    </Link>

                    <Link href={`/login`} className='hidden md:flex'>
                        <BtnOutline>
                            <button className="btn">Login</button>
                        </BtnOutline>
                    </Link>

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
                    <div className="md:hidden w-full border-t border-gray-200 backdrop-blur-sm bg-bg-secondary/50 p-5 flex flex-col gap-4 text-sm">
                        <ul className="flex flex-col gap-3">
                            <li><Link href={"/"} onClick={() => setMenuOpen(false)} className="nav-link">Home</Link></li>
                            <li><Link href={"/all-tiles"} onClick={() => setMenuOpen(false)} className="nav-link">All Appointments</Link></li>
                            <li><Link href={"/profile"} onClick={() => setMenuOpen(false)} className="nav-link">Dashboard</Link></li>
                        </ul>
                        <div className="flex items-center gap-3">
                            <>
                                <PrimaryButton>
                                    <Link href={"/register"} onClick={() => setMenuOpen(false)}>
                                        <PrimaryButton>
                                            <button>
                                                Register
                                            </button>
                                        </PrimaryButton>
                                    </Link>
                                </PrimaryButton>
                                <BtnOutline className='btn-slite-primary'>
                                    <Link href={"/login"} onClick={() => setMenuOpen(false)}>
                                        <BtnOutline>
                                            <button className="btn">Login</button>
                                        </BtnOutline>
                                    </Link>
                                </BtnOutline>
                            </>
                        </div>
                    </div>
                )
            }
        </header >
    );
};

export default Navbar;