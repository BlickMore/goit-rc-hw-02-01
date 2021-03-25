import React from 'react';

const Feedback = (props) => {

    return (
        <>
        <h2>Please leave feedback</h2>
            <button name="good" onClick={props.handClickToBtn} >Good</button>
            <button name="neutral" onClick={props.handClickToBtn}>Neutar</button>
            <button name="bad" onClick={props.handClickToBtn}>Bad</button>
            <h2>Statistics</h2>
        

        </>
    );
    }

export default Feedback;

