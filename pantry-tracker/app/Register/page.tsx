import Link from 'next/link';
import React from 'react';
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../constants/routes';
import InputField from '@/components/InputField';
import SubmitButton from '@/components/Button';
import { register } from 'module';
const Register = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
            <div className="w-1/2 rounded-md bg-white/30 shadow-lg flex justify-between flex-col">
                <div className="h-28 w-full justify-center flex items-center">
                    <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">Welcome To Register</span>
                </div>
                <form  className="h-full w-1/2 mx-auto ">
                    <InputField
                        // register={register}
                        // error={errors.email}
                        type="text"
                        placeholder="Enter Your Email Here..."
                        name="email"
                        label="Email"
                    />
                    <InputField
                        // register={register}
                        // error={errors.password}
                        type="password"
                        placeholder="Enter Your Password Here..."
                        name="password"
                        label="Password"
                    />
                     <InputField
                        // register={register}
                        // error={errors.password}
                        type="password"
                        placeholder="Confirm Your Password Here..."
                        name="cnf password"
                        label=" Confirm Password"
                    />
                    <SubmitButton label="Submit" />
                </form>
                <div className="h-20 mx-auto">
                    <span className="text-sm text-gray-600">Already have an account?  
                        <Link href={LOGIN_ROUTE}><span className="text-blue-500 font-semibold text-md" > Login Here</span></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register;
   
