import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import useMyBookings from "../../../Hooks/useMyBookings/useMyBookings";



const MyBookings = () => {
    const [ myBookings, refetch] = useMyBookings()

    // payment related
    console.log(myBookings.length);
    const paymentAmount = myBookings.length * 20;
    console.log(paymentAmount);


    
    return (
        <div className="m-8 p-10 pt-3 rounded-lg bg-orange-400 bg-opacity-5 ">
            <div className="text-center my-4">
                <h2 className="text-3xl text-black my-3">My Bookings</h2>
                <p>20$ pay for par contest</p>
            </div>
            {
                myBookings.length > 0 ?
                <div className="w-1/2 mx-auto my-4 flex justify-between">
                    <h2 className="text-lg font-medium">pay {paymentAmount}$ for {myBookings.length} booked contest</h2>
                    <Link to={`/dashbord/payment/${paymentAmount}`}>
                        <button className="btn btn-primary btn-sm">PAY {paymentAmount}$ </button>
                    </Link>
                </div>
                :
                <>
                    
                </>
            }
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
                            myBookings.map((booking, index) => <tr key={booking._id}>
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


export default MyBookings;