import React from 'react';

const Footer = (props) => {
    const data = props.PersonalData[0];
    return (
        <div>
            {data.email}
        </div>
    );
}

export default Footer;
