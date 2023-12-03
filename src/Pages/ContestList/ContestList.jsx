import LIstSection from "../../Components/LIstSection/LIstSection";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import useGetContests from "../../Hooks/useGetContests/useGetContests";
import manueBanner from "../../assets/Home/manueBanner.jpg"

const ContestList = () => {

    const [ contest ] = useGetContests();

    const offerd = contest.filter( items => items.categories === 'offerd').slice(0, 3);
    const physics = contest.filter( items => items.categories === 'physics').slice(0, 3);
    const chemistry = contest.filter( items => items.categories === 'chemistry').slice(0, 3);
    const math = contest.filter( items => items.categories === 'math').slice(0, 3);
    const writing = contest.filter( items => items.categories === 'writing').slice(0, 3);
    const spots = contest.filter( items => items.categories === 'spots').slice(0, 3);
    // console.log(physics, offerd, chemistry, math, spots);
    return (
        <div className="">
            <div className="min-h-[80vh] bg-cover pt-28 " style={{backgroundImage: `url(${manueBanner})`}}>
                <div className="">
                    <div className="px-20 py-10 bg-slate-600 bg-opacity-70 rounded-md text-center h-fit w-fit mx-auto">
                        <h1 className="text-5xl">CONTEST LIST</h1>
                        <p className="text-xl">Be your self with chellange</p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-14">
                <SectionHeading heading="some offers" subHeading="offers"></SectionHeading>
                <LIstSection contestItems={offerd} cetagory={"offerd"}></LIstSection>
                
            </div>
            <div className="bg-zinc-100 py-14">
                <SectionHeading heading="for physics lover" subHeading="physics"></SectionHeading>
                <LIstSection contestItems={physics} cetagory={"physics"}></LIstSection>
            </div>
            <div className="bg-white py-14">
                <SectionHeading heading="for chemistry lover" subHeading="chemistry"></SectionHeading>
                <LIstSection contestItems={chemistry} cetagory={"chemistry"}></LIstSection>
            </div>
            <div className="bg-zinc-100 py-14">
                <SectionHeading heading="for math lover" subHeading="math"></SectionHeading>
                <LIstSection contestItems={math} cetagory={"math"}></LIstSection>
            </div>
            <div className="bg-white py-14">
                <SectionHeading heading="for writing lover" subHeading="writing"></SectionHeading>
                <LIstSection contestItems={writing} cetagory={"writing"}></LIstSection>
            </div>
            <div className="bg-zinc-100 py-14">
                <SectionHeading heading="for spots lover" subHeading="spots"></SectionHeading>
                <LIstSection contestItems={spots} cetagory={"spots"}></LIstSection>
            </div>
        </div>
    );
};

export default ContestList;