import { FC, ReactNode, useState } from 'react'
import { useLocation } from 'react-router';
import { NavbarElement, SideMenu, LanguageChanger } from '.'
import packageJson from '../../../package.json';
import { Helmet } from "react-helmet-async"

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

    const location = useLocation()
    const remoteUrl = 'https://' + packageJson.name + location.pathname
    const pagesSubdescription: any = {
        '/': 'Homepage.',
        '/examples/': 'Examples of my work.',
        '/resume/': 'Software developer resume.',
        '/about/': 'More about me.',
        '/credits/': 'Credits page.',
    }
    const title = `${pagesSubdescription[location.pathname] || '404 - Not found.'} LifeAroundFreaks' portfolio`
    const description = 
        "Mainly Python and JavaScript software developer portfolio " +
        "with concrete examples of previous projects and various bits of information. " +
        pagesSubdescription[location.pathname] || '404 - Page not found.'

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
        <Helmet>
            <title>{title}</title>
            <link rel="canonical" href={remoteUrl} />
            
	        <meta property="og:title" content={title} />
            <meta property="og:url" content={remoteUrl} />
            <meta property="og:description" content={description} />
        </Helmet>
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
                            right: "25%",
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
