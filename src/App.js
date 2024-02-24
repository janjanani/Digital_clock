import { useEffect, useState } from "react";
import "./App.css";
// import { ReactDOM } from 'react';

function App() {
  const [currenttime, setCurrenttime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrenttime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function Formathour(hour) {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  }
  function Correctformat(num) {
    return num < 10 ? `0${num}` : num;
  }
  return (
    <div className="box">
      <div>
        <h1>Digital clock</h1>
      </div>
      <div>
        <p>
          {Correctformat(Formathour(currenttime.getHours()))}:
          {Correctformat(currenttime.getMinutes())}:
          {Correctformat(currenttime.getSeconds())}
        </p>
      </div>
    </div>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));

export default App;
