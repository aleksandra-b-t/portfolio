import React from 'react';
import { Carousel } from 'react-bootstrap';


const Projects = (props) => {
    const data = props.ProjectsData;
    return (
    <>
        <Carousel> 
            {data.forEach((project) =>
            <Carousel.Item>
                {console.log(project.name)}
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt={project.name}
                />
                    <Carousel.Caption>
                        <h3> {project.name} </h3>
                    </Carousel.Caption>
            </Carousel.Item>
            )}
        </Carousel>
    </>
    );
}

export default Projects;
