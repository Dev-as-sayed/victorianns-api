import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useGetAllUser = () => {
    const axiosSecure = useAxiosSecure();
    const url = '/getAllUsers';

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(url, {withCredentials: true})
            return res.data;
        }
    })

    return [users, refetch];
};

export default useGetAllUser;