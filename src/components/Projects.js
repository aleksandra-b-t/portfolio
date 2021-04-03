import React from 'react';

const Projects = (props) => {
    const data = props.ProjectsData;
    return (
    <>
    {data.map((project) =>
    <h2> {project.name} </h2>
    )}

    </>
    );
}

export default Projects;
