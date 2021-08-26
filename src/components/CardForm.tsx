import React, { FormEventHandler } from "react";
import { TicketType } from "../types";

interface cardFormProps {
  submitHandler: (ticket: TicketType) => void;
  nameValue?: string;
  descriptionValue?: string;
  idValue?: number;
}

export function CardForm({
  submitHandler,
  nameValue,
  descriptionValue,
  idValue,
}: cardFormProps) {
  const [name, setName] = React.useState(nameValue ? nameValue : "");
  const [description, setDescription] = React.useState(
    descriptionValue ? descriptionValue : ""
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submitHandler({
          name: name,
          description: description,
          laneId: 1,
          ticketId: idValue,
        });
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
