import React from 'react';
import perfil from "@/assets/descarga.jpg";

const ProfessionalCard = ({ name, description, scrollTo }) => {
    return (
        <div className="rounded overflow-hidden shadow-lg mb-8 mx-auto flex flex-row items-center" style={{ backgroundColor: '#0b5767' }}>
            <div className="relative">
                <img
                    src={perfil.src}
                    alt={name}
                    width={150}
                    height={150}
                    className="rounded-full ml-4"
                />
            </div>
            <div className="flex-grow px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{name}</div>
                <p className="text-gray-700 text-base mb-4 text-white">{description}</p>
                {/* Llama a la función scrollTo al hacer clic en el botón "Saber más" */}
                <button onClick={scrollTo} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" style={{ backgroundColor: '#35c7c4' }}>Saber más</button>
            </div>
        </div>
    );
};
ProfessionalCard.displayName = 'ProfessionalCard';

const ProfesionalSonia = React.forwardRef(({ scrollToSonia }, ref) => {
    return (
        <div ref={ref}>
            <ProfessionalCard
                name="Sonia Castillo"
                description="Soy kinesióloga y esteticista con una pasión por el cuidado del cuerpo y la mente. Conmigo, recibirás atención personalizada y tratamientos de alta calidad para mejorar tu bienestar general."
                scrollTo={scrollToSonia}
            />
        </div>
    );
});
ProfesionalSonia.displayName = 'ProfesionalSonia';

const ProfesionalFernanda = React.forwardRef(({ scrollToFernanda }, ref) => {
    return (
        <div ref={ref}>
            <ProfessionalCard
                name="Fernanda Astorga"
                description="Soy podóloga y enfermera dedicada a proporcionarte el mejor cuidado para tus pies. Mi objetivo es ayudarte a caminar con comodidad y confianza, brindándote tratamientos efectivos y personalizados."
                scrollTo={scrollToFernanda}
            />
        </div>
    );
});

ProfesionalFernanda.displayName = 'ProfesionalFernanda';
export { ProfesionalSonia, ProfesionalFernanda };
