import React from 'react';
import logo from '@/public/assets/logo.svg'
import {
    MdEmail,
    MdPhone,
    MdLocationOn
} from 'react-icons/md';

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="border-t border-base-300 mt-12">

            <div className="container mx-auto px-6 pt-12 pb-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <a
                                href=""
                                className="bg-accent p-2 rounded-lg text-white text-2xl"
                            >
                                <Image src={logo} width={44} height={44} alt='Clinovo'></Image>
                            </a>

                            <h2 className="text-2xl font-bold">
                                <span className="text-primary">Clin</span>
                                <span className="text-accent">ovo</span>
                            </h2>
                        </div>

                        <p className="text-sm text-gray-500 leading-6 max-w-xs">
                            Clinovo — Your trusted platform for instant doctor consultations. Connect with certified specialists 24x7 via video visit or real-time chat, book appointments with ease, and manage your health journey all in one place. Your health, our priority.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <a className="hover:text-accent transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-accent transition">
                                    All Appointments
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-accent transition">
                                    My Bookings
                                </a>
                            </li>

                            <li>
                                <a className="hover:text-accent transition">
                                    Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact
                        </h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-center gap-3">
                                <MdEmail className="text-accent text-lg" />
                                <p>support@clinovo.com</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <MdPhone className="text-accent text-lg" />
                                <p>+880 1234-567890</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <MdLocationOn className="text-accent text-lg mt-1" />
                                <p>Los Angeles, California</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <a className="bg-base-200 hover:bg-accent hover:text-white transition p-3 rounded-full text-lg">
                                <FaFacebookF />
                            </a>

                            <a className="bg-base-200 hover:bg-accent hover:text-white transition p-3 rounded-full text-lg">
                                <FaInstagram />
                            </a>

                            <a className="bg-base-200 hover:bg-accent hover:text-white transition p-3 rounded-full text-lg">
                                <FaTwitter />
                            </a>

                            <a className="bg-base-200 hover:bg-accent hover:text-white transition p-3 rounded-full text-lg">
                                <FaLinkedinIn />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="border-t border-base-300 mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Clinovo. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;