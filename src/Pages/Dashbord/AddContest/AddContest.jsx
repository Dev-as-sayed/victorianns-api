import { BiIdCard, BiPhone, BiUser } from "react-icons/bi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AddContest = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const url = '/addContestByCreator';

    const handelAddContes = e => {
        e.preventDefault();
        const form = e.target;
        const categories = form.categories.value;
        const title = form.title.value;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;
        const image = form.image.value;
        const status = form.status.value;
        const location = form.location.value;
        const firstRules = form.firstRules.value;
        const secondRules = form.secondRules.value;
        const firstPlace = form.firstPlace.value;
        const secondPlace = form.secondPlace.value;
        const thirdPlace = form.thirdPlace.value;
        const description = form.description.value;
        const creatorEmail = user.email;
        const prosess = "pandign";

        const rules = [firstRules, secondRules];
        const prizes = {
            "firstPlace": firstPlace,
            "secondPlace": secondPlace,
            "thirdPlace": thirdPlace
        }

        
        const contest = { categories, title, startDate, endDate, image, status, location, rules, prizes, description, creatorEmail, prosess}
        console.log(contest);

        axiosSecure.post(url, contest)
            .then(res => {
                console.log(res.data)
                form.reset()
            })
    }


    return (
        <div className="w-fit py-20 mx-auto">
            <div className=" bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 relative transition-all duration-200">
                <h1 className="text-4xl text-white font-bold  text-center mb-6">ADD NEW CONTEST</h1>
                <form onSubmit={handelAddContes}>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="relative my-4">
                                <select name="categories" required className="block w-full py-2.5 px-0 text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer">
                                    <option value="offerd">offerd</option>
                                    <option value="physics">physics</option>
                                    <option value="chemistry">chemistry</option>
                                    <option value="math">math</option>
                                    <option value="writing">writing</option>
                                    <option value="spots">spots</option>
                                    <option value="popular">popular</option>
                                </select>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Categories</label>
                                <BiPhone className="absolute top-4 right-4" />
                            </div>
                            <div className="relative my-4">
                                <input type="text" name="startDate" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date  YY-MM-DD </label>
                                <BiUser className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="text" name="image" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">image</label>
                                <BiUser className="absolute top-4 right-4"/>
                            </div>
                        </div>
                        <div>
                            <div className="relative my-4">
                                <input type="text" name="title" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">title</label>
                                <BiPhone className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="text" name="endDate" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date YY-MM-DD</label>
                                <BiIdCard className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <select name="status" required className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer">
                                    <option value="upcoming">upcoming</option>
                                    <option value="incoming">incoming</option>
                                </select>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Select Status</label>
                                <BiPhone className="absolute top-4 right-4" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="relative my-4">
                            <input type="text" name="location" required className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">location</label>
                            <BiPhone className="absolute top-4 right-4"/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-center text-lg text-white font-semibold">Rules</h3>
                        <div className="grid grid-cols-2 gap-8">    
                            <div className="relative my-4">
                                <input type="text" name="firstRules" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">1st</label>
                                <BiUser className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="text" name="secondRules" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">2nd</label>
                                <BiUser className="absolute top-4 right-4"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-center text-lg text-white font-semibold">Prizes</h3>
                        <div className="grid grid-cols-2 gap-8">    
                            <div className="relative my-4">
                                <input type="text" name="firstPlace" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Place</label>
                                <BiUser className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="text" name="secondPlace" required className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Second Place</label>
                                <BiUser className="absolute top-4 right-4"/>
                            </div>
                        </div>
                        <div>
                            <div className="relative my-4">
                                <input type="text" name="thirdPlace" required className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Third Place</label>
                                <BiPhone className="absolute top-4 right-4"/>
                            </div>
                            <div className="relative my-4">
                                <input type="text" name="description" required className=" textarea textarea-bordered textarea-sm  block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                                <BiPhone className="absolute top-4 right-4"/>
                            </div>
                        </div>
                        
                    </div>
                    <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">ADD INFORMATION</button>
                </form>
            </div>
        </div>
);
};

export default AddContest;