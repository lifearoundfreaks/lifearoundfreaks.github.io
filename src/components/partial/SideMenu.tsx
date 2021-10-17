import { FC, ReactNode, useState, Fragment } from 'react'
import { SideMenuElement, LanguageChanger } from '.'

interface SideMenuProps {
    logo?: ReactNode,
    links: {
        link: string, linkName: string, children?: {
            link: string, linkName: string
        }[]
    }[],
}

const SideMenu: FC<SideMenuProps> = ({ logo, links }) => {

    const [sideMenuActive, setSideMenuActive] = useState(false)

    return <div className='navbar-menu'>
        <div id="titleBar" style={{ transform: sideMenuActive ? "translateX(275px)" : "translateX(0)" }}>
            <button
                onClick={() => { setSideMenuActive(!sideMenuActive) }}
                className="toggle"
                style={{ backgroundColor: "transparent" }}
            ></button>
            <span className="title">
                {logo}
            </span>
            <div style={{
                width: 24,
                position: "absolute",
                right: 12,
                top: 8,
            }}>
                <LanguageChanger />
            </div>
        </div>
        <div id="navPanel" style={{ transform: sideMenuActive ? "translateX(0)" : "translateX(-275px)" }}><nav>
            {links.map(({ link, linkName, children }, index) => <Fragment key={index}>
                <SideMenuElement href={link} depth={0}>{linkName}</SideMenuElement>
                {children ? children.map(({ link, linkName }, index) => <SideMenuElement key={index} href={link} depth={1}>
                    {linkName}
                </SideMenuElement>) : <></>}
            </Fragment>)}
        </nav></div>
    </div>
}

export default SideMenu
