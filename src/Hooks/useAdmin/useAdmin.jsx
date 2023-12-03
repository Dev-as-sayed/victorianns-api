import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const url = `/getAdmin/${user?.email}`;

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(url);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;