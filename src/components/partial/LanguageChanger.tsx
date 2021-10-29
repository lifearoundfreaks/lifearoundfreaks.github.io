import { FC } from 'react'
import i18n from 'i18next'
import { useCookies } from 'react-cookie'

const LanguageChanger: FC = () => {

    const [, setCookie] = useCookies(['selected-language'])

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
            src={`/assets/svg/${i18n.language}.svg`}
            alt="Flag"
            title="Language selector"
            width="100%" height="100%"
            loading="eager"
            style={{
                verticalAlign: "text-top",
                cursor: "pointer",
            }} />
    </div>
}

export default LanguageChanger
