import { useState } from 'react'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Staffpage from './pages/Staffpage'
import Doctorpage from './pages/Doctorpage'
import ManageDoctors from './pages/doctors/ManageDoctors'
import ManagePatients from './pages/patients/ManagePatients'
import ManageAppointments from './pages/appointments/ManageAppointments'
import PatientList from './pages/patients/ListPatients'
import DeletePatient from './pages/patients/DeletePatient'
import RegisterPatient from './pages/patients/RegisterPatient'
import ListDoctors from './pages/doctors/ListDoctors'
import AddDoctor from './pages/doctors/AddDoctor'
import DeleteDoctor from './pages/doctors/DeleteDoctor'
import ListAppointment from './pages/appointments/ListAppointment'
import ScheduleAppointment from './pages/appointments/ScheduleAppointment'
import ReScheduleAppointment from './pages/appointments/RescheduleAppointment'
import CancelAppointment from './pages/appointments/CancelAppointment'
import ListPrescription from './pages/prescriptions/ListPrescription'
import AddPrescription from './pages/prescriptions/AddPrescription'
import UpdatePrescription from './pages/prescriptions/UpdatePrescription'
import DeletePrescription from './pages/prescriptions/DeletePrescription'

function App() {

  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/staff" element={<Staffpage />} />
        <Route path="/doctor" element={<Doctorpage />} />
        <Route path="/staff/manage-doctors" element={<ManageDoctors />} />
        <Route path="/staff/manage-patients" element={<ManagePatients />} />
        <Route path="/staff/manage-appointments" element={<ManageAppointments />} />
        <Route path="list-patients" element={<PatientList />} />
        <Route path="delete-patient" element={<DeletePatient />} />
        <Route path="register-patient" element={<RegisterPatient />} />
        <Route path="list-doctors" element={<ListDoctors />} />
        <Route path="add-doctor" element={<AddDoctor/>}/>
        <Route path="delete-doctor" element={<DeleteDoctor/>}/>
        <Route path="list-appointments" element={<ListAppointment />} />
        <Route path="schedule-appointment" element={<ScheduleAppointment />} />
        <Route path="reschedule-appointment" element={<ReScheduleAppointment />} />
        <Route path="cancel-appointment" element={<CancelAppointment />} />
        <Route path="add-prescription" element={<AddPrescription />} />
        <Route path="update-prescription" element={<UpdatePrescription />} />
        <Route path="delete-prescription" element={<DeletePrescription />} />
        <Route path="list-prescription" element={<ListPrescription />} />
      </Routes>
    </div>
  )
}

export default App
