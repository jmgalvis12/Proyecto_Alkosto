// src/App.js
import './App.css';
import Header from './components/Header';
import CategoryNavbar from './views/CategoryNavbar';
import Hero from './views/Hero';
import BenefitsBar from './views/BenefitsBar';
import Productos from './views/Productos';
import Footer from './views/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <CategoryNavbar />
        <Hero />
        <BenefitsBar />
        <Productos />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;