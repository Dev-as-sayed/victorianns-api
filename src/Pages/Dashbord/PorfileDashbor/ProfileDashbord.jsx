import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { LuUserCircle } from "react-icons/lu";
import useCreator from "../../../Hooks/useCreator/useCreator";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const ProfileDashbord = () => {

    const [ isCreator ] = useCreator();
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const url = `/postCreator/?email=${user?.email}`;

    const handelAddCreatorInfo = e => {
        e.preventDefault();

        const form = e.target;

        const specialization = form.specialization.value;
        const image = form.image.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const name = user.displayName;
        const email = user.email;

        const creator = { name, image, email, phone, location, specialization};
        console.log(creator);

        axiosSecure.post(url, creator)
            .then(res => console.log(res.data));

    }
    return (
        <div className="min-h-screen">
            <div>
                {
                    user.photoURL === "" || !user.photoURL?
                    <LuUserCircle className="mx-auto mt-10"  style={{ width: '15rem', height: '15rem' }}></LuUserCircle>
                    :
                    <img className="w-96 h-80 mt-10 rounded-[50%] mx-auto" src={user?.photoURL} alt="" />
                }
            </div>
            <div className="text-black text-center">
                <p className="text-2xl font-medium">{user?.displayName}</p>
                <p>{user?.email}</p>
                <p>Creation Time: {user?.metadata?.creationTime}</p>
                <p>Last SignIn Time: {user?.metadata?.lastSignInTime}</p>
            </div>
            {isCreator &&
                <div className="w-fit mt-10 bg-slate-300 bg-opacity-50 mx-auto">
                    <div className=" bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative transition-all duration-200">
                        <h1 className="text-2xl text-black font-bold  text-center mb-6">ADD INFORMATION</h1>
                        <form onSubmit={handelAddCreatorInfo}>
                            <div className="">
                                <div className="relative my-4">
                                    <select name="specialization" required className="block w-full py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer">
                                        <option value="physics">physics</option>
                                        <option value="chemistry">chemistry</option>
                                        <option value="math">math</option>
                                        <option value="writing">writing</option>
                                        <option value="spots">spots</option>
                                    </select>
                                    <label className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Specialization</label>
                                </div>
                                <div className="relative my-4">
                                    <input type="text" name="image" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image url</label>
                                </div>
                                <div className="relative my-4">
                                    <input type="text" name="location" required className="block w-72 py-2.5 px-0 text-sm bltext-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:bltext-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                                </div>
                                <div className="relative my-4">
                                    <input type="number" name="phone" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                    <label className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                                </div>
                            </div>
                            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">ADD INFORMATION</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProfileDashbord;