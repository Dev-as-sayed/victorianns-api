import { NavLink } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";
import useCreator from "../../../Hooks/useCreator/useCreator";
import { LuUserSquare2 } from "react-icons/lu";
import { BiBookAdd, BiBookAlt, BiHome, BiUser, BiWallet } from "react-icons/bi";
import { BsFileEarmarkRichtext } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";

const Sitebar = () => {

    const [ isAdmin ] = useAdmin();
    const [ isCreator ] = useCreator()
    return (
        <div className='w-64 pt-8 bg-gray-400 text-black min-h-screen sticky top-0'>
            <ul className='px-6'>
                {
                    isAdmin ? <>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/dashbordPorfile"><LuUserSquare2 className='h-fit my-auto text-xl mr-2'></LuUserSquare2> <span className=''>My Profile</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/users"><BiUser className='h-fit my-auto text-xl mr-2'></BiUser> <span className=''>All User</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/allCreator"><BsFileEarmarkRichtext className='h-fit my-auto text-xl mr-2'></BsFileEarmarkRichtext> <span className=''>All Creators</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/allBookings"><BiBookAdd className='h-fit my-auto text-xl mr-2'></BiBookAdd> <span className=''>All Bookings</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/allPayments"><BiWallet className='h-fit my-auto text-xl mr-2'></BiWallet> <span className=''>All Payments</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/allAdds"><MdAddShoppingCart className='h-fit my-auto text-xl mr-2'></MdAddShoppingCart> <span className=''>All Adds</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/analysis"><FaChartPie className='h-fit my-auto text-xl mr-2'></FaChartPie> <span className=''>Analysis</span></NavLink></li>
                        {/* <li className='h-10' ><NavLink className='inline-flex' to="/"><BiListMinus className='h-fit my-auto text-xl mr-2'></BiListMinus> <span className=''>Contests</span></NavLink></li> */}
                    </>
                    :
                    isCreator ? <>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/dashbordPorfile"><LuUserSquare2 className='h-fit my-auto text-xl mr-2'></LuUserSquare2> <span className=''>My Profile</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/addContest"><BiWallet className='h-fit my-auto text-xl mr-2'></BiWallet> <span className=''>Add Contest</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/myAddedContest"><BiWallet className='h-fit my-auto text-xl mr-2'></BiWallet> <span className=''>My Added Contest</span></NavLink></li>

                    </>
                    :
                    <>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/dashbordPorfile"><LuUserSquare2 className='h-fit my-auto text-xl mr-2'></LuUserSquare2> <span className=''>My Profile</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/myBookings"><BiBookAlt className='h-fit my-auto text-xl mr-2'></BiBookAlt> <span className=''>My Bookings</span></NavLink></li>
                        <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/myPayment"><BiBookAlt className='h-fit my-auto text-xl mr-2'></BiBookAlt> <span className=''>My Payments</span></NavLink></li>
                    </>
                }
                <div className="divider divider-neutral"></div>
                <li className='h-10' ><NavLink className='inline-flex' to="/"><BiHome className='h-fit my-auto text-xl mr-2'></BiHome> <span className=''>Home</span></NavLink></li>
                <li className='h-10' ><NavLink className='inline-flex' to="/contestList"><BiHome className='h-fit my-auto text-xl mr-2'></BiHome> <span className=''>Contest List</span></NavLink></li>
                <li className='h-10' ><NavLink className='inline-flex' to="/allContest/physics"><BiHome className='h-fit my-auto text-xl mr-2'></BiHome> <span className=''>All Contests</span></NavLink></li>
            </ul>
        </div>
    );
};

export default Sitebar;