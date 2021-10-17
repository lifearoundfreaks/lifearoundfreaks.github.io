import { FC } from 'react'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'

interface FooterProps {
    copyright: string,
    links: { link: string, icon: string, linkName: string }[]
}

const Footer: FC<FooterProps> = ({
    copyright,
    links,
}) => {

    const { t } = useTranslation()

    return <footer id="footer">
        <ul className="icons">
            {links.map(({ link, icon, linkName }, index) =>
                <li key={index}><a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx("icon brands alt", icon)}
                >
                    <span className="label">{linkName}</span>
                </a></li>
            )}
        </ul>
        <ul className="copyright">
            <li>{copyright}</li><li>{t("Design by")} <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
    </footer>
}

export default Footer
