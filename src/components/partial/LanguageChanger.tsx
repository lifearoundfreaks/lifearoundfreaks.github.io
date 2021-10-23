import { FC } from 'react'
import i18n from 'i18next'

const LanguageChanger: FC = () => {

    const languageChangesTo: any = {
        'en': 'ru',
        'ru': 'uk',
        'uk': 'en',
    }

    return <div onClick={
        () => i18n.changeLanguage(languageChangesTo[i18n.language])}>
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
