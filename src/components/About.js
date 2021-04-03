import React from 'react';


const About = (props) => {
    const data = props.PersonalData[0];
    return (
        <>
        <h1>Hello, {data.name}</h1>
        {console.log(props)}
        </>
    )
}


export default About
