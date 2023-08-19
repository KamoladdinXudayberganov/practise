import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(false);

  const onAdd = () => (false)
  

  return (
    <div onClick={onAdd }  className="wrapper">
      <div className="item1">
        <h1>Men haqimda</h1>
        <button onClick={() => setCount(true)}>About me</button>
      </div>
      <div className={count ? 'item2': 'hidden' }>
        <h1>My name is Kamoliddin, <br /> my last name is Khudaberganov, <br /> I am 14 years old, <br /> I am currently studying at a data training station, <br /> my hobby is programming.</h1>
        <button onClick={() => setCount(false)}>Close</button>
      </div>
    </div>  
  );
}

export default App;
