import React from 'react';
import {
    Link
  } from "react-router-dom";

const HelloHead = () => {
    return (
        <div>
            <h1>
                Welcame                
            </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/video">Users</Link>
                </li>
              </ul>
            </nav>
        </div>
        
    );       

}

export default HelloHead;