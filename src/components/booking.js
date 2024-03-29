import React, { useState, useEffect } from 'react';

const Booking = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState('Sonia Castillo');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
    setSelectedDate(today); // Selecciona automáticamente el día actual al cargar el componente
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime('');
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleNameChange = (e) => {
    setPatientName(e.target.value);
  };

  const handleProfessionalChange = (e) => {
    setSelectedProfessional(e.target.value);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime && patientName) {
      const professionalNumber = selectedProfessional === 'Sonia Castillo' ? '+56954573166' : '+56987654321'; // Número de WhatsApp según el profesional
      const message = `Reserva solicitada para ${patientName} con ${selectedProfessional} el ${selectedDate} a las ${selectedTime}.`;
      const whatsappLink = `https://wa.me/${professionalNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  const hours = Array.from({ length: 13 }, (_, i) => `${i + 8}:00`);
  const disabledTimesSonia = ['16:00', '13:00'];
  const disabledTimesFernanda = ['10:00', '14:00'];

  const disabledTimes = selectedProfessional === 'Sonia Castillo' ? disabledTimesSonia : disabledTimesFernanda; // Horarios deshabilitados según el profesional seleccionado

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg text-center" style={{ backgroundColor: '#0b5767' }}>
      <h1 className="text-3xl font-bold mb-4 text-white">Selecciona tu cita</h1>
      <div className="mb-4">
        <label htmlFor="professional" className="block font-medium mb-1 text-white">Profesional:</label>
        <select id="professional" value={selectedProfessional} onChange={handleProfessionalChange} className="border rounded px-2 py-1 w-full">
          <option value="Sonia Castillo">Sonia Castillo</option>
          <option value="Fernanda Astorga">Fernanda Astorga</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1 text-white">Nombre del paciente:</label>
        <input type="text" id="name" value={patientName} onChange={handleNameChange} className="border rounded px-2 py-1 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block font-medium mb-1 text-white">Fecha:</label>
        <input type="date" id="date" min={currentDate} value={selectedDate} onChange={handleDateChange} className="border rounded px-2 py-1 w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block font-medium mb-1 text-white">Hora:</label>
        <select id="time" value={selectedTime} onChange={handleTimeChange} className="border rounded px-2 py-1 w-full">
          <option value="">Selecciona una hora</option>
          {hours.map(time => (
            <option key={time} value={time} disabled={disabledTimes.includes(time)} style={{ color: disabledTimes.includes(time) ? 'red' : 'black' }}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleBooking} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" style={{ backgroundColor: '#35c7c4' }}>Confirmar Reserva</button>
    </div>
  );
};

export default Booking;
