import logo from './img/insang_biseo_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <object data={logo} type='image/svg+xml'></object>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
