import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <p>Copyright @fl9mdasif : {year}</p>
        </div>
    );
};

export default Footer;