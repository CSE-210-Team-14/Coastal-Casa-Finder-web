import React from "react";
import './listing.scss'
import {useNavigate} from "react-router-dom";


const Application = (props) => {

  const data = {
    id: props.id,
    name: props.name,
    message: props.message,
    move: props.move,
    residents: props.residents,
    score: props.score,
    pic: props.pic,
  }

  const navigate = useNavigate();

  const toApplicationInfo = () => {
    navigate('/application', {state: data});
  }

  return (
    <div className="listing-main">
      <img src={props.pic} alt="" className="rounded-2xl md:w-80 md:h-52"></img>
      <p>Name: {props.name}</p>
      <p>Move-In: {props.move}</p>
      <p>Residents: {props.residents}</p>
      <p>Credit Score: {props.score}</p>
      <button type="button" onClick={()=>{toApplicationInfo()}}>Edit Application</button>
    </div>
  );

}

export default Application