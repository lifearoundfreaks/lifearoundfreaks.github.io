import { FC, useEffect } from 'react';
import { MainPage, Examples, About, Credits, NotFound } from './components/site'
import { Navbar, Footer } from './components/partial'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { HelmetProvider } from 'react-helmet-async';

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App: FC = () => {
  const { t } = useTranslation()
  return <HelmetProvider ><Router><ScrollToTop />
    <Navbar logo={
      <NavLink to='/' activeStyle={{ fontWeight: "bold", pointerEvents: "none" }} exact>
        {t("lifearoundfreaks' portfolio")}
      </NavLink>
    } links={[
      { link: '/', linkName: t('Home') },
      { link: '/examples/', linkName: t('Examples') },
      {
        link: '/about/', linkName: t('About'), children: [
          { link: '/about/', linkName: t('General info') },
          { link: '/credits/', linkName: t('Credits') },
        ],
      },
    ]} />
    <Switch>
      <Route path='/' exact><MainPage /></Route>
      <Route path='/examples'><Examples /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/credits'><Credits /></Route>
      <Route><NotFound /></Route>
      <Route><Credits /></Route>
    </Switch>
    <Footer copyright={t("Made by lifearoundfreaks")} links={[
      { link: 'https://github.com/lifearoundfreaks', icon: 'fa-github', linkName: 'Github' },
    ]} />
  </Router></HelmetProvider>
}

export default App
