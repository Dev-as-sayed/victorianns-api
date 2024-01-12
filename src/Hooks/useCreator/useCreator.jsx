import { useContext } from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCreator = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const url = `/getCreator/${user?.email}`;

    const { data: isCreator, isPending: isCreatorLoading } = useQuery({
        queryKey: [user?.email, 'isCreator'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(url);
            return res.data?.creator;
        }
    })
    return [isCreator, isCreatorLoading]
};

export default useCreator;