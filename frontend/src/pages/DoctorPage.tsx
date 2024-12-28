import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import DoctorCard from '../components/cards/DoctorCard';
import { useDoctor } from '../hooks/useDoctor';
import { Doctor } from '../types/doctor.type';
import { useNavigate, Outlet } from 'react-router-dom';
export const DoctorPage = () => {
  const navigate = useNavigate();
  const { isPending, error, data } = useDoctor();
  
  const doctors: Doctor[] = data?.doctors || [];

  const handleBook = (doctorId: string) => {
    
    navigate(`/doctors/${doctorId}/slots`);
  }
  
  return (
    <>
    <div className="container">
      <h1>Doctors</h1>
      {isPending && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.uniqueId} doctor={doctor} onBook={()=>handleBook(doctor.uniqueId)} />
        ))}
      </div>
      <Outlet />
    </div>
    </>
  )
};
