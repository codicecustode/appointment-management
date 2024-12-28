import { ISlotForm } from '../../types/slot.form.type';
interface FormProps {
  formData: ISlotForm;
  setFormData: (formData: ISlotForm) => void;
  onSubmit: (formData: ISlotForm) => void;
}
const BookSlotForm: React.FC<FormProps> = ({ formData, setFormData, onSubmit }) => {
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   onSubmit(formData);
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Book Your Slot</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Patient Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            placeholder="Enter Patient name"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Patient Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="patientEmail"
            value={formData.patientEmail}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Patient Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="patientPhone"
            value={formData.patientPhone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Visiting Time (Read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Visiting Time</label>
          <input
            type="datetime-local"
            name="visitingTime"
            value={formData.visitingTime}
            readOnly // Fixed value
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Slot Number (Read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Slot Number</label>
          <input
            type="number"
            name="slotNumber"
            value={formData.slotNumber}
            readOnly // Fixed value
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Confirm Booking Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );

}

export default BookSlotForm;