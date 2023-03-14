import React, { useState } from "react";
import "./Note.css";
import AddNote from "./AddNote";
import { v4 as uuid } from "uuid";
import Search from "./search.png";

function Note() {
  const [text, setText] = useState([]);
  const [searchText, setSearchText] = useState("");

  function as() {
    let t = document.getElementById("text");
    t.style.backgroundColor = "rgb(109, 250, 232)";
  }

  const date = () => {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    const formattedDate = day + "/" + month + "/" + year;
    return formattedDate;
  };

  const handleClick = () => {
    let content = document.getElementById("text").value;
    if (content.length > 0) {
      let note = [...text, { id: uuid(), content }];
      setText(note);
      document.getElementById("text").value = "";
    } else {
      alert("Enter something");
    }
  };

  const handleDelete = (id) => {
    const updatedNotes = text.filter((note) => note.id !== id);
    setText(updatedNotes);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredText = text.filter(
    (data) =>
      data.content.toLowerCase().includes(searchText.toLowerCase().trim())
  );

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="search-icon">
            <img style={{ height: "25px" }} src={Search} alt="Search Icon" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-icon"
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <div className="mb-3 bg br">
        <textarea
          className="form-control bg br b p-3"
          id="text"
          rows="8"
          placeholder="Type to add a note"
          onClick={as}
          type="reset"
        ></textarea>
        <button
          className="badge badge-pill badge-secondary px-3 m-3 py-2"
          onClick={handleClick}
        >
          Save
        </button>
      </div>
      {filteredText.map((data) => {
        return (
          <div
            key={data.id}
            className="d-inline-flex flex-column justify-content-between mr-3 mb-3"
          >
            <div>
              <AddNote
                key={data.id}
                note={data.content}
                date={date()}
                id={data.id}
                delete={handleDelete}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Note;
