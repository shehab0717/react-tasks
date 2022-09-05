import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header/Header';
import Follwers from './components/Followers/Followers'
import Overview from './components/Overview/Overview';
import {ThemeContext} from './Context/ThemeContext';


function App() {

  return (
    <ThemeContext.Consumer>
      {
        ({theme}) => 
          <div className={`App ${theme}-bg`}>
            <Header />
            <Follwers />
            <Overview />
          </div>
      }
    </ThemeContext.Consumer>
  );
}

export default App;
