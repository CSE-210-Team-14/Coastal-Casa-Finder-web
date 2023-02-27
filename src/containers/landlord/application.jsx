import React from "react";
import "./application.scss";
import { Link } from "react-router-dom";


const Application = (props) => {

    //console.log(props.name);
  const data = {
    id: props.id,
    name: props.name,
    message: props.message,
    move: props.move,
    residents: props.residents,
    score: props.score,
    pic: props.pic,
  }

  return (
    <div className="listing-main">
      <img src={props.pic} alt=""></img>
      <p>{props.name}</p>
      <p>{props.move}</p>
      <p>{props.residents}</p>
      <p>{props.score}</p>
      <Link to={{pathname:'/application', state: data}}>
        <button type="button">Edit Application</button>
      </Link>
    </div>
  );

}

export default Application