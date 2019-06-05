import React from "react";
import AdviceItem from "./AdviceItem";

const AdviceList = ({ advice }) => {
   console.log(advice);
  
   let renderedAdvice= "";
   if (advice === undefined?   advice.message:  renderedAdvice = advice.map(singleAdvice =>{ 
    // console.log(singleAdvice)
      return <AdviceItem advice={singleAdvice} />
    })
    );

  
   

  
  return <div>{renderedAdvice}</div>;
};

export default AdviceList;


// to do list
// handle error - even though system returns ok it does not have advice it has message

