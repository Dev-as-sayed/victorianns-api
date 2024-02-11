import useGetAllUser from "../../../../Hooks/useGetAllUser/useGetAllUser";
import { FaUsers } from "react-icons/fa6";

const TotalUser = () => {

    const [ users ] = useGetAllUser();
    console.log(users.length);
    return (
        <div className="text-center w-72">
            <FaUsers className="text-center w-10 h-10 text-black mx-auto" />
            <h1>Total User {users.length}</h1>
        </div>
    );
};

export default TotalUser;