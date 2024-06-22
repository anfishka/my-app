import photo from "./photo.jpg";
import c from './c.png'
import js from './js.png'
import python from './python.png'

import "./App.css";
import "./App.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <p>Surname: Borodina</p>
        <p>Name: Hanna</p>
        <p>Age: 27</p>
        <p>
          Hobby: Programming, specially different languages: C#, JS, Python.
        </p>
        <div  className="langContainer">
            <img src={c} className="lang" alt="c" />
        <img src={js} className="lang" alt="js" />
         <img src={python} className="lang" alt="python" />
        </div>
      
        <a
          // className="App-link"
          href="https://github.com/anfishka"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
      </header>
    </div>
  );
}

export default App;
