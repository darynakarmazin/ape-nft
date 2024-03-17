import About from './About/About';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import MindMap from './MindMap/MindMap';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <About />
        <MindMap />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
