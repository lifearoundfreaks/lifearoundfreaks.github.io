import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface SideMenuProps {
    href: string,
    depth: number,
    children: string,
}

const SideMenuElement: FC<SideMenuProps> = ({ href, depth, children }) => {
    return <>
        <NavLink
            to={href}
            className={`link depth-${depth}`}
            style={{ marginLeft: 20 * depth }}
        >{children}</NavLink>
    </>
}

export default SideMenuElement
