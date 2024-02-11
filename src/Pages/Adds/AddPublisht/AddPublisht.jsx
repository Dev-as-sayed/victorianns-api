import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";

const AddPublisht = () => {
    const [adds, setAdds] = useState();
    const axiosPublic = useAxiosPublic();
    const url = '/getAdds';

    useEffect(() => {
        const fetchAdvertisement = async () => {
            try {
                const res = await axiosPublic.get(url);
                setAdds(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAdvertisement();
        const intervalId = setInterval(fetchAdvertisement, 8 * 5000); // Fetch advertisement every 5 minutes

        return () => clearInterval(intervalId);
    }, [axiosPublic, url]);

    console.log(adds);



    return (
        <div className="w-9/12 flex h-20 bg-slate-200 mx-auto my-4 rounded-xl">
            <img src={adds?.image} className="w-1/3" alt="" />
            <div className="text-black w-fit mx-auto">
                <h1 className="text-lg">{adds?.heading}</h1><br />
                <p>{adds?.description}</p>
            </div>
        </div>
    );
};

export default AddPublisht;