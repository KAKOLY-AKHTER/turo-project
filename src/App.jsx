import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterNav from './components/FilterNav';
import CarListings from './components/CarListings';
import SoccerSection from './components/Soccersection';
import CarRentalShowcase from './components/CarRentalShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Hero />
      <FilterNav />
      <CarListings />
      <SoccerSection></SoccerSection>
      <CarRentalShowcase></CarRentalShowcase>
      <Footer></Footer>
    </div>
  )
}

export default App
