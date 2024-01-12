import { BiUser, BiPhone, BiIdCard } from "react-icons/bi";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Booking = ({transactionId, contestId}) => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    console.log(contestId);
    const url = `/addInfoPayedContest/${transactionId}`;
    const handelBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const age = form.age.value;
        const contectEmail = form.contectEmail.value;
        const stateus = "varifying" ;

        const bookingDetails ={name, phone, age, contectEmail, stateus};

        axiosSecure.patch(url, bookingDetails)
            .then( res => {
                console.log(res);
                Swal.fire("Booking success..! & varifyig");
                form.reset();
                navigate("/dashbord")
            })

        axiosSecure.patch(`/countBooking/?id=${contestId}`)
            .then(res => console.log(res.data))
    }
    return (
            <div className="w-fit py-20 mx-auto">
                <div className=" bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative transition-all duration-200">
                    <h1 className="text-4xl text-white font-bold  text-center mb-6">add your information</h1>
                    <form onSubmit={handelBooking}>
                        <div className="flex gap-8">
                            <div>
                                <div className="relative my-4">
                                    <input type="text" name="name" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                    <BiUser className="absolute top-4 right-4"/>
                                </div>
                                <div className="relative my-4">
                                    <input type="number" name="phone" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phome</label>
                                    <BiPhone className="absolute top-4 right-4"/>
                                </div>

                            </div>
                            <div>
                                <div className="relative my-4">
                                    <input type="text" name="age" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                                    <BiUser className="absolute top-4 right-4"/>
                                </div>
                                <div className="relative my-4">
                                    <input type="text" name="contectEmail" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contect Email</label>
                                    <BiIdCard className="absolute top-4 right-4"/>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">ADD INFORMATION</button>
                    </form>
                </div>
            </div>
    );
};

export default Booking;