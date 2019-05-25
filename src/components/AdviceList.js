import React from 'react';
import AdviceItem from "./AdviceItem";

const AdviceList = ({advice}) => {
    //props.advice

   const renderedAdvice =  advice.map((singleAdvice)=>{
        return <AdviceItem  advice={singleAdvice}/>;
    })
    return (
        <div>
           {renderedAdvice}
        </div>
    );
};

export default AdviceList;