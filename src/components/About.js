import React from 'react';


const About = (props) => {
    const data = props.PersonalData[0];
    return (
        <>
        <h1>Hello, {data.name}</h1>
        <h3>{data.description}</h3>
        
        </>
    )
}


export default About
