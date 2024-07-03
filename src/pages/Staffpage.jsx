import { Link } from "react-router-dom";

function Staffpage() {
    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <Link to="manage-patients">
            <div className="border p-5 my-2 cursor-pointer hover:bg-white hover:text-black">
                Manage Patients
            </div>
        </Link>
        <Link to="manage-doctors">
            <div className="border p-5 my-2 cursor-pointer hover:bg-white hover:text-black">
                Manage Doctors
            </div>
        </Link>
        <Link to="manage-appointments">
            <div className="border p-5 my-2 cursor-pointer hover:bg-white hover:text-black">
                Manage Appointments
            </div>
        </Link>
    </div>
}

export default Staffpage;