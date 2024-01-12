import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const url = `/getMyBookings/?email=${user.email}`

    const {data: myBookings = [], refetch} = useQuery({
        queryKey: [ "myBookings" ],
        queryFn: async() => {
            const res = await axiosSecure.get(url, {withCredentials: true})
            return res.data
        }
    })

    refetch()
    
    return (
        <div className="m-8 p-10 pt-3 rounded-lg bg-orange-400 bg-opacity-5 ">
            <div className="text-center my-4">
                <h2 className="text-3xl text-black my-3">My Bookings</h2>
                <p>20$ pay for par contest</p>
            </div>
            {
                // myBookings.length > 0 ?
                // <div className="w-1/2 mx-auto my-4 flex justify-between">
                //     <h2 className="text-lg font-medium">pay {paymentAmount}$ for {myBookings.length} booked contest</h2>
                //     <Link to={`/dashbord/payment/${paymentAmount}`}>
                //         <button className="btn btn-primary btn-sm">PAY {paymentAmount}$ </button>
                //     </Link>
                // </div>
                // :
                // <>
                    
                // </>
            }
            <div className="overflow-x-auto">
                <table className="table w-full border-2 border-black ">
                    {/* head */}
                    <thead className="border-b-2 border-black">
                        <tr className="text-black">
                            <th></th>
                            <th>Name/Phone</th>
                            <th>Email</th>
                            <th>Age/Amount</th>
                            <th>Payment</th>
                            <th>Stateus</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings.map((booking, index) => <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <td>{booking.name} <br /> {booking.phone}</td>
                                <td>{booking.email} <br /> contect: {booking.contectEmail}</td>
                                <td>{booking.age} <br /> {booking.price}</td>
                                <td>{booking.transactionId} <br /> {booking.date}</td>
                                <td className="text-red-400 font-bold">{booking.stateus} </td>
                                <td>
                                    <Link to={`/detail/${booking.payedContestIds}`}>
                                        <button className="btn btn-info btn-sm" ><BiDetail className="text-white"></BiDetail> </button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MyBookings;