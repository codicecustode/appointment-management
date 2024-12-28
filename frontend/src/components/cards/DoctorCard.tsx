import React from 'react';
import { Doctor } from '../../types/doctor.type.ts';
// Define the Doctor interface


interface DoctorCardProps {
  doctor: Doctor;
  onBook: (id: string) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBook } ) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <img
        className="w-full h-56 object-cover"
        src="https://via.placeholder.com/500" // Add an actual image URL
        alt="Doctor"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-800">{doctor.name}</h2>
        <p className="text-lg text-gray-500">{doctor.speciality}</p>
        <p className="text-md text-gray-600 mt-2">Hospital: {doctor.hospital}</p>
        <p className="text-md text-gray-600 mt-2">Location: {doctor.location}</p>
        <p className="text-sm text-gray-500 mt-2">ID: {doctor.uniqueId}</p> {/* Unique ID */}
        <div className="mt-4 flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => onBook(doctor.id)}
          >
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;