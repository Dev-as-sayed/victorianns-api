import useGetContests from "../../Hooks/useGetContests/useGetContests";
import Hero from "./Hero/Hero";
import Popular from "./Popular/Popular";
import homeBg from "../../assets/Home/banner.jpg"
const Home = () => {

    // const [ contest ] = useGetContests();
    const data = useGetContests();
    console.log(data);
    return (
        <div className="bg-cover bg-fixed" style={{backgroundImage: `url(${homeBg})`}}>
            <div className="hero-overlay bg-opacity-60">
                <Hero></Hero>
                <Popular></Popular>
            </div>
        </div>
    );
};

export default Home;