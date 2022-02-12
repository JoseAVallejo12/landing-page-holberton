import './App.css';
import Button from '@mui/material/Button';
import AppMenu from './components/app-menu/AppMenu';
import { CarouselComponent } from './components/carousel/Carousel';


function App() {
  return (
    <>
      <section>
        <AppMenu />
        <CarouselComponent />
      </section>
      <section className='about'>
        <Button>Click me</Button>
      </section>
    </>
  );
}

export default App;
