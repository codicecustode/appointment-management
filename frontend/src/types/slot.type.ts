export interface Slot {
  id: number;
  visitingTime: string;
  slotNumber: number;
  status: 'available' | 'booked';
}
