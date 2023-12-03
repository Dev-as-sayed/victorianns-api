import { useContext } from "react";
import loginImg from "../../assets/Home/loging.jpg"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    
    const handelLogin = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire("LogIn success..!");
                form.reset();
                navigate(from, { replace: true });
            }) 

        
    }
    return (
        <div className="hero min-h-screen pt-11 bg-gray-50">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg} className="w-8/12 mx-auto mt-8 rounded-xl" alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
                    <h1 className="text-3xl font-semibold text-black text-center mt-4">Login naw!</h1>
                    <form className="card-body" onSubmit={handelLogin}>
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
                        <p>New on this site...!<Link to="/registar">   <span className="text-blue-500 underline">registar</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;