import React from "react";
import AdviceItem from "./AdviceItem";

const AdviceList = ({ advice }) => {
//   console.log(advice);

  const renderedAdvice = advice.filter(singleAdvice =>{ 
      return <AdviceItem advice={singleAdvice.slip_id<=9} />
    });
    
  
  
  return <div>{renderedAdvice}</div>;
};

export default AdviceList;


// to do list -error at adviceitem.js it seems im trying to do forbidden things with obejcts like listing them as an array 

