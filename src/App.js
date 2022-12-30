import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Navbar from './pages/navbar/navbar';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Home/>
          <Services/>
    </div>
  );
}

export default App;
