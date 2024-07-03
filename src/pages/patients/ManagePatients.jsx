import { Link } from 'react-router-dom';

function ManagePatients() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
            <h1 className='text-white mb-5 text-3xl'>Manage Patients</h1>
            <div className="flex flex-col">
                <Link to="/register-patient">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Register Patient</div>
                </Link>
                <Link to="/delete-patient">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Delete Patient</div>
                </Link>
                <Link to="/list-patients">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">List All Patients</div>
                </Link>
            </div>
        </div>
    );
};

export default ManagePatients;
