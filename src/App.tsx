import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {

  return (
    <>
      <Navbar />
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
