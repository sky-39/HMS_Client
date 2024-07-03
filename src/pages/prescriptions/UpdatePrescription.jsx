import { useState } from "react";

const UpdatePrescription = () => {

    const [prescriptionId, setPrescriptionId] = useState(0);
    const [remarks, setRemarks] = useState("");
    const [message, setMessage] = useState("");

    const BASE_URL = "http://localhost:8080/prescription";


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(BASE_URL+`/${prescriptionId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({remarks}),
            });
            if(res.status==200){
                setMessage("Remarks Updated")
            }
            else{
                setMessage("Prescription id is invalid")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
    <h1 className="text-3xl mb-5">Enter prescription Id and remarks:</h1>
    <h1 className="my-2 text-green-300 text-2xl">{message}</h1>
    <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="number" name="prescriptionId" placeholder="Enter prescription id" className="my-3 h-12 px-2 text-black" value={prescriptionId} onChange={e => setPrescriptionId(e.target.value)}/>
            <input type="text" name="remarks" placeholder="Enter remarks" className="my-3 h-12 px-2 text-black" value={remarks} onChange={e => setRemarks(e.target.value)}/>
            <button type="submit" className="border p-3 mx-2 cursor-pointer hover:bg-white hover:text-black my-2 flex justify-center">Add record</button>
        </form>
    </div>
</div>
}

export default UpdatePrescription;