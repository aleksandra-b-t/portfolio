import React from 'react';


const About = (props) => {
    return (
        <div className="container" >
            <div className="item" id="element-1" onMouseDown={(e) => props.positionInfo(e) }>
                <h1>About section</h1>
            </div>
        </div>
    )
}


export default About
