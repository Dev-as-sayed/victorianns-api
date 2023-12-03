import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useMyBookings = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const url = `/getMyBookings/?email=${user?.email}`;

    const {data: myBookings = [], refetch} = useQuery({
        queryKey: [ "myBookings" ],
        queryFn: async() => {
            const res = await axiosSecure.get(url, {withCredentials: true})
            return res.data
        }
    })


    return [myBookings, refetch];
};

export default useMyBookings;