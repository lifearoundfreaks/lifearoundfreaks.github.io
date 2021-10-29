import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCookies } from 'react-cookie'

const LanguageChanger: FC = () => {

    const [, setCookie] = useCookies(['selected-language'])
    const { t, i18n } = useTranslation()
    const [rerenderHackTriggered, setRerenderHackTriggered] = useState(false)

    useEffect(() => {
        if (!rerenderHackTriggered) setRerenderHackTriggered(true)
    }, [rerenderHackTriggered])

    const languageChangesTo: any = {
        'en': 'ru',
        'ru': 'uk',
        'uk': 'en',
    }

    const nextLang = languageChangesTo[i18n.language]

    return <div onClick={
        () => {
            i18n.changeLanguage(nextLang)
            setCookie('selected-language', nextLang, { path: '/' })
        }
    }>
        <img
            src={`/assets/svg/${i18n.language}.svg?${performance.now()}`}
            alt="Flag"
            title={t("Language selector")}
            width="100%" height="100%"
            loading="eager"
            style={{
                verticalAlign: "text-top",
                cursor: "pointer",
            }} />
    </div>
}

export default LanguageChanger
