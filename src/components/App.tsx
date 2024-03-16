import About from './About/About';
import Header from './Header/Header';
import Hero from './Hero/Hero';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
