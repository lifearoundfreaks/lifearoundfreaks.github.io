import { FC, ReactNode, useState } from 'react'
import { NavbarElement, SideMenu, LanguageChanger } from '.'

interface NavbarElementProps {
    logo?: ReactNode,
    links: {
        link: string, linkName: string, children?: {
            link: string, linkName: string
        }[]
    }[],
}

export interface ActiveMenus {
    [key: number]: boolean,
}

const Navbar: FC<NavbarElementProps> = ({ logo, links }) => {

    const [activeSubMenus, setActiveSubMenus] = useState<ActiveMenus>({})
    const [hoveredSubMenus, setHoveredSubMenus] = useState<ActiveMenus>({})

    const activateSubMenu = (index: number) => {
        setActiveSubMenus({ [index]: true })
    }
    const disableSubMenu = (index: number) => {
        setActiveSubMenus({ ...activeSubMenus, [index]: false })
    }
    const holdSubMenu = (index: number) => {
        setHoveredSubMenus({ [index]: true })
    }
    const releaseSubMenu = (index: number) => {
        setHoveredSubMenus({ ...hoveredSubMenus, [index]: false })
    }
    return <>
        <SideMenu links={links} logo={logo} />
        <header id="header">
            <h1 id="logo">{logo}</h1>
            <nav id="nav"><ul>
                {links.map(({ link, linkName, children }, index) => <li
                    key={index}
                    style={{ margin: 0, padding: 0 }}
                >
                    <div
                        onMouseEnter={() => activateSubMenu(index)}
                        onMouseLeave={() => disableSubMenu(index)}
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                    ><NavbarElement href={link}>{linkName}</NavbarElement></div>
                    {children ? <ul
                        onMouseEnter={() => holdSubMenu(index)}
                        onMouseLeave={() => releaseSubMenu(index)}
                        style={activeSubMenus[index] || hoveredSubMenus[index] ? {
                            display: "block",
                            background: "rgba(39, 40, 51, 0.965)",
                            position: "absolute",
                            right: "15%",
                            minWidth: "100px",
                            borderRadius: "5px",
                            paddingRight: "1em",
                        } : { display: "none" }}>
                        {children.map(({ link, linkName }, index) => <li key={index} style={{
                            textAlign: "left",
                            marginLeft: "0",
                            paddingLeft: "0",
                            fontSize: "14px",
                            display: "block",
                            lineHeight: "2.5",
                        }}>
                            <NavbarElement href={link}>{linkName}</NavbarElement>
                        </li>)}
                    </ul> : <></>}
                </li>)}

                <li style={{ padding: 0 }}><div style={{ width: 24 }}>
                    <LanguageChanger />
                </div></li>
            </ul></nav>
        </header>
    </>
}

export default Navbar
