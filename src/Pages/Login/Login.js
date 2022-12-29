import React from 'react';
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const onSubmit = (data) =>{
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
         

    }

    

    let signInError;

    if(loading || gLoading){
        return <Loading/>
    }
    if(error || gError){
        signInError = <p className="text-red-500">{error?.message || gError?.message}</p>
    }
    if(user || gUser){
        navigate(from,{replace:true})
    }

    return (
        <div className='flex my-12 justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center font-bold text-2xl mb-3">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="w-full max-w-xs">
                            
                        
                        <input 
                            {...register("email", 
                                {
                                   required:{
                                    value:true,
                                    message : "Email is required"
                                   },

                                    pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                    }
                                }
                            )}
                            type="emial" 
                            placeholder="Your Email" 
                            className="input input-bordered w-full max-w-xs" 
                        />
                        <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            
                        </label>
                        </div>

                        <div className="w-full max-w-xs">
                       
                        <input 
                            {...register("password", 
                                {
                                   required:{
                                    value:true,
                                    message : "password is required"
                                   },

                                    minLength: {
                                    value: 6,
                                    message: 'minimum length is 6 characters'
                                    }
                                }
                            )}
                            type="password" 
                            placeholder="Your Password" 
                            className="input input-bordered w-full max-w-xs"  
                        />
                        <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            
                        </label>
                        </div>
                            
                        {signInError}
                        <input className="btn w-full max-w-xs text-white" type="submit" value="Login"/>
                        </form>

                    <div className="divider text-sm">OR</div>
                    <p className='text-sm pb-2'>You haven't account <Link className='text-primary text-sm' to="/signup">Create an Account</Link></p>
                    <button 
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline">Continou with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;