import "./App.css";
import { useState } from "react";
import logo from "./img/logo.png";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <img class="logo" src={logo} alt="calculette" />
        <span className="title">React Counter</span>
      </header>
      <Counter counter={counter} setCounter={setCounter} />
      <footer>
        <span>
          Made with <b>React</b> at <b>Le Reacteur</b> by <b>Brice</b>
        </span>
      </footer>
    </>
  );
}

export default App;
