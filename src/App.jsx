import './App.css';
import { eventDetails, events, events1 } from './constants';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import { Timeline1 } from './components/ui/Timeline1';
import { Rules } from './components/ui/Rules';
import Sponsor from './components/Sponsor';
import Register from './components/Register';

function App() {
  return (
    <>
      <Navbar/>
      <section id="home" className="section" >
        <Hero/>
      </section>
      <section id="upcoming-events" className="section">
        <Timeline1 data={events1}/>
      </section>
      <section id="rules" className="section">
        <Rules items={eventDetails}/>
      </section>
      <section id="cta">
        <Register/>
      </section>
      <section id="sponsors">
        <Sponsor/>
      </section>
      <Footer/>
    </>
  )
}

export default App;
