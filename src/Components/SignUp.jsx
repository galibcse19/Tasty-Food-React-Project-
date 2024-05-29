import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../firebase/firebase.init";
import {  useState } from "react";


const SignUp = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [registerError,setRegisterError]=useState('')
     

    const handleRegister=event=>{
        event.preventDefault();   
        const form= event.target;
        const fullName=form.fullName.value;
        const email=form.email.value;
        const password=form.password.value;
        const repeatPassword=form.repeatPassword.value;
        // console.log(fullName,email,password,repeatPassword);

        const userData={fullName,email,password};
        if(password===repeatPassword){
            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed up 
                const user =result.user;
                // ...
                console.log(user);

                fetch('http://localhost:5000/userData',{
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(userData)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        title:'Success',
                        text:'Your Registation Successfully Done',
                        icon: 'success',
                        confirmButtonText:'OK',
                    })
                    navigate('/signIn');
                }
            })

            })
            .catch((error) => {
                 console.error(error);
                 setRegisterError(error.message);
            });
            

            
        }
        else{
            Swal.fire({
                    title:'error',
                    text:'Your Password Not Matched',
                    icon: 'error',
                    confirmButtonText:'OK',
                })
        }
    }
    return (
         <div className="flex justify-center  bg-green-400 w-full  lg:py-10 items-center">
            {/* <div className="w-1/2">
                <img className="h-[400px] rounded-lg" src="https://i.ibb.co/RQf6zX4/pexels-jonathanborba-2983104.jpg" alt="food image" />
            </div> */}
            <div className="bg-green-500 p-8 rounded-lg shadow-lg max-w-md lg:w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">REGISTER HERE</h2>
                <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <label className="label">
                    Full Name
                    </label>
                    <input type="text" name="fullName"placeholder="Enter Your Full Name" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div>
                {/* <div className="mb-4">
                    <label className="label">
                    User Name
                    </label>
                    <input type="text" name="username" placeholder="Enter User Name" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div> */}
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
                </div><div className="mb-4">
                    <label className="label">
                    Repeat Password
                    </label>
                    <input type="password" name="repeatPassword" placeholder="Repeat Password" className="w-full p-2 border input input-bordered border-gray-300 rounded-lg"
                    required />
                </div>
                <button className="w-full btn btn-outline bg-emerald-950 text-white mt-4 px-16 text-lg hover:bg-white">REGISTER</button>
                {
                    registerError && <p className="my-4 text-red-600 text-xl">{registerError}</p>
                }
                <div className="my-4 "><Link to={'/signIn'}>If Already Register? Please  Click Here.</Link> </div>
                </form>
            </div>
    </div>
    );
};

export default SignUp;