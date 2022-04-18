import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <p className="bg-dark text-white p-3 mb-0">Copyright @fl9mdasif : {year}</p>
        </div>
    );
};

export default Footer;