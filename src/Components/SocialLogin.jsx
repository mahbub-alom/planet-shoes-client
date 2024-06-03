import { FaGoogle } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {

//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const handleGoogleSign = () => {
//     googleSignIn().then((result) => {
//       const loggedUser = result.user;
//       console.log(loggedUser);
//       const saveUser = {
//         name: loggedUser.displayName,
//         email: loggedUser.email,
//         role: "student",
//         image: loggedUser.photoURL,
//       };
//       fetch("https://assignment-twelve-server-smoky.vercel.app/newUser", {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(saveUser),
//       })
//         .then((res) => res.json())
//         .then(() => {
//           navigate(from, { replace: true });
//         });
//     });
//   };
  return (
    <div>
      <div className="divider my-3">OR</div>
      <div className="text-center">
        <button
        //   onClick={handleGoogleSign}
          className="btn btn-circle btn-outline text-2xl hover:text-blue-400 text-fuchsia-500 hover:bg-fuchsia-500"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
