import React from 'react';

const Projects = () => {
    return (
        <div>
            <p className='title'>One Step</p>
            <p className='intro'>React web application with Rails back-end that helps users research new activities to try. Includes evaluation which automatically surfaces activities that were matched best for the user. Use of design tools such as CSS.</p>
            <p className='description'>Utilized JSON Web Tokens and localStorage to store encrypted user information client-side.
                Active Model Serializers to provide a convention-based approach to serializing resources in Rails.</p>
            <p className='title'>Finder </p>
            <p className='intro'>React single-page app. This project is a simplified front end clone of Netflix. Hosted by firebase.</p>
            <p className='description'>Created with React and CSS using Grid and Flexbox and React hooks. 
            Leveraged MovieDB APIs to search for movies and display real-time database details (TMDB API).</p>
            <p className='title'>Movie Awards</p>
            <p className='intro'>JavaScript framework React single-page app. Built for the Summer 2021 Shopify UX and Web Developer Challenge.</p>
            <p className='description'>Fetched API from OMDb database, and use of localStorage to save nominations. Styled with CSS.</p>
            <p className='title'>Sudoku</p>
            <p className='intro'>Multiple difficulty levels Sudoku game build with CSS, HTML, and vanilla JavaScript.</p>
            <p className='description'>Created with CSS. Conditional rendering to include three levels of difficulty, three timeline options, and two themes.</p>
            <p className='title'>Snake Game</p> 
            <p className='intro'>Old-school NOKIA Snake game built with HTML and programming language JavaScript.</p>
        </div>
    );
}

export default Projects;
