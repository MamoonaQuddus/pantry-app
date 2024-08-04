import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE } from '@/app/constants/routes';
import Link from 'next/link';
import React from 'react';
const Header = () => {
    const isLoggedIn = false; // Assuming this is a state variable
    // const isLoggedIn = true; 
    return (
  
      <header className="h-20 bg-black text-white flex justify-between items-center px-10 drop-shadow-[0_20px_10px_rgba(0,0,0,0.2)]">
        <nav className="w-full flex justify-between items-center">
           <Link href={HOME_ROUTE}><div>Logo</div></Link>
  
          <ul className="flex gap-4">
            { !isLoggedIn && 
              <>
               {/* <li>Login</li>
               <li>Register</li> */}
               <Link href={LOGIN_ROUTE}><li>Login</li></Link>
                <Link href={REGISTER_ROUTE}><li>Register</li></Link>
                
              </>
            } 
            { isLoggedIn &&  
              <>
               {/* <li>Profile</li>
               <li>Logout</li> */}
                <Link href={PROFILE_ROUTE}><li>Profile</li></Link>
                {/* <li className=" cursor-pointer" onClick={logOut}>Logout</li> */}
              </>
            }
          </ul>
        </nav>
      </header>
    )
} 

export default Header;