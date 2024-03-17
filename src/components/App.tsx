import About from '../sections/About/About';
import Arts from '../sections/Arts/Arts';
import FAQ from '../sections/FAQ/FAQ';
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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
