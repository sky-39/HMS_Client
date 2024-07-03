import { useState, useEffect } from "react";
import axios from "axios";

const ListPrescription = () => {

    const [doctorId, setDoctorId] = useState(0);
    const [prescriptionList, setPrescriptionList] = useState([]);
    const [message, setMessage] = useState("");

    const BASE_URL = "http://localhost:8080/prescription";

    useEffect(() => {
        axios.get(BASE_URL + `/${doctorId}`).then(response => {
            setPrescriptionList(response.data);
        });
    }, [doctorId]);
    console.log(prescriptionList);

    return <div className="flex h-screen w-screen flex-col items-center justify-start bg-black text-white">
        <h1 className="text-3xl mt-5 mb-2">Enter doctor Id:</h1>
        <h1 className="my-2 text-green-300 text-2xl">{message}</h1>
        <input type="number" name="doctorId" placeholder="Enter Doctor Id" className="my-3 h-12 px-2 text-black" value={doctorId} onChange={e => setDoctorId(e.target.value)} />
        <div className="w-full mt-4">
            <div className="flex flex-row w-full justify-evenly">
                <div className="mx-2">Prescription ID</div>
                <div className="mx-2">Doctor Id</div>
                <div className="mx-2">Doctor Name</div>
                <div className="mx-2">Patient Id</div>
                <div className="mx-2">Patient Name</div>
                <div className="mx-2">Remarks</div>
            </div>
            {prescriptionList.map((prescription)=> {
                return (
                    <div className="flex flex-row w-full justify-evenly text-left">
                        <div className="mx-2">{prescription.id}</div>
                        <div className="mx-2">{prescription.appointment.doctor.id}</div>
                        <div className="mx-2">{prescription.appointment.doctor.name}</div>
                        <div className="mx-2">{prescription.appointment.patient.id}</div>
                        <div className="mx-2">{prescription.appointment.patient.name}</div>
                        <div className="mx-2">{prescription.remarks}</div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default ListPrescription;