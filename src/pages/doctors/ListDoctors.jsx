import { useEffect, useState } from "react";
import axios from "axios";

const DoctorList = () => {

    const [doctorList, setDoctorList] = useState([]);

    const BASE_URL = "http://localhost:8080/doctor";

    useEffect(() => {
        axios.get(BASE_URL).then(response => {
            setDoctorList(response.data);
        });
    }, []);
    console.log(doctorList);


    return <div className="flex h-screen w-screen flex-col items-center pt-10 bg-black text-white">
        <div className="flex flex-row w-1/3 justify-evenly">
            <div className="mx-2">ID</div>
            <div className="mx-2">Name</div>
            <div className="mx-2">Speciality</div>
        </div>
        {doctorList.map((doctor) => {
            return (
                <div className="flex flex-row w-1/3 justify-evenly text-left">
                    <div className="mx-2">{doctor.id}</div>
                    <div className="mx-2">{doctor.name}</div>
                    <div className="mx-2">{doctor.speciality}</div>
                </div>
            )
        })}
    </div>
}

export default DoctorList;