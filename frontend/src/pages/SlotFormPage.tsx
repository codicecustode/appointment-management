import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import BookSlotForm from '../components/forms/BookSlotForm'
import { ISlotForm } from '../types/slot.form.type'


const SlotFormPage = () => {

  const { slotNumber, doctorId } = useParams();
  const location = useLocation();
  const slotTime = location.state ? location.state.slotTime : '';
  const [formData, setFormData] = useState<ISlotForm>({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    visitingTime: slotTime || '', 
    slotNumber: Number(slotNumber) || -1,
    doctorId: doctorId || '',
  });

  const handleSubmit = (formData: ISlotForm) => {
    //make  a post req to the server to store the booking
    
    console.log('Form Data', formData); 
  }
  return (
    <div className="container">
      <BookSlotForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
    </div>
  )
}

export default SlotFormPage