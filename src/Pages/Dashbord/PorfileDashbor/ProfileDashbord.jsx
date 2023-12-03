import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { LuUserCircle } from "react-icons/lu";

const ProfileDashbord = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="min-h-screen">
            <div>
                {
                    user.photoURL === ""?
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
        </div>
    );
};

export default ProfileDashbord;