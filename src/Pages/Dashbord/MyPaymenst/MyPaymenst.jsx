import { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

const MyPaymenst = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const url = `/getMyPayments/${user?.email}`;

    const { data: myPayment = [] } = useQuery({
        queryKey: [ "myPayment" ],
        queryFn: async () => {
            const res = await axiosSecure.get( url )
            return res.data
        }
    })
    console.log(myPayment);

    return(
        <div className="m-8 p-10 pt-3 rounded-lg bg-orange-400 bg-opacity-5 ">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl text-black my-3">All Paymenst</h2>
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
                            myPayment.map((paymetns, index) => <tr key={paymetns._id}>
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

export default MyPaymenst;