import { FC, Fragment } from "react"
import useScript from 'react-script-hook'
import { useTranslation } from 'react-i18next'

const Examples: FC = () => {

    const { t } = useTranslation()
    useScript({ src: '/assets/js/main.js' })

    const additionalLinks: { [key: number]: { url: string, text: string }[] } = {
        1: [{ url: 'https://github.com/lifearoundfreaks/barotrauma-calc', text: t("Source code") }],
        2: [
            { url: 'https://github.com/feya-bilyzna', text: t("Organisation") },
            { url: 'https://github.com/AlecCross', text: t("My friend") },
        ],
        4: [{ url: 'https://telegram.me/youtube_videos_download_bot', text: t("Bot link (may be inactive)") }],
    }

    return <div id="main" className="wrapper style1">
        <div className="container">
            <header className="major">
                <h2>{t("Examples")}</h2>
                <p>{t("examples sub header")}</p>
            </header>
            <div className="row gtr-150">

                <div className="col-4 col-12-medium">
                    <section id="sidebar">
                        {[1, 2, 4, 3].map(exampleNumber => <Fragment key={exampleNumber}><section>
                            <a
                                href={t(`example${exampleNumber} url`)}
                                className="image fit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={`/images/example${exampleNumber}.jpg`}
                                    loading="eager"
                                    title={`Example ${exampleNumber} small image`}
                                    alt={`Example ${exampleNumber}`}
                                    width="100%" height="100%"
                                />
                            </a>
                            <h3>{t(`example${exampleNumber} header`)}</h3>
                            <p>{t(`example${exampleNumber} shorttext`)}</p>
                            <footer style={exampleNumber < 3 ? {} : { marginBottom: 32 }}>
                                <ul className="actions"><li>
                                    <a href={t(`example${exampleNumber} url`)} className="button">{t("See more")}</a>
                                </li></ul>
                            </footer>
                        </section>
                            {exampleNumber != 3 ? <hr /> : <></>}
                        </Fragment>)}
                    </section>
                </div>
                <div className="col-8 col-12-medium">
                    <section id="content">{[4, 1, 2, 3].map(exampleNumber => <section key={exampleNumber}>
                        <a
                            href={t(`example${exampleNumber} url`)}
                            className="image fit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`/images/example${exampleNumber}.jpg`}
                                loading="eager"
                                title={`Example ${exampleNumber} image`}
                                alt={`Example ${exampleNumber}`}
                                width="100%" height="100%"
                            />
                        </a>
                        <h3>{t(`example${exampleNumber} header`)}</h3>
                        <p>{t(`example${exampleNumber} paragraph1`)}</p>
                        <p>{t(`example${exampleNumber} paragraph2`)}</p>
                        {<ul className="actions">
                            <a
                                href={t(`example${exampleNumber} url`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button"
                            >{t("Details")}</a>
                            {additionalLinks[exampleNumber] ? additionalLinks[exampleNumber].map(
                                (link: { url: string, text: string }) => <li><a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button"
                                >{link.text}</a></li>
                            ) : <></>}
                        </ul>}

                    </section>)}</section>
                </div>
            </div>
        </div>
    </div>
}

export default Examples
