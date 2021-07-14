import React from "react";
import "./App.css";
import Lane from "./components/Lane";

function App() {
  const [tickets, setTickets] = React.useState({
    name: "Feed the dog",
    description: "Don't forget to buy some dog food!",
  });

  return (
    <div className="App">
      <Lane name="Todo" tickets={[tickets]} />
      <Lane name="In Progress" />
      <Lane name="Coole Lane" />
      <Lane name="Fantistische Lane" />
      <Lane name="Todo" />
      <Lane name="In Progress" />
      <Lane name="Coole Lane" />
      <Lane name="Fantistische Lane" />
    </div>
  );
}

export default App;
