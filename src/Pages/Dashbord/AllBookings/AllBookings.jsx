import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { BiDetail } from "react-icons/bi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllBookings = () => {
    const axiosSecure = useAxiosSecure();
    const url = '/getAllBookings'
    const {data: allBookings = [], refetch} = useQuery({
        queryKey: ['allBookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(url, {withCredentials: true})
            return res.data;
        }
    })
    console.log(allBookings);

    const handelAproved = ( booking ) => {
        console.log(booking._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to approved..!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/approvedBooking/${booking?._id}`)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                          title: "Done",
                          text: "Your convated has been admin.",
                          icon: "success"
                        });
                        refetch();
                    })
            }
          });
    }


    const handelRejact = ( booking ) => {
        console.log(booking._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to reject..!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/rejactBookin/${booking?._id}`)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                          title: "Done",
                          text: "Your convated has been admin.",
                          icon: "success"
                        });
                        refetch();
                    })
            }
          });
    }


    const totalPayment = allBookings.reduce( (total, bookings) => total + bookings.price, 0)

    return (
        <div className="m-8 p-10 pt-3 rounded-lg bg-orange-400 bg-opacity-5 ">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl text-black my-3">All Bookings</h2>
            </div>
            <div className="overflow-x-auto">
                <h2 className="text-center my-4 text-xl font-bold">totalPayment: {totalPayment} $</h2>
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
                            allBookings.map((booking, index) => <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <td>{booking.name} <br /> {booking.phone}</td>
                                <td>{booking.email} <br /> contect: {booking.contectEmail}</td>
                                <td>{booking.age} <br /> {booking.price}</td>
                                <td>{booking.transactionId} <br /> {booking.date}</td>
                                <td className="text-black font-bold">{booking.stateus} <br /> 
                                    <span className="flex mt-2">
                                        <button onClick={() => handelAproved(booking)}><AiOutlineCheckCircle className="w-6 h-6 mr-2 text-green-600"/></button>
                                        <button onClick={() => handelRejact(booking)}><AiOutlineCloseCircle className="w-6 h-6 text-red-600" /></button> 
                                    </span> 
                                </td>
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

export default AllBookings;