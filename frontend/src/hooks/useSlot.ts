import { useQuery } from '@tanstack/react-query';

import { fetchAllSlots } from '../api/slotApi';

export const useSlot = (doctorId: string) => {
  return useQuery({
    queryKey: ['doctors', doctorId],
    queryFn: () => fetchAllSlots(doctorId)
  })
}

// import { useQuery } from '@tanstack/react-query';

// const hardcodedSlots: { [key: string]: { id:number, time: string; slotNumber: number; status: string; }[] } = {
//   '10': [
//     {
//       id: 1,
//       "slotNumber": 1,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//     {
//       id: 2,
//       "slotNumber": 2,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//     {
//       id: 3,
//       "slotNumber": 3,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//     {
//       id: 4,
//       "slotNumber": 4,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//     {
//       id: 5,
//       "slotNumber": 5,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//     {
//       id: 6,
//       "slotNumber": 6,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//     {
//       id: 7,
//       "slotNumber": 7,
//       "time": "2024-07-05 10:00:00",
//       "status": "booked"
//     },
//     {
//       id: 8,
//       "slotNumber": 8,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//     {
//       id: 9,
//       "slotNumber": 9,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//     {
//       id: 10,
//       "slotNumber": 10,
//       "time": "2024-07-05 10:00:00",
//       "status": "available"
//     },
//   ]
// };

// export const useSlot = (doctorId: string) => {
//   return useQuery({
//     queryKey: ['doctors', doctorId],
//     queryFn: () => {
//       // Simulate fetching slots by returning hardcoded data
//       return hardcodedSlots[doctorId] || []; 
//     }
//   });
// };