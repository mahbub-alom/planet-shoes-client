import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import PageTitle from "../../Components/PageTitle";
import SocialLogin from "../../Components/SocialLogin";


const Login = () => {
    const [error, setError] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);


    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
    // console.log(from);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const onSubmit = (data) => {
        // event.preventDefault();
        // console.log(data);
        // signIn(data.email, data.password)
        //     .then((result) => {
        //         setError('');
        //         // Signed in 
        //         const loggedUser = result.user;
        //         console.log('User:', loggedUser);
        //         reset();
        //         navigate(from, { replace: true });
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         setError(errorMessage, errorCode)
        //     });
        console.log(data)
    }
    return (
        <div>
            <div className="">
                <PageTitle
                    heading={"please login"}
                ></PageTitle>
            </div>
            <div className="container mx-auto">
                <div className="w-1/3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: true })}
                                    placeholder="password"
                                    className="input input-bordered pr-10 w-full"
                                />
                                {showPassword ? (
                                    <FaEyeSlash
                                        className="text-xl text-fuchsia-500 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <FaEye
                                        className="text-xl text-fuchsia-500 absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="w-full my-3">
                            <button type="submit" className="btn w-full bg-fuchsia-600 hover:text-fuchsia-600 text-white font-bold hover:bg-transparent hover:border-2 hover:border-fuchsia-700">Sign In</button>
                        </div>
                    </form>
                    <div>
                        <p>Don't have an account? Please <Link to="/registration" className="text-fuchsia-600">Register</Link></p>
                        <p className="text-red-600 my-3">{error}</p>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;