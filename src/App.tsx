import { FC } from 'react';
import { MainPage, Examples, About, Credits } from './components/site'
import { Navbar, Footer } from './components/partial'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const App: FC = () => {
  const { t } = useTranslation()
  return <Router>
    <Navbar logo={
        <NavLink to='/'>LifeAroundFreaks</NavLink>
    } links={[
      { link: '/', linkName: t('Home') },
      {link: '/examples', linkName: t('Examples') },
      { link: '/about', linkName: t('About'), children: [
        { link: '/about', linkName: t('General info') },
        { link: '/credits', linkName: t('Credits') },
      ], },
    ]} />
    <Switch>
      <Route path='/' exact><MainPage /></Route>
      <Route path='/examples'><Examples /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/credits'><Credits /></Route>
    </Switch>
    <Footer copyright={t("Made by lifearoundfreaks")} links={[
      { link: 'https://github.com/lifearoundfreaks', icon: 'fa-github', linkName: 'Github' },
    ]} />
  </Router>
}

export default App
