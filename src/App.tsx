import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './i18n'
import ChangeLanguageButton from './components/layout/ChangeLanguageButton';
import { useTranslation } from 'react-i18next';

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

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}
const Alpha = () => {
  return (
    <>
      <h1>Alpha Page</h1>
    </>
  );
}
const Beta = () => {
  return (
    <>
      <h1>Beta Page</h1>
    </>
  );
}
const Gamma = () => {
  return (
    <>
      <h1>Gamma Page</h1>
    </>
  );
}

export default App
