import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CountdownTimer from "./components/CountdownTimer";

const App = () => {
  return (
    <div>
      <Header />
      <CountdownTimer CountdownTimer={CountdownTimer}/>
      <Form />
    </div>
  );
}

export default App;
