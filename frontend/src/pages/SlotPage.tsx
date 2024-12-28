import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SlotCard from '../components/cards/SlotCard'
import { useSlot } from '../hooks/useSlot'
import { useParams, Outlet } from 'react-router-dom'

import { Slot } from '../types/slot.type'
const SlotsPage = () => {
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const { doctorId } = useParams();
  const { isLoading, error, data } = useSlot(doctorId || '');

  const navigate = useNavigate();
  const handleBook = (selectedSlot: Slot | null) => {
    const slotNumber = selectedSlot?.slotNumber;
    const slotTime = selectedSlot?.time;
    
    if (selectedSlot) {
      navigate(`/doctors/${doctorId}/slots/${slotNumber}/fill-details`, {
        state: { slotTime }
      });
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log('check',selectedSlot);

  return (
    <div className="container">
      <h1>Slots detils</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((slot) => (
          <SlotCard
            key={slot.id}
            slot={slot as Slot}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        ))}
      </div>


      {(
        <div
          className="text-center text-black font-semibold cursor-pointer"
          onClick={() => handleBook(selectedSlot)}
        >Proceed with selection</div>
      )}
      <Outlet />
    </div>
  )
}

export default SlotsPage
