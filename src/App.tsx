import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './i18n'
import ChangeLanguageButton from './components/ChangeLanguageButton';
import { useTranslation } from 'react-i18next';
import { Home, Alpha, Beta, Gamma } from './pages';

const App = () => {
  const { t } = useTranslation();


  return (
    <>
      <Navbar />
      <ChangeLanguageButton />

      <h1>{t('welcome')}</h1>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alpha" element={<Alpha />} />
        <Route path="/beta" element={<Beta />} />
        <Route path="/gamma" element={<Gamma />} />
      </Routes>
    </>
  )
}

export default App
