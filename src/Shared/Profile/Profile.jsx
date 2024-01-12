import { useContext } from "react";
import { LuUserCircle } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Profile = () => {

    const {user, logOut} = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then( res => console.log(res))
            .catch(error => console.error(error))
    }


    return (
        <>
            {/* if clitck the dainamic button open a drawer if click the out site is drawer close the drawer */}
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* this part for daynamic user frofile if thare userImage show on the pictur or show a user profile icon */}
                    {
                        user.photoURL === "" || !user.photoURL?
                        <label htmlFor="my-drawer-4" className="drawer-button btn-outline w-fit rounded-full">
                            <LuUserCircle  style={{ width: '2.5rem', height: '2.5rem' }}></LuUserCircle>
                        </label>
                        :
                        <label htmlFor="my-drawer-4" className="drawer-button btn-outline w-fit border-blue-700 rounded-full">
                            <img className="rounded-full border-4 border-b-slate-900"  style={{ width: '2.5rem', height: '2.5rem' }} src={`${user.photoURL}`}/>
                        </label>
                    }
                </div> 
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-90 min-h-[85vh] my-14 w-64 rounded-xl bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                        <div className=" w-fit mx-auto mt-6">
                            {
                                user.photoURL === "" || !user.photoURL?
                                <LuUserCircle className="mx-auto mt-10"  style={{ width: '6rem', height: '6rem' }}></LuUserCircle>
                                :
                                <img className="w-24 h-24 mt-10 rounded-[50%] mx-auto" src={user?.photoURL} alt="" />
                            }
                        </div>
                        <div className="text-center mb-4">
                            <h2 className="font-bold text-xl">{user.displayName}</h2>
                            <p>{user.email}</p>
                        </div>
                        <li><Link to="/dashbord/dashbordPorfile" >My Dashbord</Link></li>
                        <li className="mx-auto"><a href=""><button className="btn w-fit btn-outline btn-xs btn-success" onClick={handelLogOut}>logOut</button></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;