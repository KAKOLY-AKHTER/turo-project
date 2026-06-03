import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterNav from './components/FilterNav';
import CarListings from './components/CarListings';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-32">
      <Navbar />
      <Hero />
      <FilterNav />
      <CarListings />
    </div>
  )
}

export default App
