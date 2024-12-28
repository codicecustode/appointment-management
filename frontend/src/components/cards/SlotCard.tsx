import React from 'react';

import { Slot } from '../../types/slot.type';

interface SlotCardProps {
  slot: Slot;
  selectedSlot: Slot | null;
  setSelectedSlot: (selectedSlot: Slot) => void;
}

const SlotCard: React.FC<SlotCardProps> = ({ slot, selectedSlot, setSelectedSlot }) => {

  const isBooked = slot.status === 'booked';
  const isCurrSlotSelected = selectedSlot?.slotNumber === slot.slotNumber;
  
  return (
    <div
      className={`relative w-32 h-20 p-2 m-2 rounded-lg shadow-md cursor-pointer 
        ${isBooked ? 'bg-red-400' : 'bg-green-500 '}
        ${isCurrSlotSelected ? 'bg-red-400' : 'bg-green-500 hover:bg-green-600'}`}
      onClick={() => !isBooked && setSelectedSlot(slot)}
    >
      {/* Tooltip Container */}
      <div className={`absolute bottom-0 left-0 w-full text-center text-white text-sm p-1 
        ${isBooked ? 'bg-red-500' : 'bg-green-700'}
        ${isCurrSlotSelected ? 'bg-red-500' : 'bg-green-700'}
       `}>
        {isBooked ? 'Slot Booked' : isCurrSlotSelected ? 'Selected' : 'Click to select'}

      </div>

      {/* Slot Content */}
      <div className="text-center text-white font-semibold">
        <div>{slot.time}</div>
        <div className="text-sm">{`Slot #${slot.slotNumber}`}</div>
      </div>
    </div>
  );
};

export default SlotCard;

