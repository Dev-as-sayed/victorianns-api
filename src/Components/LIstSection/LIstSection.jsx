import { Link } from "react-router-dom";
import ContestCret from "../ContestCret/ContestCret";
import AddPublisht from "../../Pages/Adds/AddPublisht/AddPublisht";

const LIstSection = ({ contestItems, cetagory }) => {
    // console.log(cetagory);
    return (
        <div>
            <div className="grid w-fit gap-6 mx-auto mt-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    contestItems?.map( items => <ContestCret
                        key={items._id}
                        item={items}
                    ></ContestCret>)
                }
            </div>
            <AddPublisht></AddPublisht>
            <div className="w-fit mx-auto mt-12">
                <Link to={`/allContest/${cetagory}`}>
                    <button className="btn btn-sm btn-primary btn-outline ">SEE ALL</button>
                </Link>
            </div>
        </div>
    );
};

export default LIstSection;