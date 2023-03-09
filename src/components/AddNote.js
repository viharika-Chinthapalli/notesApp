import React from "react";

function AddNote(props) {
  return (
    <div className="card" style={{width: "22rem", height: "16rem", borderRadius: "1rem", backgroundColor:"rgb(250,244,145)"}}>
      <div className="card-body">
        <h5 className="card-title">{props.note}</h5>
      </div>
    </div>
  );
}
export default AddNote;
