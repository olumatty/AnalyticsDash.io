import { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Sidebar from './Component/Sidebar/sidebar';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false) ;

  const Opensidebar = () =>{
    setOpenSidebarToggle(!openSidebarToggle);
  }
  return (
    <div className="grid-container">
      <Header Opensidebar={Opensidebar}/>
      <Sidebar Opensidebar ={Opensidebar} openSidebarToggle={openSidebarToggle}/>
      <Home/>
    </div>
    
  );
}

export default App;
