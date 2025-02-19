import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delteItem } from "./Slice/Datamanagement";

function Card(props) {
  console.log(props.cardItem);

  const dispatch = useDispatch();
  console.log("delete", props.cardItem.id);

  return (
    <>
      <br />
      <div className="card">
        <p className="hide-button">
          <button onClick={() => dispatch(delteItem(props.cardItem.id))}>
            X
          </button>
        </p>
        <img
          src={props.cardItem.image}
          alt={props.cardItem.title}
          width="250px"
          height="300px"
        />
        <p>
          <b>Title:-</b>
          <strong>{props.cardItem.title}</strong>
        </p>
        <p>
          <b>Adress:-</b>
          {props.cardItem.address}
        </p>
        <p>
          <b>Information:-</b> {props.cardItem.information}
        </p>
      </div>
    </>
  );
}

export default Card;
