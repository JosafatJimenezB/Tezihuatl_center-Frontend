import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>It is {new Date().toLocaleTimeString()}</h2>
        </p>
        <button onClick={() => {alert()}}>Hola</button>
      </header>
    </div>
  );
}setInterval(App, 10000);


export default App;
