import { useState, useEffect } from "react";

const AddDoctor = () => {

    const [name, setName] = useState("");
    const [speciality, setSpeciality] = useState("");

    const [message, setMessage] = useState("");

    const BASE_URL = "http://localhost:8080/doctor";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, speciality}),
            });
            setMessage("New Doctor Added")
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl mb-5">Enter new doctor details</h1>
        <h1 className="my-2 text-green-300 text-2xl">{message}</h1>
        <div className="flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" name="name" placeholder="Enter doctors name" className="my-3 h-12 px-2 text-black" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="speciality" placeholder="Enter speciality" className="my-3 h-12 px-2 text-black" value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
                <button type="submit" className="border p-3 mx-2 cursor-pointer hover:bg-white hover:text-black my-2 flex justify-center">Register new patient</button>
            </form>
        </div>
    </div>

}
export default AddDoctor;