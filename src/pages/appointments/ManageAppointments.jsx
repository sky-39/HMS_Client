import { Link } from 'react-router-dom';

function ManageAppointments() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
            <h1 className='text-white mb-5 text-3xl'>Manage Appointments</h1>
            <div className="flex flex-col">
                <Link to="/schedule-appointment">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Schedule Appointments</div>
                </Link>
                <Link to="/reschedule-appointment">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Reschedule Appointment</div>
                </Link>
                <Link to="/cancel-appointment">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Cancel Appointment</div>
                </Link>
                <Link to="/list-appointments">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">List All Appointments</div>
                </Link>
            </div>
        </div>
    );
};

export default ManageAppointments;
