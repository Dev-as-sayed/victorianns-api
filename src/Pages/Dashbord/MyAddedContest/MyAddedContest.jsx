import { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import CreatorContestDetails from "./CreatorContestDetails";

const MyAddedContest = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const url = `/getCreatorContest/?email=${user?.email}`;

    const { data: creatorContest = [], refetch} = useQuery({
        queryKey: [ 'creatorContest' ],
        queryFn: async() =>{
            const res = await axiosSecure.get(url);
            console.log(res.data);
            return res.data;
        }
    })

    console.log(creatorContest);

    // refetch();

    return (
        <div>
            <div className="grid w-fit gap-6 mx-auto my-10 lg:grid-cols-2">
                {
                    creatorContest.map( detail => <CreatorContestDetails 
                        key={detail._id}
                        contest={detail}
                        refetch={refetch}
                    ></CreatorContestDetails>)
                }
            </div>
        </div>
    );
};

export default MyAddedContest;