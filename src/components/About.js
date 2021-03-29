import React from 'react';


const About = (props) => {
    return (
        <>
        <h1>Hello, {props.PersonalData[0].name}</h1>
        {console.log(props)}
        </>
    )
}


export default About
