import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: { translation: {
        // Landing content
        "mainpage one header": "Background",
        "mainpage one subheader": "More than a decade as a hobbyist programmer, both front-end and back-end professional experience",
        "mainpage one paragraph 1": `
        Programming first became an interest to me in school,
        but it took me several years to think of it as my future career.
        I then learned Python, familiarised myself more with JavaScript,
        and got invested in the web-development.
        I then also learned (and loved) React.
        `,
        "mainpage one paragraph 2": `
        Web development is not the single thing I do.
        In fact, over the years I did a lot of various things,
        only a portion of which had anything to do with the web.
        I wrote scripts, programs, and small apps for casual needs.
        And at a few points, even made simple video games.
        `,
        "mainpage two header": "About me",
        "mainpage two subheader": "Some information about who I am",
        "mainpage two paragraph": `
        I am a Ukrainian software developer in my late twenties,
        registered as an individual entrepreneur.
        I love non-trivial tasks and always am interested to
        learn some new technology I haven't tried before.
        However, mundane tasks do not scare me away either.
        `,
        "mainpage three header": "What I do",
        "mainpage three subheader": "What kinds of work I'm interested in",
        "mainpage three paragraph": `
        It may sound a little bit cocky with my limited experience but
        I do think of myself as a fairly capable full-stack web developer.
        Other than that, I have some mobile and desktop app experience,however,
        I'm a bit less confident in those fields since I mostly did them as a hobby.
        `,
        "python info header": "Python experience",
        "python info details": "More than three years of working with Python and more than a year of professional work with the Django framework.",
        "js info header": "JavaScript experience",
        "js info details": "Around a decade of familiarity with the language and around a year of various hobby React projects.",
        "programming info header": "General programming experience",
        "programming info details": "Began with Pascal, continued to C++/C#, and in several years of hobby programming, moved on to Python and JavaScript (and sometimes PHP).",
        "teamwork info header": "Working in a team",
        "teamwork info details": "I had to learn to work in a team of other professionals and it helped me understand how large projects are structured.",
        "api info header": "Working with API",
        "api info details": "During my years of working in web development, I learned to both provide and consume API, as well as some nuances of that.",
        "git info header": "Working with VCS",
        "git info details": "It goes without saying but learning how to work with version control systems like git is also an important part of being a developer.",
    } },
    ru: { translation: {
        // Navbar
        "Home": "Главная",
        "Blog": "Блог",
        "About": "Обо мне",
        "General info": "Общая информация",
        "Credits": "Источники",
        // Main
        "I am a software developer": "Я разработчик программного обеспечения",
        "This is the personal website I": "Этот личный вебсайт был создан",
        "created to serve as my portfolio.": "мной в качестве портфолио.",
        "About my experience": "О моем опыте",
        "Some points about what I learned along the way": "Подробнее о вещах, которым я научился, будучи разработчиком",
        "Learn more": "Узнать больше",
        // Landing content
        "mainpage one header": "Бэкграунд",
        "mainpage one subheader": "Будучи программистом-любителем более десяти лет, получил также как фронтендный, так и бэкендный профессиональный опыт",
        "mainpage one paragraph 1": `
        Программирование впервые заинтересовало меня в школе,
        но мне потребовалось несколько лет, чтобы прийти к этому, как к своей будущей карьере.
        Со временем я изучил Python, больше познакомился с JavaScript,
        и влился в веб-разработку.
        Затем я также изучил (и полюбил) React.
        `,
        "mainpage one paragraph 2": `
        Веб-разработка - не единственное, чем я занимаюсь.
        Фактически, за эти годы я сделал много разных вещей,
        только часть из которых имела какое-либо отношение к Интернету.
        Я писал скрипты, программы и небольшие приложения для повседневных нужд.
        А порой даже делал простые видеоигры.
        `,
        "mainpage two header": "Обо мне",
        "mainpage two subheader": "Немного информации о том, кто я",
        "mainpage two paragraph": `
        Я украинский разработчик программного обеспечения, мне под тридцать,
        зарегистрирован как индивидуальный предприниматель.
        Люблю нетривиальные задачи и всегда заинтересован в
        изучении новых технологий, которые я раньше не пробовал.
        Впрочем, и рутинные задачи меня не пугают.
        `,
        "mainpage three header": "Чем я занимаюсь",
        "mainpage three subheader": "Какая работа меня интересует",
        "mainpage three paragraph": `
        С моим ограниченным опытом это может показаться некоторого рода хвастовством, однако
        я считаю себя достаточно способным full-stack веб-разработчиком.
        Помимо этого, у меня есть опыт работы с мобильными и настольными приложениями,
        хотя и разбираюсь в этих областях несколько слабее, поскольку в основном занимался ими как хобби.
        `,
        "python info header": "Опыт Python",
        "python info details": "Более трех лет работы с Python и более года профессиональной работы с фреймворком Django.",
        "js info header": "Опыт JavaScript",
        "js info details": "Около десяти лет знакомства с языком и около года различных хобби-проектов React.",
        "programming info header": "Общий опыт программирования",
        "programming info details": "Начинал с Pascal, затем продолжил на C++/C#, а через несколько лет хобби-программирования перешел на Python и JavaScript (а иногда и PHP).",
        "teamwork info header": "Работа в команде",
        "teamwork info details": "Мне довелось научиться работать в команде других профессионалов, и это помогло мне лучше понять, как устроены крупные проекты.",
        "api info header": "Работа с API",
        "api info details": "За годы веб-разработки я научился как предоставлять, так и использовать API, а также некоторым нюансам этого.",
        "git info header": "Работа с VCS",
        "git info details": "Возможно упоминание будет лишним, однако умение работы с системами контроля версий, такими как git, также является важной частью работы разработчика.",
        // About
        "Various info about the assets used in the creation of this site": 
        "Различная информация о ресурсах, использованных при создании этого сайта",
        "Images are taken from": "Изображения взяты с",
        "and made by:": " и сделаны:",
        // Footer
        "Made by lifearoundfreaks": "Сайт сделан lifearoundfreaks",
        "Design by": "Дизайн сделан",
    } },
    ua: { translation: {
        // Navbar
        "Home": "Головна",
        "Blog": "Блог",
        "About": "Про мене",
        "General info": "Загальна інформація",
        "Credits": "Джерела",
        // Main
        "I am a software developer": "Я розробник програмного забезпечення",
        "This is the personal website I": "Цей особистий вебсайт був створений",
        "created to serve as my portfolio.": "мною в якості портфоліо.",
        "About my experience": "Про мій досвід",
        "Some points about what I learned along the way": "Детальніше про речі, яким я навчився, будучи розробником",
        "Learn more": "Дізнатися більше",
        // Landing content
        "mainpage one header": "Бекграунд",
        "mainpage one subheader": "Будучи програмістом-любителем більше десяти років, отримав також як фронтендний, так і бекендний професійний досвід",
        "mainpage one paragraph 1": `
        Програмування вперше зацікавило мене в школі,
        але мені треба було кілька років, щоб прийти до цього, як до своєї майбутньої кар'єри.
        Згодом я вивчив Python, більше познайомився з JavaScript,
        і влився в веб-розробку.
        Потім я також вивчив (і полюбив) React.
        `,
        "mainpage one paragraph 2": `
        Веб-розробка - не єдине, чим я займаюся.
        Фактично, за ці роки я зробив багато різних речей,
        тільки частина з яких мала якийсь стосунок до Інтернету.
        Я писав скрипти, програми і невеликі додатки для повсякденних потреб.
        А часом навіть робив прості відеоігри.
        `,
        "mainpage two header": "Про мене",
        "mainpage two subheader": "Трохи інформації про те, хто я",
        "mainpage two paragraph": `
        Я український розробник програмного забезпечення, мені під тридцять,
        зареєстрований як індивідуальний підприємець.
        Люблю нетривіальні задачі і завжди зацікавлений в
        вивченні нових технологій, які я раніше не пробував.
        Втім, і рутинні завдання мене не лякають.
        `,
        "mainpage three header": "Чим я займаюся",
        "mainpage three subheader": "Яка робота мене цікавить",
        "mainpage three paragraph": `
        З моїм обмеженим досвідом це може здатися деякого роду хвастощами, однак
        я вважаю себе досить здатним full-stack веб-розробником.
        Крім цього, у мене є досвід роботи з мобільними і настільними додатками,
        хоча і розбираюся в цих областях дещо слабше, оскільки в основному займався ними як хобі.
        `,
        "python info header": "Досвід Python",
        "python info details": "Більше трьох років роботи з Python і більше року професійної роботи з фреймворком Django.",
        "js info header": "Досвід JavaScript",
        "js info details": "Близько десяти років знайомства з мовою і близько року різних хобі-проектів React.",
        "programming info header": "Загальний досвід програмування",
        "programming info details": "Починав з Pascal, потім продовжив на C++/C#, а через кілька років хобі-програмування перейшов на Python і JavaScript (а іноді і PHP).",
        "teamwork info header": "Робота в команді",
        "teamwork info details": "Мені довелося навчитися працювати в команді інших професіоналів, і це допомогло мені краще зрозуміти, як влаштовані великі проекти.",
        "api info header": "Робота с API",
        "api info details": "За роки веб-розробки я навчився як надавати, так і використовувати API, а також деяким нюансам цього.",
        "git info header": "Робота с VCS",
        "git info details": "Можливо згадка буде зайвою, однак вміння роботи з системами контролю версій, такими як git, також є важливою частиною роботи розробника.",
        // About
        "Various info about the assets used in the creation of this site": 
        "Різна інформація про ресурси, використані при створенні цього сайту",
        "Images are taken from": "Зображення взяті з",
        "and made by:": "і зроблені:",
        // Footer
        "Made by lifearoundfreaks": "Сайт зроблено lifearoundfreaks",
        "Design by": "Дизайн створено",
    } },
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
})
export default i18n
