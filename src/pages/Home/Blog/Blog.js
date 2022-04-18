import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div className=" mx-4 overflow-hidden">
            <h1 className="p-3 ">Blog</h1>
            <div className="row gx-3 ">
                <div className="col border  m-2 p-3">
                    <h2>Authorization vs Authentication</h2>
                    <p> Authentication is the most common way of confirming what someone's identity is, though authorization is the method involved with checking what explicit applications, documents, and information a client approaches.</p>
                </div>
                <div className="col border mx-2 p-3 ">
                    <h2>Why Firebase? What are the other option for Authentication</h2>
                    <p>Google Firebase is a Google-supported application advancement programming that empowers engineers to develop iOS, Android and Web applications. Firebase gives instruments to following examination, detailing and fixing application crashes, making advertising and item try.</p>
                </div>
                <div className="col border p-3 p-3 ">
                    <h2>Firebase provide expect Authentication</h2>
                    <p>Firebase provides detailed documentation and cross-platform SDKs- Software Development Kit to help you build and ship apps on Android, iOS, the web, C++, and Unity. Firebase also provides us
                        <ul id="list-li" className=" list-li m-2 Notification">
                            <li>Authentication</li>
                            <li>Realtime Database</li>
                            <li>Hosting</li>
                            <li>Test tab</li>
                            <li>Notification</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;