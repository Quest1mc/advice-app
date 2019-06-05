import React from "react";

const AdviceItem = props => {
  console.log(props.advice);
  return (<div><h1>  
  {props.advice.advice}
  </h1> </div>)
};

export default AdviceItem;
