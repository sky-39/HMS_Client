import { useEffect, useState } from "react";
import axios from "axios";

const PatientList = () => {

    const [patientList, setPatientList] = useState([]);

    const BASE_URL = "http://localhost:8080/patient";

    useEffect(() => {
        axios.get(BASE_URL).then(response => {
            setPatientList(response.data);
        });
    }, []);
    console.log(patientList);


    return <div className="flex h-screen w-screen flex-col items-center pt-10 bg-black text-white">
        <div className="flex flex-row w-1/3 justify-evenly">
            <div className="mx-2">ID</div>
            <div className="mx-2">Name</div>
            <div className="mx-2">InsuranceId</div>
        </div>
        {patientList.map((patient) => {
            return (
                <div className="flex flex-row w-1/3 justify-evenly text-left">
                    <div className="mx-2">{patient.id}</div>
                    <div className="mx-2">{patient.name}</div>
                    <div className="mx-2">{patient.insuranceId}</div>
                </div>
            )
        })}
    </div>
}

export default PatientList;