import Link from 'next/link';
import React from 'react';
import { REGISTER_ROUTE } from '../constants/routes';
import InputField from '@/components/InputField';
import SubmitButton from '@/components/Button';
import {auth} from   '@/services/firebase';
import { register } from 'module';
const Login = () => {
    console.log("verify",auth.config )
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
            <div className="w-1/2 rounded-md bg-white/30 shadow-lg flex justify-between flex-col">
                <div className="h-28 w-full justify-center flex items-center">
                    <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">Welcome To SignIn</span>
                </div>
                <form  className="h-full w-1/2 mx-auto ">
                    <InputField
                        // register={register}
                        // error={errors.email}
                        type="text"
                        placeholder="Enter Your Email Here..."
                        name="email"
                        label="Email" register={undefined} error={undefined}                    />
                    <InputField
                        // register={register}
                        // error={errors.password}
                        type="password"
                        placeholder="Enter Your Password Here..."
                        name="password"
                        label="Password" register={undefined} error={undefined}                    />
                    <SubmitButton label="Submit" />
                </form>
                <div className="h-20 mx-auto">
                    <span className="text-sm text-gray-600">Don't have an account?  
                        <Link href={REGISTER_ROUTE}><span className="text-blue-500 font-semibold text-md" > Register Here</span></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login;
   
