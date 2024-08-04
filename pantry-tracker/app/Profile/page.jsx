import Link from 'next/link';
import React from 'react';
import { REGISTER_ROUTE } from '../constants/routes';
import InputField from '@/components/InputField';
import SubmitButton from '@/components/Button';
import { register } from 'module';
const Profile = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
            <div className="w-1/2 rounded-md bg-white/30 shadow-lg flex justify-between flex-col">
                <div className="h-28 w-full justify-center flex items-center">
                    <span className="text-3xl text-black font-mono font-semibold bg-yellow-300 p-3 rounded-lg">Welcome Back</span>
                </div>
                <form  className="h-full w-1/2 mx-auto ">
                    <InputField
                        // register={register}
                        // error={errors.email}
                        type="text"
                        placeholder="Enter Your Name Here..."
                        name="email"
                        label="Full Name"
                    />
                    <InputField
                        // register={register}
                        // error={errors.password}
                        type="email"
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
                        label="Confirm Password"
                    />
                    <SubmitButton label="Update" />
                </form>
                
            </div>
        </div>
    )
}

export default Profile;
   
