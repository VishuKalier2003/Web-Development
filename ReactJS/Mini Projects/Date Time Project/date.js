import React from 'react';
import './style.css';

const date = () => {
    const currentDate = new Date();         // variable to store Dynamic Date and Time...
    const time = currentDate.getHours();
    //! Inline Styling...
    const box1 = {
        position: 'relative',
        backgroundColor: 'rgb(61, 61, 61)',
        left: '35%',
        top: '20vh',
        height: 'auto',
        width: '30%'
    };
    const box2 = {
        position: 'relative',
        backgroundColor: 'rgb(225, 81, 81)',
        left: '30%',
        top: '20vh',
        height: 'auto',
        width: '40%'
    }
    const box3 = {
        position: 'relative',
        backgroundColor: 'rgb(225, 225, 0)',
        left: '30%',
        top: '20vh',
        height: 'auto',
        width: '40%'
    }
    //! JSX Code...
    if(time < 12) {
        return(
            <div style={box2}>
            <div className="morning">Good Morning !!</div>
            </div>
        )
    }
    else if((time >= 12) && (time < 18)) {
        return(
            <div style={box3}>
            <div className="afternoon">Good Afternoon !!</div>
            </div>
        )
    }
    else {
        return(
            <div style={box1}>
            <div className="night">Good Night !!</div>
            </div>
        )
    }
};

export default date;