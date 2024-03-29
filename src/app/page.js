"use client"
import React, { useRef } from 'react';
import Booking from "@/components/booking";
import logo from "@/assets/logo.jpeg";
import { PricingSonia, PricingFernanda } from '@/components/pricing';
import { ProfesionalFernanda, ProfesionalSonia } from '@/components/profesional';

const Home = () => {
    const soniaRef = useRef(null);
    const fernandaRef = useRef(null);

    const scrollToSonia = () => {
        soniaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollToFernanda = () => {
        fernandaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-gray-100 min-h-screen wave-background">
            <div className="container mx-auto p-4 sm:p-8">
                <div className="flex justify-center mb-8">
                    <img
                        src={logo.src}
                        alt="Logo"
                        width={200}
                        height={200}
                        className="rounded-lg"
                    />
                </div>

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold mb-4">Bienvenidos a San Francisco</h1>
                    <p className="text-lg mb-2">
                        San Francisco es un centro de salud integral ubicado en la hermosa ciudad de La Serena. Ofrecemos una variedad de servicios médicos y estéticos, incluyendo kinesiología, enfermería, podología y estética.
                    </p>
                    <p className="text-lg">
                        Nuestro equipo de profesionales altamente capacitados está comprometido con tu bienestar y cuidado personal. Te invitamos a visitarnos y experimentar la excelencia en atención médica y estética.
                    </p>
                </div>

                <h2 className="text-center text-2xl font-bold mb-8">Profesionales</h2>
                <ProfesionalSonia scrollToSonia={scrollToSonia} />
                <ProfesionalFernanda scrollToFernanda={scrollToFernanda} />

                <h2 className="text-center text-2xl font-bold mb-8">Servicios por profesional</h2>
                <div>
                    <div ref={soniaRef}></div>
                    <h3 className="text-center text-xl font-bold mb-4">Servicios de Sonia</h3>
                    <PricingSonia />
                    <div ref={fernandaRef}></div>
                    <h3 className="text-center text-xl font-bold mb-4">Servicios de Fernanda</h3>
                    <PricingFernanda />
                </div>
                <h2 className="text-center text-2xl font-bold mb-8">Agendar cita con profesional</h2>
                <Booking/>
            </div>
        </div>
    );
};

export default Home;
