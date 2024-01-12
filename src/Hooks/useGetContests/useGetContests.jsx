import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useGetContests = () => {
    const axiosPublic = useAxiosPublic();
    const url = '/getContests'

    const {data: contest = [], refetch} = useQuery({
        queryKey: ['contest'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(url);
            // console.log(res.data);
            return res.data;
        }
    })

    return [contest, refetch ];
};

export default useGetContests;