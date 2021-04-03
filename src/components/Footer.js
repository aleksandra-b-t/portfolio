import React from 'react';

const Footer = (props) => {
    const data = props.PersonalData[0];
    return (
        <div>
            {data.email}
            {data.linkedin}
            {data.blog}
            {data.github}
        </div>
    );
}

export default Footer;
