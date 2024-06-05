import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
import SocialLogin from "../../Components/SocialLogin";
import useAuth from "../../hook/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        setError('');
        // Signed in 
        const user = result.user;
        console.log(user);
        updateUserProfile(data?.name, data?.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, image: data.photoURL }
            axios.post('https://planet-shoes-server.onrender.com/newUser', saveUser)
              .then(data => {
                if (data?.data?.insertedId) {
                  navigate('/')
                }
              })
          }).catch((error) => {
            setError(error)
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage, errorCode)
      });
  };
  const password = watch("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Helmet>
        <title>Planet Shoes | Registration</title>
      </Helmet>
      <div className="">
        <PageTitle heading={"please registration"}></PageTitle>
      </div>
      <div className="container mx-auto">
        <div className="w-1/3 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase, and one special character.
                </p>
              )}
              {showPassword ? (
                <FaEyeSlash
                  className="text-xl text-fuchsia-500 absolute top-2/3 transform  right-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="text-xl text-fuchsia-500 absolute top-2/3 transform  right-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password,
                })}
                placeholder="confirm password"
                className="input input-bordered"
              />
              {errors.confirmPassword && (
                <p className="text-error">Passwords do not match</p>
              )}
            </div>
            <div className="w-full my-3">
              <input
                className="btn w-full bg-fuchsia-600 hover:text-fuchsia-600 text-white font-bold hover:bg-transparent hover:border-2 hover:border-fuchsia-700"
                type="submit"
                value="Register"
              />
              {/* <BtnFuchsia type="submit" btnText={"Register"}></BtnFuchsia> */}
            </div>
          </form>
          <p>
            Have an account? Please{" "}
            <Link to="/login" className="text-fuchsia-600">
              Login
            </Link>{" "}
          </p>
          <p className="text-red-600">{error}</p>
          <div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
