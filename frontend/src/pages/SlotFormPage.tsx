import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import BookSlotForm from '../components/forms/BookSlotForm'
import { ISlotForm } from '../types/slot.form.type'
import { createSlot } from '../api/slotApi'


const SlotFormPage = () => {

  const navigate = useNavigate();
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

  const handleSubmit = async (formData: ISlotForm) => {
    //make  a post req to the server to store the booking
    try {
      const  response = await createSlot(formData);
      if ('status' in response && response.status === 200) {
        navigate(`/api/v1/appointments/${doctorId}/payment`);
      }else {
        console.log(response);
        navigate('/error');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <BookSlotForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
    </div>
  )
}

export default SlotFormPage