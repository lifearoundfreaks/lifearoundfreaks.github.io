import { FC } from "react"
import useScript from 'react-script-hook'
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom"

const Resume: FC = () => {

    useScript({ src: '/assets/js/main.js' })
    const { t } = useTranslation()

    return <div className="wrapper"><div className="container">
        <header className="major">
            <h2>{t("Andriy Hanzha")}</h2>
            <p>{t("Software Developer")}</p>
        </header>
        <section>
            <div className="row gtr-150">

                <div className="col-8 col-12-medium">
                    <section id="content">
                        <h3>{t("Contact info")}</h3>
                        <ul className="alt">
                            <li><span className="icon fa-phone" /><img
                                src={"/assets/svg/uk.svg"}
                                alt="Flag"
                                title={t("Language selector")}
                                width="100%" height="100%"
                                loading="eager"
                                style={{
                                    verticalAlign: "text-top",
                                    width: 48,
                                    padding: "0 10px 0 10px"
                                }} />(067) 853-18-55</li>
                            <li><span className="icon fa-envelope" /><a
                                href="mailto:lifearoundfreaks@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ marginLeft: 10 }}
                            >life.around.freaks@gmail.com</a></li>
                        </ul>
                        <h3>{t("Portfolio")}</h3>
                        <p><Link to="/examples/">{t("Examples of my work")}</Link></p>
                        <h3>{t("Registered as")}</h3>
                        <p><a
                            href="https://lookup.in.ua/entities/cf4c6bfb-5719-4bf0-a3b6-8ef1b7749b80?referral=%2Fsearch%3Ftext%3D%25D0%2593%25D0%25B0%25D0%25BD%25D0%25B6%25D0%25B0%2520%25D0%2590%25D0%25BD%25D0%25B4%25D1%2580%25D1%2596%25D0%25B9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >{t("Individual entrepreneur")}</a></p>
                        <h3>{t("Preferred working conditions")}</h3>
                        <p>{t("Remote work is highly preferable. A flexible schedule is welcome. Both contractual work and official employment suit me.")}</p>                        <h3>{t("My qualities")}</h3>
                        <ul className="alt">
                            <li>{t("resume quality 1")}</li>
                            <li>{t("resume quality 2")}</li>
                            <li>{t("resume quality 3")}</li>
                            <li>{t("resume quality 4")}</li>
                            <li>{t("resume quality 5")}</li>
                        </ul>
                        <h3>{t("Work experience")}</h3>
                        <h5>{t("Web-developer")} (Django, jQuery, {t("HTML/CSS design")})</h5>
                        <p><a
                            href="https://profbit.com.ua/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >ProfBIT</a> <sub>{t("(2019 august - 2020 september)")}</sub></p>
                        <ul>
                            <li>{t("job 1 specialization 1")}</li>
                            <li>{t("job 1 specialization 2")}</li>
                            <li>{t("job 1 specialization 3")}</li>
                            <li>{t("job 1 specialization 4")}</li>
                        </ul>
                        <h5>{t("Web-developer")} (Node, React, {t("HTML/CSS design")})</h5>
                        <p><a
                            href="https://www.upwork.com/o/companies/~012ac774459134d21c/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Iterix</a> <sub>{t("(2021 november - 2022 february)")}</sub></p>
                        <ul>
                            <li>{t("job 2 specialization 1")}</li>
                            <li>{t("job 2 specialization 2")}</li>
                            <li>{t("job 2 specialization 3")}</li>
                            <li>{t("job 2 specialization 4")}</li>
                        </ul>
                        <h3>{t("About")}</h3>
                        <p>{t("mainpage two paragraph") + t("about page expansion")}</p>
                        <h3>{t("Education")}</h3>
                        <p>{t("Secondary General Education")}</p>
                    </section>
                </div>
                <div className="col-4 col-12-medium">
                    <section id="sidebar">
                        <h3>{t("Languages")}</h3>
                        <table><tbody>
                            <tr>
                                <td>Python</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>JavaScript</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>C#</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>PHP</td>
                                <td>
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>C / C++</td>
                                <td>
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                        </tbody></table>
                        <h3>{t("Web-frameworks / libraries")}</h3>
                        <table><tbody>
                            <tr>
                                <td>Django</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>ReactJS</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>ASP.NET</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>Flask</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>Laravel</td>
                                <td>
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                        </tbody></table>
                        <h3>{t("Other")}</h3>
                        <table><tbody>
                            <tr>
                                <td>{t("ORM experience")}</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>jQuery</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>Materialize</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>Bootstrap</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>Redux</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>Redis</td>
                                <td>
                                    <span className="icon fa-star" />
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>Docker</td>
                                <td>
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td>{t("QA Automation")}</td>
                                <td>
                                    <span className="icon fa-star" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{t("and more...")}</td>
                            </tr>
                        </tbody></table>
                    </section>
                </div>
            </div>
        </section>
    </div></div>
}

export default Resume
