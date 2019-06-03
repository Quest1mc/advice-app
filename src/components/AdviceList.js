import React from "react";
import AdviceItem from "./AdviceItem";

const AdviceList = ({ advice }) => {
  //  console.log(advice);

  const renderedAdvice = advice.map(singleAdvice =>{ 
      return <AdviceItem 
      key={singleAdvice.slip_id}
      advice={singleAdvice.advice<=9} />
    });
    
  
    console.log(renderedAdvice);
  return <div>{renderedAdvice}</div>;
};

export default AdviceList;


// to do list -error at adviceitem.js it seems im trying to do forbidden things with obejcts like listing them as an array 
// it dawns on me I am not actually looking for slip id but array index 
