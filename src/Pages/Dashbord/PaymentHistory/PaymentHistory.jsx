import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
// import SinglePayment from "./SinglePayment";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const url = `/getAllPayment`;

    const { data: paymentHistory = [] } = useQuery({
        queryKey: [ "paymentHistory" ],
        queryFn: async () => {
            const res = await axiosSecure.get( url )
            return res.data
        }
    })

    return(
        <div className="m-8 p-10 pt-3 rounded-lg bg-orange-400 bg-opacity-5 ">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl text-black my-3">All Paymnets</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full border-2 border-black ">
                    {/* head */}
                    <thead className="border-b-2 border-black">
                        <tr className="text-black">
                            <th className="text-xl text-gray-400">#</th>
                            <th>Email & Date</th>
                            <th>Payments</th>
                            <th>Payed Contest</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((paymetns, index) => <tr key={paymetns._id}>
                                <th>{index + 1}</th>
                                <td>{paymetns.email} <br /> {paymetns.date} </td>
                                <td>Amount: {paymetns.price} <br />{paymetns.transactionId}</td>
                                <td className="text-center">{paymetns.payedContestIds.length}</td>
                                <td>
                                    <Link to={`/dashbord/payedContests/${ paymetns.payedContestIds}`}>
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

export default PaymentHistory;