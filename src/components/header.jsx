import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
const Header = () => {
  return (
    <>
    <nav className='py-4 flex justify-between items-center'>
       <Link>
       <img src="/logo.png" alt="" className='h-20'/>
       </Link> 

       <Button varient="outline" >Login</Button>
       {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </nav>
    </>
    
  )
}

export default Header