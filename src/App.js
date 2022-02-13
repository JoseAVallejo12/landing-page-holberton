import './App.css';
import Button from '@mui/material/Button';
import Hero from './pages/Hero';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <Hero />
      </section>
      <section className='about'>
        <Button>Click me</Button>
      </section>
    </ThemeProvider>
  );
}

export default App;
