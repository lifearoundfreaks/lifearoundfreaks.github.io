import { FC } from "react"
import useScript from 'react-script-hook'
import { useTranslation } from 'react-i18next'

const Credits: FC = () => {

    const { t } = useTranslation()
    useScript({ src: '/assets/js/main.js' })

    return <div className="wrapper"><div className="container">
        <header className="major">
            <h2>{t("Credits")}</h2>
            <p>{t("Various info about the assets used in the creation of this site")}</p>
        </header>
        <section>
            <h3>{t("Images are taken from")} <a href="https://www.pexels.com/"
                target="_blank"
                rel="noopener noreferrer"
            >Pexels</a> {t("and made by:")}
            </h3>
            <ul>
                <li>Kevin Ku</li>
                <li>Markus Spiske</li>
                <li>Pixabay</li>
                <li>Negative Space</li>
            </ul>
            <hr />
        </section>
    </div></div>
}

export default Credits
