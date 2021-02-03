import React from 'react';


const About = (props) => {
    return (
        <div className="container" onClick={(e) => props.positionInfo(e) }>
            <div className="item" >
                <h1>About section</h1>
            </div>
        </div>
    )
}


export default About
