import { useContext } from "react";
import registarImg from "../../assets/Home/registae.jpg"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";


const Registar = () => {
    const { createNewUser, updateUserProfile, handelLoginWithGoogle } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const url = '/uploadeUser';
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handelRegistar = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const userPhoto = form.userPhoto.value;
        const email = form.email.value;
        const password = form.password.value;

        const userDetail = {name, userPhoto, email, password};
        console.log(userDetail);

        createNewUser(email, password)
            .then(res => {
                console.log(res.user)
                
                updateUserProfile(name, userPhoto)
                    .then( res => console.log(res))
                    .catch(error => console.error(error.message))
                axiosPublic.post(url, userDetail)
                    .then(res => {
                        console.log(res.data)
                        Swal.fire("Registration success!");
                        form.reset();
                    })
                    .catch(err => {
                        Swal.fire("Registration Fails!");
                        console.log(err.message)
                    })
                
            })
            .catch( err => console.log(err.message))
    }

    const loginWithGoogle = () => {
        handelLoginWithGoogle()
        .then(res =>  {
            console.log(res.user);
            navigate(from, { replace: true })
        })
    }

    return (
        <div className="hero min-h-screen pt-11 bg-gray-50">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={registarImg} className="w-9/12 rounded-xl" alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
                    <h1 className="text-3xl font-semibold text-black text-center mt-4">Registar naw !</h1>
                    <form className="card-body" onSubmit={handelRegistar}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black ">Name</span>
                            </label>
                            <input type="text" name="name"  placeholder="name" className="input  bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black ">Photo url</span>
                            </label>
                            <input type="text" name="userPhoto" placeholder="userPhoto" className="input  bg-white"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input bg-white" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registar</button>
                        </div>
                    </form>
                    <div className="text-center pb-4">
                    <button className="px-8 btn btn-primary" onClick={loginWithGoogle}> <AiFillGoogleCircle className="w-6 h-6 text-white" /> Google</button>
                        <p>alrady have an account <Link to="/login"><span className="text-blue-500 underline">login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registar;