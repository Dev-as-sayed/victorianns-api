import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
// import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import AdvImg from "./advImg";

const Advartigement = () => {
    const [advData, setAdvData] = useState([]);
    const axiosPublic = useAxiosPublic();
    const url = '/getAdvartigement';

    useEffect( () => {
        axiosPublic.get(url)
            .then(res => setAdvData(res.data))
            .catch(error => console.log(error.message))
    }, [axiosPublic, url])
    
    return (
        <div>
            <Carousel
                autoPlay={true}
                interval={2000}
                infiniteLoop={true}
                showArrows={false}
                showThumbs={false}
            >
                {
                    advData.map(item => <AdvImg
                        key={item._id}
                        item={item}
                    ></AdvImg>)
                }
            </Carousel>
        </div>
    );
};

export default Advartigement;