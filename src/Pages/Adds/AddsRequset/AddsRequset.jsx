import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const AddsRequset = () => {
    const axiosSecure = useAxiosSecure();
    const url = '/uploadeAddsData';

    const handelAddsRequest = e => {
        e.preventDefault();

        const form = e.target;
        const heading = form.heading.value;
        const image = form.image.value;
        const description = form.description.value;

        const addDetail = {heading, image, description}
        console.log(addDetail);

        axiosSecure.post(url, addDetail)
            .then(res => {
                console.log(res.data)
                Swal.fire("your add is panding");
            })
            .catch(err => console.error(err.data))

    }
    return (
        <div className="min-h-screen bg-slate-100 pt-24">
            <h1 className="text-center text-2xl text-black">Sumit your add</h1>
            <div className="w-fit mx-auto py-9">
                <form onSubmit={handelAddsRequest}>
                    <label className="text-black">Heading</label><br />
                    <input type="text" placeholder="Type heading" name="heading" className="input input-bordered input-success w-96 max-w-xs mb-4 bg-transparent" /><br />
                    
                    <label className="text-black">Image url</label><br />
                    <input type="text" placeholder="Type image url" name="image" className="input input-bordered input-success w-96 max-w-xs mb-4 bg-transparent" /><br />
                    
                    <label className="text-black">Description</label><br />
                    <textarea name="description" className="textarea textarea-accent w-full mb-4 bg-transparent" placeholder="Type description"></textarea>

                    <button className="btn btn-info w-full">Add Request</button>
                </form>
            </div>
        </div>
    );
};

export default AddsRequset;