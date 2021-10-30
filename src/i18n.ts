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
        // Examples content
        "examples sub header": "Some examples of my completed projects",
        "example1 url": "https://lifearoundfreaks.github.io/barotrauma-calc/",
        "example1 header": "Crafting calculator",
        "example1 shorttext": `
        A calculator tool for a video game called Barotrauma. Helps with finding the
        most efficient way to spend your crafting resources cost-wise.
        `,
        "example1 paragraph1": `
        I love Barotrauma, it is a very atmospheric horror indie game with a vast
        amount of side activities. One of those activities is crafting. It has a good
        wiki describing various game items and recipes. But the wiki is often outdated
        and sometimes doesn't have important bits of information. You are also not always
        sure what best to do with your resources, since there is a lot of ways to spend them.
        So I often had to code-dive (this game is partly open-source) to figure out the game mechanics.
        `,
        "example1 paragraph2": `
        At some point, I got tired of digging through XML files in search of good recipes and
        decided to create my own tool to quickly look up profitable ways to spend money and resources.
        I wrote a Python parser that collects all the relevant data from the game folder and a React
        app to display this info in various useful ways. I'm quite proud of this project since I did
        it while learning React and having to figure out how game mechanics work to recreate that in my calculator.
        `,
        "example2 url": "https://feya-bilyzna.github.io/",
        "example2 header": "Online lingerie store",
        "example2 shorttext": `
        Online store built from the ground up with React, Django, and Materialize CSS.
        It is a collaboration project in which I did all of the back-end and some front-end functionality too.
        `,
        "example2 paragraph1": `
        This may still be in the works as I am writing this, but most of the functionality
        should already be working. This was done in collaboration with my friend as we
        learned GraphQL and how to work with API in React applications. I provided API
        and Django admin back-end endpoints as the means to work with the customer orders
        while my friend wrote the React application that consumes said API. I also wrote
        parts of it too as this is the first web project for my friend.
        `,
        "example2 paragraph2": `
        While we were just a team of two, it was still an interesting experience,
        as we had to figure out work priorities and our team roles along the way.
        I got to teach my friend a lot of things about developing a web app while
        also learning some new things myself. It wasn't the fastest development
        process because I tried not to rush things too much and we basically built
        our own web store engine (if a bit simplistic) from scratch.
        `,
        "example3 url": "https://github.com/lifearoundfreaks/vodokanal-parser",
        "example3 header": "Excel parser",
        "example3 shorttext": `
        An Excel spreadsheet parser that I wrote to help reduce redundant bureaucracy.
        Consumes spreadsheets that are formatted in a certain way and outputs a new
        registry spreadsheet with some relevant data.
        `,
        "example3 paragraph1": `
        A relative of mine works in a government company with a somewhat outdated
        consumable material accounting system. They were tasked with the incredibly
        routine work of moving contents from order spreadsheets to a registry spreadsheet,
        one at a time. I've made this not terribly sophisticated program to automate
        large chunks of their work for them.
        `,
        "example3 paragraph2": `
        With this project, I have improved my skill of working with spreadsheets programmatically.
        As well as learning to format them using only Python.
        I may have to finalize my parser at some point later, since,
        there are still things that my relative has to do manually,
        but for now I am fairly limited in the necessary data I have access to.
        `,
        "example4 url": "https://github.com/lifearoundfreaks/youtube-download",
        "example4 header": "Video-cropping bot",
        "example4 shorttext": `
        Telegram bot that takes a youtube link with optional timestamps and
        crops up to a 1-minute portion of said video. Useful, when you want
        to show someone a short portion of a youtube clip but not send them the entire video.
        `,
        "example4 paragraph1": `
        A lot of Youtube downloader services do not provide the complete set of
        resolutions when you try to download a video. The reason is that most
        higher resolutions use adaptive streams instead of progressive and that
        complicates things somewhat for the downloading party. So a lot of services
        deal with it by just not dealing with it at all and only allowing you to
        download in lower resolutions (or without sound/sound only). At first,
        this project was an attempt to solve that issue while also bringing in
        the convenience of being a telegram bot.
        `,
        "example4 paragraph2": `
        However, it quickly became apparent that @utubebot already implemented
        that pretty well. That and the fact that I tried to bring in the crop
        feature which collided with the adaptive streams conversion feature and
        became resource-intensive. Being resource-intensive was not in my plans
        at all, since I used free Heroku hours to deploy this project and was
        fairly limited in that regard. So instead I dialed the whole thing down
        and now this is a simple service for cropping small portions of youtube
        videos (I limited it to 1-minute portions).
        `,
        // Resume page content
        "resume quality 1": "The desire to learn new languages and technologies when needed.",
        "resume quality 2": "Willingness to take a test task if necessary.",
        "resume quality 3": "Ability to both provide and use APIs (REST, GraphQL).",
        "resume quality 4": "Teamwork experience, used Trello and Github Projects in the past.",
        "resume quality 5": "Ability to work with Git and code review experience.",
        // About page content
        "about page expansion": `
        Among my good qualities, I'd name thoroughness and insight. As for my
        bad qualities, I can be a bit stubborn, especially when dealing with
        my tasks. It can be hard for me to settle down for a simpler solution
        when I initially had something more complex in mind.
        Lately, I try to avoid that, however.`,
        "about page addition": `
        In my spare time, I play a lot of video games and write music. I also
        sometimes code during it too and enjoy helping other people with fixing
        their bugs or dealing with errors, quite often for free. Or even teaching
        someone to code. Even though I mostly focus on Python and JavaScript
        nowadays, I can still involve myself in other languages too, particularly
        the ones I have previously used, like C#. Sometimes I wish I was more
        proficient in a lower level language like C but, oh well, I have different priorities.
        `,
    } },
    ru: { translation: {
        // Navbar
        "lifearoundfreaks' portfolio": "Портфолио lifearoundfreaks",
        "Home": "Главная",
        "Examples": "Примеры",
        "Resume": "Резюме",
        "About": "Обо мне",
        "General info": "Общая информация",
        "Credits": "Источники",
        "Language selector": "Выбор языка",
        // Main
        "I am a software developer": "Я разработчик ПО",
        "This is the personal website I": "Этот личный вебсайт был создан",
        "created to serve as my portfolio.": "мной в качестве портфолио.",
        "About my experience": "О моем опыте",
        "Some points about what I learned along the way": "Подробнее о вещах, которым я научился, будучи разработчиком",
        "Learn more": "Узнать больше",
        "See more": "Увидеть больше",
        "Details": "Подробнее",
        "Examples of my work": "Примеры моих работ",
        "My github page": "Моя страница github",
        "More about me": "Больше обо мне",
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
        // Examples content
        "examples sub header": "Некоторые примеры моих реализованных проектов",
        "example1 header": "Калькулятор для крафта",
        "example1 shorttext": `
        Калькулятор для видеоигры под названием Barotrauma. Помогает найти
        самый эффективный способ потратить игровые ресурсы с ценовой точки зрения.
        `,
        "example1 paragraph1": `
        Я люблю Barotrauma, это очень атмосферная хоррор инди-игра с огромным
        количеством сторонних занятий. Одно из таких занятий - производство предметов. У игры хорошая
        вики с описанием различных игровых предметов и рецептов. Однако, вики часто устаревает
        а иногда не содержит важной информации. Также, не всегда можно быть
        уверенным, на что лучше всего потратить ресурсы, поскольку таких способов много.
        Поэтому мне часто приходилось нырять в код (у игры частично открытый исходный код),
        чтобы понять ту или иную механику игры.
        `,
        "example1 paragraph2": `
        В какой-то момент мне надоело копаться в XML-файлах в поисках хороших рецептов и я
        решил создать свой собственный инструмент для быстрого поиска выгодных способов потратить деньги и ресурсы.
        Я написал Python парсер, который собирает все необходимые данные из папки с игрой, а также React
        приложение, чтобы отображать эту информацию различными информативными способами. Я довольно сильно
        горжусь этим проектом, поскольку изучал на нем возможности React и разбирался, как работает игровая механика,
        чтобы воссоздать это в моем калькуляторе.
        `,
        "example2 header": "Онлайн магазин белья",
        "example2 shorttext": `
        Интернет-магазин, созданный с нуля на React, Django и Materialize CSS.
        Это совместный проект, в котором я делал бэкенд, а также части фронтенда.
        `,
        "example2 paragraph1": `
        На момент написания, проект может быть еще не завершен, однако большая часть функционала
        уже должна работать. Сайт был сделан совместно с моим другом и в процессе мы учили GraphQL,
        а также осваивали работу с API в React-приложениях. Я предоставил API энд-поинты и инструменты
        администрирования Django в качестве способа работы с заказами,
        в то время как мой друг написал приложение React, которое использует вышеупомянутое API. Также, я
        писал части фронтенда, ведь это первый веб-проект для моего друга.
        `,
        "example2 paragraph2": `
        Хотя нас и было только двое, это был интересный опыт,
        поскольку нам приходилось определять рабочие приоритеты и наши командные роли по ходу дела.
        В процессе мне пришлось многое подсказывать своему другу, да и сам я
        научился нескольким новым вещам. Это был не самый быстрый процесс разработки,
        потому что я старался не торопить проект, да и ко всему, мы, по сути, писали
        наш собственный движок интернет-магазина (пусть и простой) с нуля.
        `,
        "example3 header": "Excel парсер",
        "example3 shorttext": `
        Excel парсер таблиц, который я написал для устранения излишней бюрократии.
        Принимает таблицы, отформатированные определенным образом, и создает новую
        таблицу реестра, в которую переносятся соответствующие данные.
        `,
        "example3 paragraph1": `
        Мой родственник работает в государственной компании с несколько устаревшей
        системой учета расходных материалов. Часть работы заключалась в неимоверно
        рутинной задаче по переносу части содержимого из таблиц заказов в таблицу реестра,
        причем поштучно. Я написал эту не очень сложную программу для автоматизации
        значительной части данной работы.
        `,
        "example3 paragraph2": `
        В этом проекте я улучшил свои навыки программной работы с электронными таблицами.
        А также научился их форматировать, используя только Python.
        В какой-то момент мне, возможно, придется дуработать свой парсер, поскольку
        еще остались вещи, которые мой родственник должен делать вручную,
        однако, на данный момент я довольно ограничен в необходимых данных, которые я могу использовать.
        `,
        "example4 header": "Бот для обрезки видео",
        "example4 shorttext": `
        Telegram-бот, который принимает ссылку на YouTube с опциональными отметками времени и
        обрезает части указанного видео не более одной минуты. Полезно, когда необходимо
        показать кому-то короткую часть клипа на YouTube, но не отправить ему все видео.
        `,
        "example4 paragraph1": `
        Многие сервисы загрузки Youtube не предоставляют полный набор
        разрешений при попытке загрузить видео. Причина в том, что большинство
        высоких разрешений используют адаптивные потоки вместо прогрессивных, и это
        несколько усложняет загрузку. И многие сервисы банально не предоставляют
        возможности скачивать в более высоком разрешении (или скачивание ограничено беззвучной/звуковой дорожкой).
        Вначале, этот проект был попыткой решить данную проблему, принося помимо этого
        удобство обращения с Telegram-ботами.
        `,
        "example4 paragraph2": `
        Однако быстро стало очевидно, что @utubebot уже реализовал
        данный функционал очень хорошо. Кроме того, я пытался добавить функцию обрезки видео,
        которая начала вызывать проблемы в сочетании с функцией объединения адаптивных потоков, становясь ресурсоемкой.
        Ресурсоемкость совершенно не входила в мои планы, поскольку я использовал бесплатные часы Heroku
        для развертывания этого проекта и был довольно ограничен в этом отношении.
        Поэтому я отказался от многого
        и теперь это простой сервис для обрезки небольших кусочков Youtube
        видео (я сделал ограничение в одну минуту).
        `,
        // Resume page content
        "Andriy Hanzha": "Ганжа Андрей",
        "Software Developer": "Разработчик ПО",
        "Contact info": "Контактная информация",
        "Portfolio": "Портфолио",
        "Registered as": "Зарегистрирован как",
        "Individual entrepreneur": "Физическое лицо-предприниматель",
        "Preferred working conditions": "Предпочитаемые условия труда",
        "Remote work is highly preferable. A flexible schedule is welcome. Both contractual work and official employment suit me.":
        "Крайне предпочтительна удаленная работа. Приветствуется гибкий график. Меня устраивает как работа по контракту, так и официальное трудоустройство.",
        "My qualities": "Мои качества",
        "resume quality 1": "Желание изучать новые языки и технологии в случае их востребованности.",
        "resume quality 2": "Готовность пройти тестовое задание при необходимости.",
        "resume quality 3": "Умение как предоставлять, так и исользовать API (REST, GraphQL).",
        "resume quality 4": "Опыт работы в команде и использования Trello, Github Project.",
        "resume quality 5": "Умение работать с Git и опыт code review.",
        "Work experience": "Опыт работы",
        "Web-developer (Django, jQuery, HTML/CSS design)": "Веб-разработчик (Django, jQuery, HTML/CSS дизайн)",
        "(2019 august - 2020 september)": "(август 2019 - сентябрь 2020)",
        "Education": "Образование",
        "Secondary General Education": "Среднее Общее Образование",
        "Languages": "Языки",
        "Web-frameworks / libraries": "Web-фреймворки / библиотеки",
        "Other": "Другое",
        "ORM experience": "Опыт c ORM",
        "QA Automation": "QA автоматизация",
        "and more...": "и другое...",
        // About page content
        "about page expansion": `
        Из своих хороших качеств я бы назвал дотошность и проницательность. Что до плохих,
        я могу быть несколько упрямым, особенно во время выполнения своей задачи.
        Мне бывает трудно смириться и применить более простое решение
        если я изначально задумывал что-то более сложное.
        Но в последнее время я стараюсь отказываться от этой привычки.
        `,
        "about page addition": `
        В свободное время я много играю в видеоигры и пишу музыку. Порой код я пишу
        даже когда не занят, а также, с удовольствием помогаю другим людям с исправлением
        ошибок и устранением багов, зачастую бесплатно. Или даже обучаю кого-нибудь программированию.
        Хотя, в данный момент я в основном и фокусируюсь на Python и JavaScript,
        другие языки мне тоже по силам, особенно те, которые я использовал ранее, например, C#.
        Иногда жалею, что нет хороших познаний в языке более низкого уровня,
        например C, но, увы, у меня другие приоритеты.
        `,
        // Additional links
        "Source code": "Исходный код",
        "Organisation": "Организация",
        "My friend": "Мой друг",
        "Bot link (may be inactive)": "Бот (может быть неактивен)",
        // About
        "Various info about the assets used in the creation of this site": 
        "Различная информация о ресурсах, использованных при создании этого сайта",
        "Images are taken from": "Изображения взяты с",
        "and made by:": " и сделаны:",
        "Template design": "Дизайн заготовки",
        // Footer
        "Made by lifearoundfreaks": "Сайт сделан lifearoundfreaks",
        "Design by": "Дизайн сделан",
        // 404
        "404 - Page not found": "404 - Страница не найдена",
        "The page you were searching for does not seem to exist.": "Похоже, что страница, которую вы искали, не найдена",
    } },
    uk: { translation: {
        // Navbar
        "lifearoundfreaks' portfolio": "Портфоліо lifearoundfreaks",
        "Home": "Головна",
        "Examples": "Приклади",
        "Resume": "Резюме",
        "About": "Про мене",
        "General info": "Загальна інформація",
        "Credits": "Джерела",
        "Language selector": "Вибір мови",
        // Main
        "I am a software developer": "Я розробник ПЗ",
        "This is the personal website I": "Цей особистий вебсайт був створений",
        "created to serve as my portfolio.": "мною в якості портфоліо.",
        "About my experience": "Про мій досвід",
        "Some points about what I learned along the way": "Детальніше про речі, яким я навчився, будучи розробником",
        "Learn more": "Дізнатися більше",
        "See more": "Побачити більше",
        "Details": "Детальніше",
        "Examples of my work": "Приклади моїх робіт",
        "My github page": "Моя сторінка github",
        "More about me": "Більше про мене",
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
        // Examples content
        "examples sub header": "Деякі приклади моїх реалізованих проектів",
        "example1 header": "Калькулятор для крафта",
        "example1 shorttext": `
        Калькулятор для відеоігри під назвою Barotrauma. Допомагає знайти
        найефективніший спосіб витратити ігрових ресурсів з цінової точки зору.
        `,
        "example1 paragraph1": `
        Я люблю Barotrauma, це дуже атмосферна хоррор інді-гра з величезною
        кількістю сторонніх занять. Одне з таких занять - виробництво предметів. У гри хороша
        вікі з описом різних ігрових предметів і рецептів. Однак, вікі часто застаріває
        а іноді не містить важливої ​​інформації. Також, не завжди можна бути
        впевненим, на що найкраще витратити ресурси, оскільки таких способів багато.
        Тому мені часто доводилося пірнати в код (у гри частково відкритий вихідний код),
        щоб зрозуміти ту чи іншу механіку гри.
        `,
        "example1 paragraph2": `
        У якийсь момент мені набридло копатися в XML-файлах в пошуках хороших рецептів і я
        вирішив створити свій власний інструмент для швидкого пошуку вигідних способів витратити гроші і ресурси.
        Я написав Python парсер, який збирає всі необхідні дані з папки з грою, а також React
        додаток, щоб відображати цю інформацію різними інформативними способами. Я досить сильно
        пишаюся цим проектом, оскільки вивчав на ньому можливості React і розбирався, як працює ігрова механіка,
        щоб відтворити це в моєму калькуляторі.
        `,
        "example2 header": "Онлайн магазин білизни",
        "example2 shorttext": `
        Інтернет-магазин, створений з нуля на React, Django і Materialize CSS.
        Це спільний проект, в якому я робив бекенд, а також частини фронтенда.
        `,
        "example2 paragraph1": `
        На момент написання, проект може бути ще не завершений, однак більша частина функціоналу
        вже повинна працювати. Сайт був зроблений спільно з моїм другом і в процесі ми вчили GraphQL,
        а також освоювали роботу з API в React-додатках. Я надав API енд-поінти і інструменти
        адміністрування Django як спосіб роботи з замовленнями,
        в той час як мій друг написав додаток React, яке використовує вищезгадане API. Також я
        писав частини фронтенда, адже це перший веб-проект для мого друга.
        `,
        "example2 paragraph2": `
        Хоча нас і було тільки двоє, це був цікавий досвід,
        оскільки нам доводилося визначати робочі пріоритети і наші командні ролі по ходу справи.
        У процесі мені довелося багато підказувати своєму другові, та й сам я
        навчився кількох нових речей. Це був не найшвидший процес розробки,
        тому що я намагався не квапити проект, та й до всього, ми, по суті, писали
        наш власний движок інтернет-магазину (нехай і простий) з нуля.
        `,
        "example3 header": "Excel парсер",
        "example3 shorttext": `
        Excel парсер таблиць, який я написав для усунення зайвої бюрократії.
        Приймає таблиці, відформатовані певним чином, і створює нову
        таблицю реєстру, в яку переносяться відповідні дані.
        `,
        "example3 paragraph1": `
        Мій родич працює в державній компанії з дещо застарілою
        системою обліку витратних матеріалів. Частина роботи полягала в неймовірно
        рутинному завданню по перенесенню частини вмісту з таблиць замовлень в таблицю реєстру,
        причому поштучно. Я написав цю не дуже складну програму для автоматизації
        значної частини даної роботи.
        `,
        "example3 paragraph2": `
        У цьому проекті я покращив свої навички програмної роботи з електронними таблицями.
        А також навчився їх форматувати, використовуючи тільки Python.
        У якийсь момент мені, можливо, доведеться доопрацювати свій парсер, оскільки
        ще залишилися речі, які мій родич повинен робити вручну,
        проте, на даний момент я досить обмежений в необхідних даних, які я можу використовувати.
        `,
        "example4 header": "Бот для обрізки відео",
        "example4 shorttext": `
        Telegram-бот, який приймає посилання на YouTube з опціональними відмітками часу і
        обрізає частини зазначеного відео не більше однієї хвилини. Корисно, коли необхідно
        показати комусь коротку частину кліпу на YouTube, але не відправляти йому все відео.
        `,
        "example4 paragraph1": `
        Багато сервісів для завантаження з Youtube не пропонують повний набір
        розширень при спробі завантажити відео. Причина в тому, що більшість
        високих розширень використовують адаптивні потоки замість прогресивних, і це
        дещо ускладнює завантаження. І багато сервісів банально не надають
        можливості завантажувати в більш високому розширенні (або завантаження обмежене беззвучною/звуковою доріжкою).
        Спочатку, цей проект був спробою вирішити дану проблему, приносячи крім цього
        зручність поводження з Telegram-ботами.
        `,
        "example4 paragraph2": `
        Однак швидко стало очевидно, що @utubebot вже реалізував
        даний функціонал дуже добре. Крім того, я намагався додати функцію обрізки відео,
        яка почала викликати проблеми в поєднанні з функцією об'єднання адаптивних потоків, стаючи ресурсномісткою.
        Ресурсомісткість не входила у мої плани, оскільки я використовував безкоштовні години Heroku
        для розгортання цього проекту і був досить обмежений в цьому відношенні.
        Тому я відмовився багато від чого
        і тепер це простий сервіс для обрізки невеликих шматочків Youtube
        відео (я зробив обмеження в одну хвилину).
        `,
        // Resume page content
        "Andriy Hanzha": "Ганжа Андрій",
        "Software Developer": "Розробник ПЗ",
        "Contact info": "Контактна інформація",
        "Portfolio": "Портфоліо",
        "Registered as": "Зареєстрований як",
        "Individual entrepreneur": "Фізична особа-підприємець",
        "Preferred working conditions": "Бажані умови праці",
        "Remote work is highly preferable. A flexible schedule is welcome. Both contractual work and official employment suit me.":
        "Вкрай бажена віддалена робота. Вітається гнучкий графік. Мене влаштовує як робота за контрактом, так і офіційне працевлаштування.",
        "My qualities": "Мої якості",
        "resume quality 1": "Бажання вивчати нові мови та технології у разі їх затребуваності.",
        "resume quality 2": "Готовність пройти тестове завдання за необхідності.",
        "resume quality 3": "Уміння як надавати, так і використовувати API (REST, GraphQL).",
        "resume quality 4": "Досвід роботи в команді та використання Trello, Github Project.",
        "resume quality 5": "Уміння працювати з Git та досвід code review.",
        "Work experience": "Досвід роботи",
        "Web-developer (Django, jQuery, HTML/CSS design)": "Веб-розробник (Django, jQuery, HTML/CSS дизайн)",
        "(2019 august - 2020 september)": "(серпень 2019 - вересень 2020)",
        "Education": "Освіта",
        "Secondary General Education": "Середня Загальна Освіта",
        "Languages": "Мови",
        "Web-frameworks / libraries": "Web-фреймворки / бібліотеки",
        "Other": "Інше",
        "ORM experience": "Досвід з ORM",
        "QA Automation": "QA автоматизація",
        "and more...": "та інше...",
        // About page content
        "about page expansion": `
        Зі своїх хороших якостей я б назвав прискіпливість і проникливість. Щодо поганих,
        я можу бути дещо впертим, особливо під час виконання свого завдання.
        Мені буває важко змиритися і застосувати просте рішення
        якщо я спочатку задумував щось складніше.
        Але останнім часом я намагаюся відмовлятися від цієї звички.
        `,
        "about page addition": `
        У вільний час я багато граю у відеоігри та пишу музику. Іноді код я пишу
        навіть коли не зайнятий, а також із задоволенням допомагаю іншим людям з виправленням
        помилок та усуненням багів, найчастіше безкоштовно. Або навіть навчаю когось програмуванню.
        Хоча, зараз я в основному і фокусуюся на Python і JavaScript,
        інші мови мені теж під силу, особливо ті, які я використовував раніше, наприклад C#.
        Іноді шкодую, що немає хороших знань у мові нижчого рівня,
        наприклад, C, але, на жаль, у мене інші пріоритети.
        `,
        // Additional links
        "Source code": "Вихідний код",
        "Organisation": "Організація",
        "My friend": "Мій друг",
        "Bot link (may be inactive)": "Бот (може бути неактивний)",
        // About
        "Various info about the assets used in the creation of this site": 
        "Різна інформація про ресурси, використані при створенні цього сайту",
        "Images are taken from": "Зображення взяті з",
        "and made by:": "і зроблені:",
        "Template design": "Дизайн заготівлі",
        // Footer
        "Made by lifearoundfreaks": "Сайт зроблено lifearoundfreaks",
        "Design by": "Дизайн створено",
        // 404
        "404 - Page not found": "404 - Сторінку не знайдено",
        "The page you were searching for does not seem to exist.": "Схоже, що сторінку, яку ви шукали, не знайдено",
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
