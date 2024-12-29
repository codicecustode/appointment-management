import React from 'react';

// Define the Patient interface with the new fields
interface Patient {
  name: string;
  age: number;
  address: string;
  phoneNumber: string;
  email: string;
}

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <div className="w-64 h-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="p-4 flex flex-col justify-between h-full">
        {/* Heading */}
        <h3 className="text-lg font-bold text-gray-800 mb-4">Appointment Request</h3>
        
        {/* Patient Details */}
        <h2 className="text-xl font-semibold text-gray-800">{patient.name}</h2>
        <p className="text-sm text-gray-500 mt-1">Age: {patient.age}</p>
        <p className="text-sm text-gray-500 mt-1">Address: {patient.address}</p>
        <p className="text-sm text-gray-500 mt-1">Phone: {patient.phoneNumber}</p>
        <p className="text-sm text-gray-600 mt-1">Email: {patient.email}</p>
        
        {/* Action Buttons */}
        <div className="mt-4 flex justify-between gap-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 w-full"
            onClick={() => alert(`Approved ${patient.name}`)}
          >
            Approve
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 w-full"
            onClick={() => alert(`Rejected ${patient.name}`)}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
