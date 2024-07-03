import { useState, useEffect } from "react";

const DeleteDoctor = () => {

    const [doctorId, setDoctorId] = useState("");
    const [message, setMessage] = useState("");

    const BASE_URL = "http://localhost:8080/doctor";

    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        fetch(BASE_URL+`/${doctorId}`).then(res => res.json()).then(data => setDoctor(data));
    }, [doctorId]);

    const handleDelete = async (e) => {
        e.preventDefault();

        if(doctor==null){
            setMessage("Doctor Id is invalid");
            return;
        }
        try {
            const res = await fetch(BASE_URL+`/${doctorId}`, {
                method: "DELETE",
            });
            setMessage("Record Deleted")
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl">Enter ID of Doctor:</h1>
        <h1 className="text-2xl text-red-400">{message}</h1>
        <input type="text" value={doctorId} onChange={e => setDoctorId(e.target.value)} placeholder="Doctor ID" className="p-2 my-3 h-10 text-black" />
        <div className="border p-4 mx-2 cursor-pointer hover:bg-white hover:text-black my-2" onClick={handleDelete}>Delete Doctor Record</div>
    </div>
}

export default DeleteDoctor;