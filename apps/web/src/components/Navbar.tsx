import React from 'react'
import { LogoText } from 'ui'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    return (
        <nav className='px-10 flex gap-1 bg-gray-100'>
            <div className='bg-gray-200 flex-1'>
                <LogoText />
            </div>
            <div className='bg-purple-200 w-96'>h</div>
            <div className='bg-red-200 flex-1'>h</div>
        </nav>
    )
}

export default Navbar
