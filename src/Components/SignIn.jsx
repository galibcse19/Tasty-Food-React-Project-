import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
// import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
    const  auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState(null);
    const navigate= useNavigate();

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth,provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
            navigate('/');
        }).catch((error) => {
           console.log('error', error.message)
        });
    }

    const HandelSignIn= event =>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password= form.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user= userCredential.user;
            navigate('/');
        })
        .catch((error) => {
            console.log('error', error.message)
         });
    }
    return (
        <div className="flex justify-center  bg-green-400 w-full  py-10 items-center">
            {/* <div className="w-1/2">
                <img className="h-[400px] rounded-lg" src="https://i.ibb.co/RQf6zX4/pexels-jonathanborba-2983104.jpg" alt="food image" />
            </div> */}
            <div className="bg-green-500 p-8 rounded-lg shadow-lg max-w-md w-3/4">
                <h2 className="text-2xl font-bold mb-6 text-center">LOG IN HERE</h2>
                <form  onSubmit={HandelSignIn}>
                <div className="mb-4">
                    <label className="label">
                    Email
                    </label>
                    <input type="email" name="email" placeholder="Enter Your Email" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div>

                <div className="mb-4">
                    <label className="label">
                    Password
                    </label>
                    <input type="password" name="password" placeholder="Type Password" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div> 
                <button className="w-full btn btn-outline bg-emerald-950 hover:bg-white text-white mt-4 px-16 text-lg">LOG IN</button>
                </form>
                <div className="flex justify-center my-2 items-center">
                    OR
                </div>
                <div className="flex justify-center mb-2 items-center">
                    <FaGoogle onClick={handleGoogleSignIn} className="size-6"/>
                    <FaFacebookSquare className="size-7 mx-4"/>
                    <FaGithub className="size-7 mr-4"/>
                </div>
                 
                <div className="my-4"><Link to={'/signUp'}>If Not Register? Please  Click Here.</Link> </div>
            </div>
        </div>
    );
};

export default SignIn;