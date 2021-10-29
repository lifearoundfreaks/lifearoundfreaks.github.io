import { FC } from "react"
import useScript from 'react-script-hook'
import { useTranslation } from 'react-i18next'

const About: FC = () => {

    const { t } = useTranslation()
    useScript({ src: '/assets/js/main.js' })

    return <div className="wrapper"><div className="container">
        <header className="major">
            <h2>{t("About")}</h2>
            <p>{t("mainpage two subheader")}</p>
        </header>
        <section>
            <p>{t("mainpage two paragraph")+t("about page expansion")}</p>
            <p>{t("about page addition")}</p>
        </section>
    </div></div>
}

export default About
