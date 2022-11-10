import React from 'react'
import Link from 'next/link'
import Home from './Home'

export const Navbar = () => {
    return (
        <nav>
            <ul>
            <Link href='/'><li>Home</li></Link>
            
             <Link href='/contact'><li>Contact</li></Link>
            <Link  href='/about'><li>About</li></Link> 
            
            
                {/* <Link href='/'><a><li>Home</li></a></Link>
                <Link href='/contact'><a><li>Contact</li></a></Link>
                <Link href='/about'><a><li>About</li></a></Link> */}
            </ul>
            
        </nav>

    )
}