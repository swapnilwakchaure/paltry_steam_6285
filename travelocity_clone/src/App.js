import './App.css';
import MainRoutes from './Routes/MainRoutes';
import Home from './Pages/Home/Home';
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
