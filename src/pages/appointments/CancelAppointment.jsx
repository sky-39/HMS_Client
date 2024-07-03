import { useState, useEffect } from "react";

const CancelAppointment = () => {

    const [appointmentId, setAppointmentId] = useState("");
    const [message, setMessage] = useState("");

    const BASE_URL = "http://localhost:8080/appointment";

    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(BASE_URL+`/${appointmentId}`).then(res => res.json()).then(data => setAppointment(data));
    }, [appointmentId]);

    const handleDelete = async (e) => {
        e.preventDefault();
        if(appointment==null){
            setMessage("Appointment ID is invalid");
            return;
        }
        try {
            const res = await fetch(BASE_URL+`/${appointmentId}`, {
                method: "DELETE",
            });
            setMessage("Appointment Cancelled")
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl">Enter Appointment ID:</h1>
        <h1 className="text-2xl text-red-400">{message}</h1>
        <input type="text" value={appointmentId} onChange={e => setAppointmentId(e.target.value)} placeholder="Appointment ID" className="p-2 my-3 h-10 text-black" />
        <div className="border p-4 mx-2 cursor-pointer hover:bg-white hover:text-black my-2" onClick={handleDelete}>Cancel Appointment Record</div>
    </div>
}

export default CancelAppointment;