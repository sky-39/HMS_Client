import { useEffect, useState } from "react";
import axios from "axios";

const ReScheduleAppointment = () => {

    const [appointmentId, setAppointmentId] = useState(0);
    const [newAppointmentTime, setNewAppointmentTime] = useState("");

    const [message, setMessage] = useState("");

    const BASE_URL = "http://localhost:8080/appointment";

    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(BASE_URL+`/${appointmentId}`).then(res => res.json()).then(data => setAppointment(data));
    }, [appointmentId]);
    console.log(appointment);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if(appointment==null){
            setMessage("Appointment Id is invalid");
            return;
        }
        try {
            const res = await fetch(BASE_URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({doctor: appointment.doctor, patient: appointment.patient, appointmentTime: newAppointmentTime}),
            });
            
            if(res.status==400){
                setMessage("Detials are not correct! Either doctor is not available or patient details are incorrect");
                return;
            }
            else{
                const res1 = await fetch(BASE_URL+`/${appointmentId}`, {
                    method: "DELETE",
                });
                setMessage("Appointment is Rescheduled");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="flex h-screen w-screen flex-col items-center bg-black text-white justify-center">
        <h1 className="text-white text-3xl">Reschedule any appointment:</h1>
        <h1 className="my-2 text-green-300 text-2xl">{message}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input name="appointmentId" type="number" value={appointmentId} placeholder="Enter Appointment Id" className="my-2 text-black p-4" onChange={e => setAppointmentId(e.target.value)}/>
            <input name="appointmentTime" type="datetime-local" value={newAppointmentTime} placeholder="Choose new date and time" className="my-2 text-black p-4" onChange={e => setNewAppointmentTime(e.target.value)}/>
            <button type="submit" className="border p-3 mx-2 cursor-pointer hover:bg-white hover:text-black my-2 flex justify-center">Reschedule Appointment</button>
        </form>
    </div>
}
export default ReScheduleAppointment;