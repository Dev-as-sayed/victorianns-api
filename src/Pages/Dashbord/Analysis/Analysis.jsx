import useAllBookings from "../../../Hooks/useAllBookings/useAllBookings";
import useGetContests from "../../../Hooks/useGetContests/useGetContests";
import TotalUser from "./TotalUser/TotalUser";
import { GrDocumentStore } from "react-icons/gr";
import { TbBrandBooking } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
// import AreaChart from "../../../Components/AreaChart/AreaChart";

const Analysis = () => {
    const [ contest ] = useGetContests();
    const [ allBookings ] = useAllBookings();
    const totalMoney = allBookings.reduce( (total, bookings) => total + bookings.price, 0)
    console.log(totalMoney);
    return (
        <div>
            <div className="flex w-fit mx-auto text-xl font-semibold bg-orange-400 bg-opacity-5 h-fit p-9 my-10 rounded-lg">
                <TotalUser></TotalUser>
                <div className="text-center w-60">
                    <GrDocumentStore  className="text-center w-10 h-10 text-black mx-auto"/>
                    <h1> Total Contest {contest.length}</h1>
                </div>
                <div className="text-center w-60">
                    <TbBrandBooking className="text-center w-10 h-10 text-black mx-auto" />
                    <h1>Total Booking {allBookings.length}</h1>
                </div>
                <div className="text-center w-60">
                    <GiTakeMyMoney className="text-center w-10 h-10 text-black mx-auto" />
                    <h1>Total Money {totalMoney}</h1>
                </div>
            </div>

            <div>
                <div className="">
                    {/* <AreaChart name1="Contest" name2="Bookings" contest={contest} bookings={allBookings}></AreaChart> */}
                </div>
            </div>
        </div>
    );
};

export default Analysis;