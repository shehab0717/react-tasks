import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header/Header';
import Follwers from './components/Followers/Followers'
import Overview from './components/Overview/Overview';

function App() {
  return (
    <div className="App">
      <Header />
      <Follwers />
      <Overview />
    </div>
  );
}

export default App;
