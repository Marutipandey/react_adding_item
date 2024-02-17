// NoteState.js
import React, {  useState } from "react";
import NoteContext from "../notes/noteContext";

const NoteState = (props) => {
  const initialState = [
    {
      "id":1,
      "name": "John Doe",
      "age": 30,
      "city": "kolakata my City",
      "isStudent": false,
    },
    {
      "id":2,
      "name": "Priya",
      "age": 50,
      "city": "pune my City",
      "isStudent": false,
    }
  ];

  const [notes, setNotes] = useState(initialState);


  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
