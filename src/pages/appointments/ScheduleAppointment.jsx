import { useState } from "react";

const ScheduleAppointment = () => {

    const [patId, setPatId] = useState(0);
    const [patName, setPatName] = useState("")
    const [patInsuranceId, setPatInsuranceId] = useState("");

    const [docId, setDocId] = useState(0);
    const [docName, setDocName] = useState("");
    const [docSpeciality, setDocSpeciality] = useState("");

    const [appointmentTime, setAppointmentTime] = useState("");

    const [message, setMessage] = useState("");
    

    const BASE_URL = "http://localhost:8080/appointment";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(BASE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({patient:{id:patId,name:patName,insuranceId:patInsuranceId},doctor:{id:docId,name:docName,speciality:docSpeciality}, appointmentTime:appointmentTime}),
            });
            
            if(res.status==400){
                setMessage("Detials are not correct! Either doctor is not available or patient details are incorrect");
                return;
            }
            else{
                setMessage("Appointment is Scheduled");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="flex h-screen w-screen flex-col items-center bg-black text-white justify-center">
        <h1 className="text-white text-3xl">Schedule an Appointment:</h1>
        <h1 className="my-2 text-green-300 text-2xl">{message}</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input name="patient_id" type="number" className="my-2 text-black p-4" placeholder="Enter Patient Id" value={patId} onChange={e => setPatId(e.target.value)}/>
            <input name="patient_name" type="text" className="my-2 text-black p-4" placeholder="Enter Patient Name" value={patName} onChange={e => setPatName(e.target.value)}/>
            <input name="patient_insuranceId" type="text" className="my-2 text-black p-4" placeholder="Enter Patient's Insurance Id" value={patInsuranceId} onChange={e => setPatInsuranceId(e.target.value)}/>
            <input name="doctor_id" type="number" className="my-2 text-black p-4" placeholder="Enter Doctor Id" value={docId} onChange={e => setDocId(e.target.value)}/>
            <input name="doctor_name" type="text" className="my-2 text-black p-4" placeholder="Enter Doctor Name" value={docName} onChange={e => setDocName(e.target.value)}/>
            <input name="doctor_speciality" type="text" className="my-2 text-black p-4" placeholder="Enter Doctor's Speciality" value={docSpeciality} onChange={e => setDocSpeciality(e.target.value)}/>
            <input name="appointmentTime" type="datetime-local" className="my-2 text-black p-4" placeholder="Enter Date/Time" value={appointmentTime} onChange={e => setAppointmentTime(e.target.value)}/>
            <button type="submit" className="border p-3 mx-2 cursor-pointer hover:bg-white hover:text-black my-2 flex justify-center">Schedule the appointment</button>
        </form>

    </div>
}

export default ScheduleAppointment;