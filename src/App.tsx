import React from "react";
import { ComponentProps } from "react";
import "./App.css";
import Lane from "./components/Lane";
import Ticket from "./components/Ticket"

function App() {
  const [tickets, setTickets] = React.useState([{
    name: "Feed the dog",
    description: "Don't forget to buy some dog food!",
    laneId: 1
  }, {
    name: "Feed the dog 2",
    description: "Don't forget to buy some dog food!",
    laneId: 2
  }]);

  const [lanes, setLanes] = React.useState([
    {id: 1, title: "Todo", },
    {id: 2, title: "In Progress"},
    {id: 3, title: "Coole Lane"},
    {id: 4, title: "Fantastische Lane"},
  ]);

  const returnTickets = (tickets: {name: string, description: string, laneId: number}[], laneId: number):ComponentProps<typeof Ticket>[] | undefined => {
      const ticketsArray:any = []

      tickets.forEach((ticket):any => {
        if (ticket.laneId === laneId){
          ticketsArray.push(<Ticket name={ticket.name} description={ticket.description} />)
        }
      })
      if(ticketsArray.length > 0){
        return ticketsArray
      }
  }

  return (
    <div className="App">
      {lanes.map(lane => {
       return <Lane name={lane.title} laneId={lane.id} key={lane.id} tickets={returnTickets(tickets, lane.id)} />
      })}
    </div>
  );
}

export default App;
