import Image from 'next/image';
import React from 'react';
import doc from '@/public/assets/doc2.svg'

const About = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-6 flex justify-center">
                        <div className="relative w-full max-w-lg bg-[#FBFBFA] rounded-2xl p-6 shadow-lg overflow-hidden">
                            <div className="rounded-lg overflow-hidden">
                                <Image src={doc} width={520} height={520} alt="Doctor" className="w-full h-auto object-cover" />
                            </div>
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"></div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="text-sm text-primary font-semibold uppercase mb-3">About Us</div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-accent mb-4 max-w-md">Understand who we are and why we exist</h2>

                        <div className="flex items-start">
                            <p className="max-w-md">
                                We are committed to connecting patients with trusted healthcare professionals through a simple and reliable platform. Our mission is to make quality medical consultation accessible, convenient, and stress-free, helping people make informed decisions about their health with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;