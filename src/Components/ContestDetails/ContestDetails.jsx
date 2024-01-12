import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import bannerBg from "../../assets/Home/banndr1.jpg"
import TimerCount from "../TimerCount/TimerCount";

const ContestDetails = () => {
    const {contestId} = useParams();
    console.log(contestId);
    const [contestDetail, setContestDetail] = useState({});
    const axiosPublic = useAxiosPublic();
    const url = `/getDetailById/${contestId}`;

    useEffect( () => {
        axiosPublic.get(url)
            .then( res => setContestDetail(res.data))
            .catch(err => console.log(err.message))
    }, [axiosPublic, url])
    
    const { title, description, startDate, endDate, location, rules, prizes, image, _id} = contestDetail;
    console.log(_id);

    const paymentAmount = 20;

    return (
        <div>
            <div className="hero min-h-screen bg-opacity-90 bg-fixed " style={{backgroundImage: `url(${bannerBg})`}}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="my-24 py-14 text-slate-800 rounded-lg text-lg bg-red-50 bg-opacity-10">
                    <div className="hero ">
                        <div>
                            <div className="w-fit mx-auto">
                                <TimerCount endDate={endDate}></TimerCount>
                            </div>
                            <div className="hero-content px-16 flex-col lg:flex-row">
                                <div className="lg:w-1/2 ">
                                    <img src={image} className="w-full rounded-lg shadow-2xl lg:w-9/12" />
                                </div>
                                <div className="lg:w-1/2 text-left">
                                    <h1 className="text-3xl font-bold">{title}</h1>
                                    <p className="py-6">{description}</p>
                                    <p className="">Join fee: {paymentAmount} $ </p>
                                    <p className="">Start: {startDate}</p>
                                    <p className="">End: {endDate}</p>
                                    <Link to={`/dashbord/payment/${_id}`}>
                                        <button className="btn btn-sm btn-primary my-5">BOOKING NAW</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-20">
                        <div className="my-4">
                            <h1 className="text-2xl flex font-bold"> Rules</h1>
                            <div className="">
                                <ul>
                                    {
                                        rules?.map( item => <>
                                         <li key={item}> {item}</li>
                                        </>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="my-4">
                            <h1 className="text-2xl flex font-bold"> Prize</h1>
                            <div className="">
                                <ul>
                                    <li>First Place: {prizes?.firstPlace}</li>
                                    <li>Second Place: {prizes?.secondPlace}</li>
                                    <li>Third Place: {prizes?.thirdPlace}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-4">
                            <h1 className="text-2xl flex font-bold"> Location</h1>
                            <p className="">{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContestDetails;