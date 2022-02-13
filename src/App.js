import './App.css';
import theme from './theme';
import Hero from './pages/Hero/Hero';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import AppMenu from './components/app-menu/AppMenu';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className='app_menu'>
          <AppMenu />
        </div>
        <section className='home' id='home'><Hero /></section>
        <section className='about' id='about'><About /></section>
        <section className='portafolio' id='portfolio'><Portfolio /></section>
        <section className='projects' id='projects'><Projects /></section>
        <section className='blog' id='blog'><Blog /></section>
        <section className='contact' id='contact'><Contact /></section>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
