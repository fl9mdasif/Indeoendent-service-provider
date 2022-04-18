import React from 'react';

const Blog = () => {
    return (
        <div className=" mx-4 overflow-hidden">
            <h1 className="p-3 ">Blog</h1>
            <div className="row gx-3 ">
                <div className="col border  m-2 p-3">
                    <h2>Authorization vs Authentication</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis et repellendus cupiditate fugit distinctio odit est minima provident sapiente sit, eligendi itaque atque minus ipsum.</p>
                </div>
                <div className="col border mx-2 p-3 ">
                    <h2>Why Firebase? What are the other option for Authentication</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque itaque ipsa accusantium. Corporis voluptates praesentium alias necessitatibus officia officiis vitae ea voluptas accusantium!</p>
                </div>
                <div className="col border p-3 ">
                    <h2>Firebase provide expect Authentication</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque itaque ipsa accusantium. Corporis voluptates praesentium alias necessitatibus officia officiis vitae ea voluptas accusantium!</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;