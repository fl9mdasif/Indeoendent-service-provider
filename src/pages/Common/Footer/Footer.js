import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            <p className="bg-dark text-white p-3 mb-0">Copyright <a className="text-decoration-none" href="https://www.facebook.com/fl9omi" > @fl9mdasif :</a> {year}</p>
        </div>
    );
};

export default Footer;