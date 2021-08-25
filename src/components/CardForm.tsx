import React, { FormEventHandler } from "react";
import { TicketType } from "../types";

interface cardFormProps {
  submitHandler: (ticket: TicketType, event: any) => void;
}

export function CardForm({ submitHandler }: cardFormProps) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        submitHandler(
          {
            name: name,
            description: description,
            laneId: 1,
          },
          event
        );
      }}
    >
      <label>
        <strong>Name:</strong>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>
        <label>
          <strong>Description:</strong>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <p>
          <input type="submit" />
        </p>
      </p>
    </form>
  );
}

export default CardForm;
