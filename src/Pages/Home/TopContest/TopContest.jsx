import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import ContestCret from "../../../Components/ContestCret/ContestCret";


const TopContest = () => {
    const axiosPublic = useAxiosPublic();
    const url = '/getTopContest';
    
    const {data: topContest = [] } = useQuery({
        queryKey: [ 'topContest' ],
        queryFn: async() => {
            const res = await axiosPublic.get(url)
                return res.data;
        }
    })
    console.log(topContest);
    return (
        <div className="py-8">
            <SectionHeading heading="top constest" subHeading="top booked contest"></SectionHeading>
            <div className="grid gap-10 w-fit mb-14 mx-auto lg:grid-cols-3 md:grid-cols-2">
                {
                    topContest.map( item => <ContestCret
                        key={item._id}
                        item={item}
                    ></ContestCret>)
                }
            </div>
        </div>
    );
};

export default TopContest;