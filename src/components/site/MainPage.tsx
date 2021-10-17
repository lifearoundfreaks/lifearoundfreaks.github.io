import { FC } from "react"
import useScript from 'react-script-hook'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {


    const { t } = useTranslation()
    useScript({ src: '/assets/js/main.js' })

    return <>
        <section id="banner">
            <div className="content">
                <header>
                    <h2>{t("I am a software developer")}</h2>
                    <p>{t("This is the personal website I")} <br />
                        {t("created to serve as my portfolio.")}</p>
                </header>
                <span className="image"><img src="/images/pic01.jpg" alt="" /></span>
            </div>
            <a href="#one" className="goto-next scrolly">Next</a>
        </section>

        <section id="one" className="spotlight style1 bottom">
            <span className="image fit main"><img src="/images/pic02.jpg" alt="" /></span>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <header>
                                <h2>{t("mainpage one header")}</h2>
                                <p>{t("mainpage one subheader")}</p>
                            </header>
                        </div>
                        <div className="col-4 col-12-medium">
                            <p>{t("mainpage one paragraph 1")}</p>
                        </div>
                        <div className="col-4 col-12-medium">
                            <p>{t("mainpage one paragraph 2")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#two" className="goto-next scrolly">Next</a>
        </section>

        <section id="two" className="spotlight style2 right">
            <span className="image fit main"><img src="/images/pic03.jpg" alt="" /></span>
            <div className="content">
                <header>
                    <h2>{t("mainpage two header")}</h2>
                    <p>{t("mainpage two subheader")}</p>
                </header>
                <p>{t("mainpage two paragraph")}</p>
                <ul className="actions">
                    <li><a
                        href='https://github.com/lifearoundfreaks'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button">{t("Learn more")}
                    </a></li>
                </ul>
            </div>
            <a href="#three" className="goto-next scrolly">Next</a>
        </section>

        <section id="three" className="spotlight style3 left">
            <span className="image fit main bottom"><img src="/images/pic04.jpg" alt="" /></span>
            <div className="content">
                <header>
                    <h2>{t("mainpage three header")}</h2>
                    <p>{t("mainpage three subheader")}</p>
                </header>
                <p>{t("mainpage three paragraph")}</p>
                <ul className="actions">
                    <li><a
                        href='https://github.com/lifearoundfreaks'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button">{t("Learn more")}
                    </a></li>
                </ul>
            </div>
            <a href="#four" className="goto-next scrolly">Next</a>
        </section>

        <section id="four" className="wrapper style1 special fade-up">
            <div className="container">
                <header className="major">
                    <h2>{t("About my experience")}</h2>
                    <p>{t("Some points about what I learned along the way")}</p>
                </header>
                <div className="box alt">
                    <div className="row gtr-uniform">
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <span className="icon solid alt major fa-python"></span>
                            <h3>{t("python info header")}</h3>
                            <p>{t("python info details")}</p>
                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <span className="icon solid alt major fa-js"></span>
                            <h3>{t("js info header")}</h3>
                            <p>{t("js info details")}</p>
                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <span className="icon solid alt major fa-file-code"></span>
                            <h3>{t("programming info header")}</h3>
                            <p>{t("programming info details")}</p>
                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <span className="icon solid alt major fa-trello"></span>
                            <h3>{t("teamwork info header")}</h3>
                            <p>{t("teamwork info details")}</p>
                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <span className="icon solid alt major fa-link"></span>
                            <h3>{t("api info header")}</h3>
                            <p>{t("api info details")}</p>
                        </section>
                        <section className="col-4 col-6-medium col-12-xsmall">
                            <span className="icon solid alt major fa-git"></span>
                            <h3>{t("git info header")}</h3>
                            <p>{t("git info details")}</p>
                        </section>
                    </div>
                </div>
                <footer className="major">
                    <ul className="actions special">
                        <li><a
                            href='https://github.com/lifearoundfreaks'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button">{t("Learn more")}
                        </a></li>
                    </ul>
                </footer>
            </div>
        </section>
    </>
}

export default MainPage
