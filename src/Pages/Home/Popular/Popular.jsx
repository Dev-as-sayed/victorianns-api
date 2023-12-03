import ContestCret from '../../../Components/ContestCret/ContestCret';
import SectionHeading from '../../../Components/SectionHeading/SectionHeading';
import useGetContests from '../../../Hooks/useGetContests/useGetContests';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Popular = () => {
    const [contest] = useGetContests()
    const popular = contest.filter( data => data.categories === "popular") 
    // console.log(popular);
    return (
        <div className='px-12 pb-14'>
            <SectionHeading
             heading="Current Favorites"
             subHeading="Trending Challenges: Join the Hype!"
            ></SectionHeading>

            <Swiper
                 slidesPerView={1}
                 spaceBetween={10}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                   '@0.00': {
                     slidesPerView: 1,
                     spaceBetween: 10,
                   },
                   '@0.75': {
                     slidesPerView: 2,
                     spaceBetween: 20,
                   },
                   '@1.00': {
                     slidesPerView: 3,
                     spaceBetween: 40,
                   },
                   '@1.50': {
                     slidesPerView: 4,
                     spaceBetween: 50,
                   },
                 }}
                 modules={[Pagination]}
                 className="mySwiper"
            >
                <div className=''>
                    {
                        popular.map( item =><><SwiperSlide><ContestCret
                                key={item._id}
                                item={item}
                                ></ContestCret></SwiperSlide></>)
                    }
                </div>
            </Swiper>










        </div>
    );
};

export default Popular;