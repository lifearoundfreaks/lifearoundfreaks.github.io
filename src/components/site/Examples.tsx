import { FC } from "react"
import useScript from 'react-script-hook'
import { useTranslation } from 'react-i18next'

const Examples: FC = () => {

    const { t } = useTranslation()
    useScript({ src: '/assets/js/main.js' })

    return <div id="main" className="wrapper style1">
        <div className="container">
            <header className="major">
                <h2>{t("Examples")}</h2>
                <p>{t("examples sub header")}</p>
            </header>
            <div className="row gtr-150">

                <div className="col-4 col-12-medium">
                    <section id="sidebar">
                        {[1, 2, 3, 4].map(exampleNumber => <><section>
                            <a
                                href={t(`example${exampleNumber} url`)}
                                className="image fit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={`images/example${exampleNumber}.jpg`} alt={`Example ${exampleNumber}`} />
                            </a>
                            <h3>{t(`example${exampleNumber} header`)}</h3>
                            <p>{t(`example${exampleNumber} shorttext`)}</p>
                            <footer style={exampleNumber < 3 ? {} : { marginBottom: 32 }}>
                                <ul className="actions"><li>
                                    <a href={t(`example${exampleNumber} url`)} className="button">{t("See more")}</a>
                                </li></ul>
                            </footer>
                        </section>
                            {exampleNumber < 3 ? <hr /> : <></>}
                        </>)}
                    </section>
                </div>
                <div className="col-8 col-12-medium">
                    <section id="content">{[4, 1, 2, 3].map(exampleNumber => <section>
                        <a
                            href={t(`example${exampleNumber} url`)}
                            className="image fit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={`images/example${exampleNumber}.jpg`} alt={`Example ${exampleNumber}`} />
                        </a>
                        <h3>{t(`example${exampleNumber} header`)}</h3>
                        <p>{t(`example${exampleNumber} paragraph1`)}</p>
                        <p>{t(`example${exampleNumber} paragraph2`)}</p>
                    </section>)}</section>
                </div>
            </div>
        </div>
    </div>
}

export default Examples
