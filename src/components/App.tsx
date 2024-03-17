import About from '../sections/About/About';
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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
