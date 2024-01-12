import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import homeBg from "../../assets/Home/banner.jpg"
import Advartigement from "./Advartigement/Advartigement";
import ContestCreator from "./ContestCreator/ContestCreator";
import TopContest from "./TopContest/TopContest";
const Home = () => {

    return (
        <div className="bg-cover bg-fixed" style={{backgroundImage: `url(${homeBg})`}}>
            <div className="hero-overlay bg-opacity-60">
                <Hero></Hero>
                <TopContest></TopContest>
                <Popular></Popular>
                <Advartigement></Advartigement>
                <ContestCreator></ContestCreator>
            </div>
        </div>
    );
};

export default Home;