import { useState, useEffect } from "react";

const DeletePatient = () => {

    const [patientId, setPatientId] = useState("");
    const [message, setMessage] = useState("");

    const BASE_URL = "http://localhost:8080/patient";

    const [patient, setPatient] = useState({});

    useEffect(() => {
        fetch(BASE_URL+`/${patientId}`).then(res => res.json()).then(data => setPatient(data));
    }, [patientId]);

    const handleDelete = async (e) => {
        e.preventDefault();
        if(patient==null){
            setMessage("Patient Id is invald");
            return;
        }
        try {
            const res = await fetch(BASE_URL+`/${patientId}`, {
                method: "DELETE",
            });
            setMessage("Record Deleted")
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-3xl">Enter ID of patient:</h1>
        <h1 className="text-2xl text-red-400">{message}</h1>
        <input type="text" value={patientId} onChange={e => setPatientId(e.target.value)} placeholder="Patient ID" className="p-2 my-3 h-10 text-black" />
        <div className="border p-4 mx-2 cursor-pointer hover:bg-white hover:text-black my-2" onClick={handleDelete}>Delete Patient Record</div>
    </div>
}

export default DeletePatient;