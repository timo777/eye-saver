import React from 'react';
import Webcam from "react-webcam";
  

const Video = () => {
    const videoConstraints = {
        width: 80,
        height: 20,
        facingMode: "user"
      };
    return (
        <div>
            <Webcam videoConstraints={videoConstraints} />
            </div>
    )
}

export default Video