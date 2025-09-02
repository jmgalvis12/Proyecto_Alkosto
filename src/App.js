// src/App.js
import './App.css'; // Import CSS (copy the styles from previous responses)
import Header from './views/Header';
import CategoryNavbar from './views/CategoryNavbar';
import Hero from './views/Hero';
import BenefitsBar from './views/BenefitsBar';
import Productos from './views/Productos';
import Footer from './views/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryNavbar />
      <Hero />
      <BenefitsBar />
      <Productos />
      <Footer />
    </div>
  );
}

export default App;