import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import SingleCreator from "../../Home/ContestCreator/SingleCreator";

const AllCreator = () => {
    const axiosSecure = useAxiosSecure();
    const url = `/getAllCreator`;

    const { data: creatorList = [] } = useQuery({
        queryKey: [ "creatorList" ],
        queryFn: async () => {
            const res = await axiosSecure.get( url )
                return res.data
        }
    })
    console.log(creatorList);
    return (
        <div className="grid w-fit mx-auto gap-6 p-12 md:grid-cols-2 lg:grid-cols-3">
            {
                creatorList.map( item => <SingleCreator
                    key={item?._id}
                    item={item}
                ></SingleCreator>)
            }
        </div>
    );
};

export default AllCreator;