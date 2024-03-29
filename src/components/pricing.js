import React from 'react';

const ServiceCard = ({ title, price, description }) => {
    return (
        <div className="service-card mx-2 my-2 sm:mx-0 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 rounded overflow-hidden shadow-lg text-center" style={{ backgroundColor: '#0b5767' }}>
            <div className="px-6 py-4">
                <h2 className="text-center text-white font-bold text-xl mb-2">{title}</h2>
                <div className="text-center text-white text-lg mb-2">{price}</div>
                <p className="text-white text-sm">{description}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" style={{ backgroundColor: '#35c7c4' }}>Seleccionar</button>
            </div>
        </div>
    );
};

const PricingSonia = () => {
    return (
        <div className="flex flex-wrap justify-center sm:justify-between sm:mx-4 lg:mx-8 xl:mx-12">
            <ServiceCard
                title="Servicio A"
                price="$30.00"
                description="Descripción del Servicio A de Sonia."
            />
            <ServiceCard
                title="Servicio B"
                price="$40.00"
                description="Descripción del Servicio B de Sonia."
            />
            <ServiceCard
                title="Servicio C"
                price="$50.00"
                description="Descripción del Servicio C de Sonia."
            />
        </div>
    );
};

const PricingFernanda = () => {
    return (
        <div className="flex flex-wrap justify-center sm:justify-between sm:mx-4 lg:mx-8 xl:mx-12">
            <ServiceCard
                title="Atención a Domicilio"
                price="$25.000 / visita"
                description="Este servicio te ofrece la conveniencia de recibir atención médica directamente en la comodidad de tu hogar. Nuestros profesionales capacitados se desplazarán hasta tu domicilio para proporcionarte la atención que necesitas, asegurando tu comodidad y conveniencia."
            />
            <ServiceCard
                title="Atención en el Local"
                price="$20.000 / sesión"
                description="Nuestro servicio de atención en el local te proporciona una experiencia de alta calidad en nuestro establecimiento. Con equipos modernos y un ambiente cómodo, te brindamos la atención podológica que necesitas para cuidar de tu salud y bienestar de manera efectiva."
            />
            <ServiceCard
                title="Hollywood Peel"
                price="$15.000 / sesión"
                description="El Hollywood Peel es un tratamiento facial avanzado que combina tecnologías innovadoras para ofrecerte una piel radiante y rejuvenecida. Esta limpieza facial profunda elimina las impurezas, reduce los signos de envejecimiento y mejora la textura de tu piel, dejándola suave y luminosa."
            />
        </div>
    );
};

export { PricingSonia, PricingFernanda };
