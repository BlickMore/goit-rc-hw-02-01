import React from 'react'

const Statistics = (props) => {
    const {good,neutral,bad}=props.state
    return(
        <>
                   
    <p>Good: {good} </p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <span>Total: {props.total(good,neutral,bad)}</span>
    <p>Positive feedback :{props.positivePercentage(good,neutral,bad)} %</p>
        </>)
}

export default Statistics;