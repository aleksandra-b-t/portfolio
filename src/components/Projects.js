import React from 'react';
import { Carousel, Item, Caption } from 'react-bootstrap';


const Projects = (props) => {
    const data = props.ProjectsData;
    return (
    <>
        <Carousel fade> 
        
            {data.forEach((project) =>
            <Carousel.Item>
                {console.log(project)}
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt={project.name}
                />
                    <Carousel.Caption>
                        <h2> {project.name} </h2>
                    </Carousel.Caption>
            </Carousel.Item>
            )}
        </Carousel>
    </>
    );
}

export default Projects;
