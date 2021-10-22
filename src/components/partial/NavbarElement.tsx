import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface NavbarElementProps {
    href: string,
    children: string,
}

const NavbarElement: FC<NavbarElementProps> = ({ href, children }) => {
    return <NavLink
        to={href}
        activeStyle={{ fontWeight: "bold", pointerEvents: "none" }}
        exact
    >
        {children}
    </NavLink>
}

export default NavbarElement
