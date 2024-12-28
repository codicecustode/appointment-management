export interface Slot {
  id: number;
  time: string;
  slotNumber: number;
  status: 'available' | 'booked';
}
