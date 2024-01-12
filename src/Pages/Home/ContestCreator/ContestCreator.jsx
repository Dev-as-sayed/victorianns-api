import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import SingleCreator from "./SingleCreator";

const ContestCreator = () => {
    const [ creatorsData, setCreatorsData] = useState([]);
    const axiosPublic = useAxiosPublic();
    const url = '/getContestCreators';

    useEffect( () => {
        axiosPublic.get(url)
            .then(res => setCreatorsData(res.data))
            .catch(error => console.log(error.message))
    }, [axiosPublic, url])
    return (
        <div className="mt-12">
            <SectionHeading
                heading="Contest Creators"
                subHeading="every single type create a contest creator"
            ></SectionHeading>
            <div className="gap-4 w-fit mx-auto mt-10 pb-10 grid sm:grid-cols-1 lg:grid-cols-3 place-content-center">
                {
                    creatorsData.map( item => <SingleCreator
                        key={item._id}
                        item={item}
                    ></SingleCreator>)
                }
            </div>
        </div>
    );
};

export default ContestCreator;