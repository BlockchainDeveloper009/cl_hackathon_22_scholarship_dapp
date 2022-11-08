import React from 'react'
import Link from 'next/link'
export const Navbar = () => {
    return (
        <nav>
            <ul>
            <Link href='/contact'><li>Contact</li></Link>
            <Link href='/contact'><a><li>Contact</li></a></Link>
                {/* <Link href='/'><a><li>Home</li></a></Link>
                <Link href='/contact'><a><li>Contact</li></a></Link>
                <Link href='/about'><a><li>About</li></a></Link> */}
            </ul>
        </nav>

    )
}