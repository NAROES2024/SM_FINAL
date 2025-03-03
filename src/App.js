import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import EventData from './data/EventData';
import About from './pages/About';
import SmTeam from './pages/SmTeam';
import Gallery from './pages/Gallery';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
// import Cap from './pages/Cap';
// import Schedule from './pages/Schedule';
import Profile from './pages/profile';
import AllEvent from './pages/AllEvent';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {EventData.map((event) => (
          <Route path={`/event/${event.link}`} element={<Event event={event} />} />
        ))}
        <Route path='/events' element={<AllEvent />} />
        <Route path="/about" element={<About />} />
        <Route path='/team' element={<SmTeam />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contactus' element={<ContactUs />} />
        {/* <Route path='/cap' element={<Cap />} /> */}
        {/* <Route path='/schedule' element={<Schedule />} /> */}
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
