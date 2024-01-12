// import herobg from '../../../assets/Home/banner.jpg'
// style={{backgroundImage: `url(${herobg})`}}

import Search from "./Search";

const Hero = () => {
    return (
        <div className="hero min-h-screen " >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}
            <div className="hero-content text-center text-neutral-content ">
                <div className="">
                    <div className="max-w-md mx-auto">
                        <h1 className="mb-5 text-3xl font-bold">Create. Compete. Conquer.</h1>
                        <p className="mb-5">Elevate your craft with VICTORIANS. Show the world your unique talent, win big, and join a community of creative minds. It's time to make your mark. Ready to compete?</p>
                    </div>
                    <Search></Search>
                </div>
            </div>
        </div>
    );
};

export default Hero;