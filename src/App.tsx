import { FC, useEffect } from 'react';
import { MainPage, Examples, Resume, About, Credits, NotFound } from './components/site'
import { Navbar, Footer } from './components/partial'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { HelmetProvider } from 'react-helmet-async'
import { CookiesProvider, useCookies } from 'react-cookie'
import i18n from 'i18next'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function CookieLanguage() {

  const [cookies] = useCookies(['selected-language'])
  const selected = cookies['selected-language']

  if (selected && (selected !== i18n.language)) {
      i18n.changeLanguage(selected)
  }
  return null
}

function FilledNavbar() {
  const { t } = useTranslation()

  return <Navbar logo={
    <NavLink to='/' activeStyle={{ fontWeight: "bold", pointerEvents: "none" }} exact>
      {t("lifearoundfreaks' portfolio")}
    </NavLink>
  } links={[
    { link: '/', linkName: t('Home') },
    { link: '/examples/', linkName: t('Examples') },
    {
      link: '/resume/', linkName: t('Resume'), children: [
        { link: '/resume/', linkName: t('Resume') },
        { link: '/about/', linkName: t('General info') },
      ],
    },
    { link: '/credits/', linkName: t('Credits') },
  ]} />
}

function FilledFooter() {
  const { t } = useTranslation()

  return <Footer copyright={t("Made by lifearoundfreaks")} links={[
    { link: 'https://github.com/lifearoundfreaks', icon: 'fa-github', linkName: 'Github' },
    { link: 'https://www.linkedin.com/in/andriy-hanzha-356b95223/', icon: 'fa-linkedin', linkName: 'LinkedIn' },
    { link: 'mailto:lifearoundfreaks@gmail.com', icon: 'fa-envelope', linkName: 'Gmail' },
  ]} />
}

const App: FC = () => {
  return <HelmetProvider><CookiesProvider><Router><ScrollToTop /><CookieLanguage />
    <FilledNavbar />
    <Switch>
      <Route path='/' exact><MainPage /></Route>
      <Route path='/examples'><Examples /></Route>
      <Route path='/resume'><Resume /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/credits'><Credits /></Route>
      <Route><NotFound /></Route>
      <Route><Credits /></Route>
    </Switch>
    <FilledFooter />
  </Router></CookiesProvider></HelmetProvider>
}

export default App
