import React from "react";

const AdviceItem = props => {
  console.log(props.advice);
  return <div>
  {props.advice.advice}</div>;
};

export default AdviceItem;
