import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { BiSolidUserPlus, BiTrash } from "react-icons/bi";
import { SiSpringCreators } from "react-icons/si";
import Swal from "sweetalert2";
import useGetAllUser from "../../../Hooks/useGetAllUser/useGetAllUser";

const Users = () => {
    const axiosSecure = useAxiosSecure();

    const [ users, refetch ] = useGetAllUser();

    const handelMakeAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to make admin..!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/makeAdmin/${user?._id}`)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                          title: "Done",
                          text: "Your convated has been admin.",
                          icon: "success"
                        });
                        refetch();
                    })
            }
          });
    }
    
    const handelMakeCreator = (user) => {
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to make admin..!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/makeCreator/${user?._id}`)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                          title: "Done",
                          text: "Your convated has been admin.",
                          icon: "success"
                        });

                        refetch();
                    })
            }
          });
    }
    const handelDeletUser = ( user ) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deletUser/${user._id}`, {withCredentials: true})
                    .then(res => {
                        console.log(res.data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
            }
          });
    }
    console.log(users);
    return (
        <div className="m-8 p-10 pt-3 rounded-lg bg-orange-400 bg-opacity-5 ">
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl text-black my-3">All Users</h2>
                {/* <h2 className="text-3xl">Total Users: {users.length}</h2> */}
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full border-2 border-black ">
                    {/* head */}
                    <thead className="border-b-2 border-black">
                        <tr className="text-black">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delet User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ?
                                        'Admin' 
                                     : 
                                     user.role === 'creator' ?
                                        'Creator'
                                     :
                                        <>
                                            <button
                                                onClick={() => handelMakeAdmin(user)}
                                                className="mr-4">
                                                <BiSolidUserPlus className="text-black text-2xl "></BiSolidUserPlus>
                                            </button>
                                            <button
                                                onClick={() => handelMakeCreator(user)}
                                                className="">
                                                <SiSpringCreators className="text-black text-sm mb-1"></SiSpringCreators>
                                            </button>
                                        </>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handelDeletUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <BiTrash className="text-red-600"></BiTrash>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;