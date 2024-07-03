import { useEffect, useState } from "react";
import axios from "axios";

const AppointmentList = () => {

    const [appointmentList, setAppointments] = useState([]);

    const BASE_URL = "http://localhost:8080/appointment";

    useEffect(() => {
        axios.get(BASE_URL).then(response => {
            setAppointments(response.data);
        });
    }, []);
    console.log(appointmentList);


    return <div className="flex h-screen w-screen flex-col items-center bg-black text-white pt-10">
        <div className="flex flex-row w-full justify-evenly">
            <div className="mx-2">ID</div>
            <div className="mx-2">PatientID</div>
            <div className="mx-2">Patient Name</div>
            <div className="mx-2">DoctorID</div>
            <div className="mx-2">Doctor Name</div>
            <div className="mx-2">Date/Time</div>
        </div>
        {appointmentList.map((appointment) => {
            return (
                <div className="flex flex-row w-full justify-evenly text-left">
                    <div className="mx-2">{appointment.id}</div>
                    <div className="mx-2">{appointment.patient.id}</div>
                    <div className="mx-2">{appointment.patient.name}</div>
                    <div className="mx-2">{appointment.doctor.id}</div>
                    <div className="mx-2">{appointment.doctor.name}</div>
                    <div className="mx-2">{appointment.appointmentTime}</div>
                </div>
            )
        })}
    </div>
}

export default AppointmentList;