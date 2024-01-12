import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";


const CreatorContestDetails = ({ contest, refetch }) => {
    const { categories, title, startDate, endDate, status, image, location, rules, prizes, description, _id, prosess} = contest;

    const axiosSecure = useAxiosSecure();
    // const url = `/deletContest/?id=${contest?._id}`


    const handelDeletContestByCreator = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deletContest/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
            }
          });
    }


    const handelDeclareWinars = () => {
        
    }
    return (
        <div className="card w-96 bg-red-100 shadow-xl rounded-sm ">
            <p className="text-lg text-center font-semibold">{prosess}</p>
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-sm w-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>Start:- {startDate}</p>
                <p>End:- {endDate}</p>
                <p>Categories:- {categories}</p>
                <p>Stateus:- {status}</p>
                <p>Location:- {location}</p>
                <p>
                    <span>Rules:-</span>
                    {
                        rules?.map( item => <>
                            <li key={item}> {item}</li>
                        </>)
                    }
                </p>
                <p>
                    <span>Przes:- </span>
                    <li>First Place: {prizes?.firstPlace}</li>
                    <li>Second Place: {prizes?.secondPlace}</li>
                    <li>Third Place: {prizes?.thirdPlace}</li>
                </p>
                <p>Description:- {description}</p>
                <div className="card-actions">
                    <button className="btn btn-sm btn-primary" onClick={handelDeclareWinars}>Declare Winners</button>
                    <button className="btn btn-sm btn-primary" onClick={ () => handelDeletContestByCreator(_id)}>Delet Contest</button>
                </div>
            </div>
        </div>
    );
};

export default CreatorContestDetails;