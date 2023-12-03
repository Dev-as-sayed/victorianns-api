import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

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


    return (
        <div className="m-8 p-10 pt-3 rounded-lg bg-orange-400 bg-opacity-5 ">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl text-black my-3">All Bookings</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full border-2 border-black ">
                    {/* head */}
                    <thead className="border-b-2 border-black">
                        <tr className="text-black">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBookings.map((booking, index) => <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.userEmail}</td>
                                <td>{booking.age}</td>
                                <td>{booking.phone}</td>
                                <td>
                                    <Link to={`/detail/${booking.constestId}`}>
                                        <button className="btn btn-info btn-sm" ><BiDetail className="text-white"></BiDetail> Details</button>
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