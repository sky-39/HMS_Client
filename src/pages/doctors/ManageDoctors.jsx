import { Link } from 'react-router-dom';

function ManageDoctors() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
            <h1 className='text-white mb-5 text-3xl'>Manage Doctors</h1>
            <div className="flex flex-col">
                <Link to="/add-doctor">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Add Doctor</div>
                </Link>
                <Link to="/delete-doctor">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Delete Doctor</div>
                </Link>
                <Link to="/list-doctors">
                    <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">List All Doctors</div>
                </Link>
            </div>
        </div>
    );
};

export default ManageDoctors;
