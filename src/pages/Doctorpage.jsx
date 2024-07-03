import { Link } from "react-router-dom";
const Doctorpage = () => {
    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <h1 className='text-white mb-5 text-3xl'>Manage Patients</h1>
        <div className="flex flex-col">
            <Link to="/add-prescription">
                <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Add record</div>
            </Link>
            <Link to="/update-prescription">
                <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Update record</div>
            </Link>
            <Link to="/delete-prescription">
                <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">Remove record</div>
            </Link>
            <Link to="/list-prescription">
                <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black my-2">See all prescriptions</div>
            </Link>
        </div>
    </div>
}

export default Doctorpage;