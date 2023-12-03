import { Link } from "react-router-dom";

const ContestCret = ({item}) => {
    // console.log(item);
    const {title, image, startDate, endDate, _id} = item;

    return (
        <div className="card card-compact w-72 bg-zinc-100 text-slate-600 shadow-xl">
            <figure><img className="w-full h-44" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Start: <span>{startDate} End: <span>{endDate}</span></span></p>
                <div className="card-actions justify-end">
                    <Link to={`/detail/${_id}`}>
                        <button className="btn btn-sm btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContestCret;