import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface NavbarElementProps {
    href: string,
    children: string,
}

const NavbarElement: FC<NavbarElementProps> = ({ href, children }) => {
    return <NavLink
        to={href}>{children}
    </NavLink>
}

export default NavbarElement
