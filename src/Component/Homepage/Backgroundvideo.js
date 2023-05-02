import React from 'react'
import videoFile from "./videoplayback.mp4";


export default function backgroundvideo() {
  return (
    <div>
        <video
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "75%",
                objectFit: "cover",
                zIndex: "-1",  
            }}
          id="mybackgroundvideo"
          src={videoFile} // Replace with the path to your video file
          autoPlay
          loop
          muted
        />
        
        <div id="divwithcontent" style={{
            zIndex: "1",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "relative",
            top: "20rem",
            textAlign: "center",
            color: "white",
        }}>
          <h1>Welcome to Gulabvadi Nursery</h1>
          {"We are not selling mangoes, We are selling Happiness"}
        </div>
      </div>
  )
}
