import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { queryClient } from './services/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { DoctorPage } from './pages/DoctorPage'
import Navbar from './components/Navbar'
import SlotsPage from './pages/SlotPage'
import SlotFormPage from './pages/SlotFormPage'
import PaymentPage from './pages/PaymentPage'
import ErrorPage from './pages/ErrorPage'
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/appointments" element={<h1>appointments</h1>} />
          <Route path="/doctors" element={<DoctorPage />} />
          <Route path="/doctors/:doctorId/slots" element={<SlotsPage />} />
          <Route path="/doctors/:doctorId/slots/:slotNumber/fill-details" element={<SlotFormPage />} />
          <Route path="/api/v1/appointments/:id/payment" element={<PaymentPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )

}

export default App
