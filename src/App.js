import './App.css';

function App() {
  const welcomeMsg = "Welcome to my React APP Ben!!";
  const hobby = "love coding";
  const times = 50;
  return (
    <div className="App">
      <div className="Content">
        <h1>{welcomeMsg}</h1>
        <p>I really {hobby} </p>
        <p> I have coded using React {times} times</p>
      </div>
    </div>
  );
}

export default App;
