import React from 'react'


const Education = (props) => {
    const data = props.EducationData;
    return (
        <div>
           {data.map((school)=> 
            <h1>{school.name}</h1>
           )}
        </div>
    )
}


export default Education
