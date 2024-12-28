import { useQuery } from '@tanstack/react-query';
import { getAllDoctors } from '../api/doctorsApi';
import { Doctor } from '../types/doctor.type';
export const useDoctor = () => {
  return useQuery<Doctor[]>({
    queryKey: ['doctors'],
    queryFn: getAllDoctors
  });
}

