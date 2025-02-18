import React from "react";

function Card(props) {
  console.log(props.item);

  return (
    <>
      <br />
      <div className="card">
        <p className="hide-button">
          <button onClick={() => props.deleteItem(props.item.id)}>X</button>
        </p>
        <img
          src={props.item.image}
          alt={props.item.title}
          width="250px"
          height="300px"
        />
        <p>
          <b>Title:-</b>
          <strong>{props.item.title}</strong>
        </p>
        <p>
          <b>Adress:-</b>
          {props.item.address}
        </p>
        <p>
          <b>Information:-</b> {props.item.information}
        </p>
      </div>
    </>
  );
}

export default Card;
