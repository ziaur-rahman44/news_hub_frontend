import React from 'react';
import { useSignInWithGoogle,useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const onSubmit = async (data) =>{
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name})
        navigate("/appointment")

    }

    

    let signInError;

    if(loading || gLoading || updating){
        return <Loading/>
    }
    if(error || gError || updateError){
        signInError = <p className="text-red-500">{error?.message || gError?.message || updateError?.message}</p>
    }
    if(user || gUser){
        console.log(user || gUser)
    }

    return (
        <div className='flex justify-center my-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="text-center font-bold text-2xl mb-3">SIgnUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="w-full max-w-xs">
                            
                            <input 
                                {...register("name", 
                                    {
                                    required:{
                                        value:true,
                                        message : "Name is required"
                                    }
                                    }
                                )}
                                type="text" 
                                placeholder="Your Name" 
                                className="input input-bordered w-full max-w-xs" 
                            />
                            <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    
                                
                            </label>
                    </div>

                    <div className=" w-full max-w-xs">
                        
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
                        <input className="btn w-full max-w-xs text-white" type="submit" value="signup"/>
                        </form>

                    <div className="divider text-sm">OR</div>
                    <p className='text-sm pb-2'>Your have already an account <Link className='text-primary' to="/login">Please Login</Link> </p>
                    <button 
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline ">Continou with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;