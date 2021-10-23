import { FC } from "react"
import useScript from 'react-script-hook'
import { useTranslation } from 'react-i18next'

const Credits: FC = () => {

    const { t } = useTranslation()
    useScript({ src: '/assets/js/main.js' })

    return <div className="wrapper"><div className="container">
        <header className="major">
            <h2>{t("404 - Page not found")}</h2>
            <p>{t("The page you were searching for does not seem to exist.")}</p>
        </header>
    </div></div>
}

export default Credits
