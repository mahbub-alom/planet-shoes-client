import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import axios from "axios";
const SocialLogin = () => {

  const { googleSignIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const handleGoogleSign = () => {
    googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL }
        axios.post('https://planet-shoes-server.onrender.com/newUser', saveUser)
          .then(() => {
            navigate(from, { replace: true });
          })
      })
  }
  return (
    <div>
      <div className="divider my-3">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSign}
          className="btn btn-circle btn-outline text-2xl hover:text-blue-400 text-fuchsia-500 hover:bg-fuchsia-500"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
