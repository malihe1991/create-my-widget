import logo from './logo.svg';
import './App.css';

function App(props) {

  console.log(props.name)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey i'm a cool widget, my name is {props.name || 'undefined'}
        </p>
        <input placeholder="placeholder" />
        <button onClick={() => props.passDownFunc()}>Call the function on the parent</button>
      </header>
    </div>
  );
}

export default App;
