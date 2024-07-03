import { Link } from "react-router-dom";

function Homepage() {
    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white mb-20">
        <h1 className="text-white mb-5 text-3xl">Welcome to Hospital Management System!!</h1>
        <div className="flex flex-row">
            <Link to="/staff">
                <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black">
                    I'm a Hospital Staff
                </div>
            </Link>
            <Link to="/doctor">
                <div className="border p-5 mx-2 cursor-pointer hover:bg-white hover:text-black">
                    I'm a Doctor
                </div>
            </Link>
        </div>
    </div>
}

export default Homepage;