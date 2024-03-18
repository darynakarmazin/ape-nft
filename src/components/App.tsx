import About from '../sections/About/About';
import Arts from '../sections/Arts/Arts';
import Mint from '../sections/ContactUs/ContactUs';
import FAQ from '../sections/FAQ/FAQ';
import Footer from '../sections/Footer/Footer';
import Header from '../sections/Header/Header';
import Hero from '../sections/Hero/Hero';
import MindMap from '../sections/MindMap/MindMap';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <About />
        <MindMap />
        <FAQ />
        <Arts />
        <Mint />
      </main>
      <Footer />
    </div>
  );
}

export default App;
