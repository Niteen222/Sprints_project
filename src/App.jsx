import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from './component/Content/Content';
import Dashboard from './component/Dashboard/Dashboard';
import Calender from './component/Calender/Calender';
import Massage from './component/Massage/Massage';
import Overview from './component/Overview/Overview';
import List from './component/List/List';
import Timeline from './component/Timeline/Timeline'
import Navbar from './component/Navbar/Navbar';
import Second from './component/Navbar/Second';
import Footer from './component/Content/Footer';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Second/>
        <Routes>
          <Route path='/list' element={<List/>}/>
          <Route path='/' element={<Content/>}/>
          <Route path='/timeline' element={<Timeline/>}/>
          <Route path='/calender' element={<Calender/>}/>
          <Route path='/calender' element={<Calender/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/messages' element={<Massage/>}/>
          <Route path='/overview' element={<Overview/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
