// src/App.jsx
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills'; // Add this import
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <Header />
      <Home />
      <About />
      <Skills /> {/* Add this line */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;