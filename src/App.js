import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shope from './components/Shop/Shope';
import Home from './components/Shop/HomePage/Home';


function App() {

  
  return (
    <div className="App">
          <Header></Header>
          <Home></Home>
          <Shope></Shope>
    </div>
  );
}

export default App;
