import React from "react";
import AdviceItem from "./AdviceItem";



const AdviceList = ({ advice, message, randomadvice, lotsOfAdvice }) => {
  // console.log(advice);
  // console.log(randomadvice);
// reset();
 

  return (
    <div>
      <h1>
        {randomadvice.advice}
         {lotsOfAdvice.map(singleAdvice => {
              // console.log(singleAdvice)
              return <AdviceItem advice={singleAdvice} />;
            })}
{/* not sure aboyut this ^^^^^ */}
        {advice && (
          <div>
            {advice.map(singleAdvice => {
              // console.log(singleAdvice)
              return <AdviceItem advice={singleAdvice} />;
            })}
          </div>
        )}
        {!advice && <div>{message.text}</div>}
        {/* {message && <div>{message}</div>} */}
      </h1>
    </div>
  );
};

export default AdviceList;

// to do list
// handle error - even though system returns ok it does not have advice it has message
