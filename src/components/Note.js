import React, { useState } from "react";
import "./Note.css";
import AddNote from "./AddNote";

function Note() {
  const [text, setText] = useState([]);

  function as() {
    let t = document.getElementById("text");
    t.style.backgroundColor = "rgb(109, 250, 232)";
  }

  const handleClick = (event) => {
    const note = [...text,[]]
    setText(note)
  };

  return (
    <>
      <div className="mb-3 bg br">
        <textarea
          className="form-control bg br b p-3"
          id="text"
          rows="8"
          placeholder="Type to add a note"
          onClick={as}
        ></textarea>
        <button
          className="badge badge-pill badge-secondary px-3 m-3 py-2"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
      {text.map((data,i) => {
        return(
          <div className='d-inline-flex flex-column justify-content-between mr-3'>
            <p onChange={e => handleClick(e,i)}><AddNote note="hii"/></p>
          </div>
        )
      })}
    </>
  );
}

export default Note;
