import { BiBookAdd, BiBookAlt, BiHome, BiUser, BiWallet } from 'react-icons/bi';
import { LuUserSquare2 } from 'react-icons/lu';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin/useAdmin';

const Dashbord = () => {

    // const isAdmin = true;
    const [ isAdmin ] = useAdmin();
    // console.log(isAdmin);
    return (
        <div className='flex'>
            <div className='w-64 pt-8 bg-gray-400 text-black min-h-screen'>
                <ul className='px-6'>
                    {
                        isAdmin ? <>
                            <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/dashbordPorfile"><LuUserSquare2 className='h-fit my-auto text-xl mr-2'></LuUserSquare2> <span className=''>My Profile</span></NavLink></li>
                            <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/users"><BiUser className='h-fit my-auto text-xl mr-2'></BiUser> <span className=''>All User</span></NavLink></li>
                            <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/allBookings"><BiBookAdd className='h-fit my-auto text-xl mr-2'></BiBookAdd> <span className=''>All Bookings</span></NavLink></li>
                            <li className='h-10' ><NavLink className='inline-flex' to="/dashbord/allPayments"><BiWallet className='h-fit my-auto text-xl mr-2'></BiWallet> <span className=''>All Payments</span></NavLink></li>
                            {/* <li className='h-10' ><NavLink className='inline-flex' to="/"><BiListMinus className='h-fit my-auto text-xl mr-2'></BiListMinus> <span className=''>Contests</span></NavLink></li> */}
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
            <div className='flex-1 bg-white'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;