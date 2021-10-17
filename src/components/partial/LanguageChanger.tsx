import { FC } from 'react'
import i18n from 'i18next'

const LanguageChanger: FC = () => {

    const languageChangesTo: any = {
        'en': 'ru',
        'ru': 'ua',
        'ua': 'en',
    }

    return <div onClick={
        () => i18n.changeLanguage(languageChangesTo[i18n.language])}>
        <img src={`/assets/svg/${i18n.language}.svg`} alt="Flag" style={{
            verticalAlign: "text-top",
            cursor: "pointer",
        }} />
    </div>
}

export default LanguageChanger
