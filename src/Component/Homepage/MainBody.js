import React from "react";

const LionImageWithCaption = () => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src="https://www.asiaticlionlodge.com/images/lion/lion011.jpg"
        alt="Lion of Gir"
        style={{ maxWidth: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          padding: "8px",
          borderRadius: "5px",
          fontSize: "18px",
        }}
      >
        <p style={{ margin: 0 }}>Majestic</p>
        <p style={{ margin: 0 }}>King of the Jungle</p>
        <p style={{ margin: 0 }}>Gir's Pride</p>
      </div>
    </div>
  );
};

export default LionImageWithCaption;

