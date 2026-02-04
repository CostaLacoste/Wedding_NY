import './App.css';
import './components/header/header.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <img src='./images/J&J.png'></img>
        </div>
        <h2 className='header-date'>June 23rd, 2025</h2>
        <ul className='header-links'>
          <li className='header-link'>HOME</li>
          <li className='header-link'>OUR STORY</li>
          <li className='header-link'>DETAILS</li>
          <li className='header-link'>RSVP</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
