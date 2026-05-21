'use client'
import ServiceCard from '@/components/cards/ServiceCard';
import React from 'react';
import { motion } from "framer-motion";

const services = [
    {
        id: 1,
        title: "Cardiology Care",
        description: "Diagnosis and treatment for heart-related conditions and overall cardiovascular health."
    },
    {
        id: 2,
        title: "Pediatric Services",
        description: "Comprehensive healthcare and wellness support for infants, children, and teenagers."
    },
    {
        id: 3,
        title: "Mental Health Support",
        description: "Professional counseling and therapy services for emotional and mental well-being."
    },
    {
        id: 4,
        title: "Dermatology Clinic",
        description: "Skin, hair, and nail treatments including acne, allergies, and cosmetic care."
    },
    {
        id: 5,
        title: "Orthopedic Treatment",
        description: "Specialized care for bones, joints, muscles, and sports-related injuries."
    },
    {
        id: 6,
        title: "Endocrinology Services",
        description: "Hormone-related diagnosis and treatment including diabetes and thyroid disorders."
    }
];

const Services = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className='services'>
            <div className="section-heading">
                <p className='font-medium'>
                    Services
                </p>

                <h2>
                    How can we help you feel better?
                </h2>
            </div>
            <div className="services-container grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </motion.section>
    );
};

export default Services;