import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAllBookings = () => {
    const axiosSecure = useAxiosSecure();
    const url = '/getAllBookings'
    const {data: allBookings = [], refetch} = useQuery({
        queryKey: ['allBookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(url, {withCredentials: true})
            return res.data;
        }
    })
    return [ allBookings, refetch];
};

export default useAllBookings;