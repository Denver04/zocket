import React from 'react'
import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Create from './components/Create';
import First from './First';
import Adcompaign from './components/Adcompaign';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import './App.css'
import Buy from './components/Buy';
import Selection from './components/Selection';
import Ready from './components/Ready';
import SideBar from './Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}
      <SideBar>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/campaign" element={<Adcompaign />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/date" element={<Selection />} />
        <Route path="/deploy" element={<Ready />} />
      </Routes>
      </SideBar>
      </BrowserRouter>
    </div>
  )
}

export default App
