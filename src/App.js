import './App.css';
import theme from './theme';
import Hero from './pages/Hero/Hero';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Portfolio from './pages/Portfolio/Portfolio';
import Projects from './pages/Projects/Projects';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import AppMenu from './components/app-menu/AppMenu';
import background02 from './assets/img/background02.jpg'
import background03 from './assets/img/background03.jpg'
import background04 from './assets/img/background04.png'
import background05 from './assets/img/background05.png'
import background06 from './assets/img/background06.jpg'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className='app_menu'>
          <AppMenu />
        </div>
        <section className='home section' id='home'>
          <Hero />
        </section>
        <section className='about section' id='about' style={{backgroundImage: `url(${background02})`}}>
          <About />
        </section>
        <section className='portfolio section' id='portfolio' style={{backgroundImage: `url(${background03})`}}> 
          <Portfolio />
        </section>
        <section className='projects section' id='projects' style={{backgroundImage: `url(${background04})`}}>
          <Projects />
        </section>
        <section className='blog section' id='blog' style={{backgroundImage: `url(${background05})`}}>
          <Blog />
        </section>
        <section className='contact section' id='contact' style={{backgroundImage: `url(${background06})`}}>
          <Contact />
        </section>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
