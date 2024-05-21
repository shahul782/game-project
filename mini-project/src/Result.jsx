import React from "react";

function Result ({term,secretNum}){

    let result;
    if(term){
    if(term > secretNum){
        result='Higher'
    }else if(term < secretNum){
        result='Lower'
    }
    else if(term == secretNum){
        result='yipee! correct'
    }else{
        result='enter your valid input'
    }
}
    return(
        <div>
            <h3>You Guessed: {result}</h3>
        </div>
    )
}
export default  Result;