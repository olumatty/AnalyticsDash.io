import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Sidebar from './Component/Sidebar/sidebar';

function App() {
  return (
    <div className="grid-container">
      <Header/>
      <Sidebar/>
      <Home/>
    </div>
    
  );
}

export default App;
