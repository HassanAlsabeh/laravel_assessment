import React from "react";
import "./welcome.css";
import { useNavigate } from "react-router";
export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://www.randstadrisesmart.com/sites/default/files/migrated_images/happy%20workpalces.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <button
     onClick={() => navigate("/show-employees")}
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          width: "180px",
          height: "60px",
          cursor: "pointer",
          background: "red",
          border: "1px solid #91C9FF",
          outline: "none",
          transition: "1s ease-in-out",
        }}
      >
        GET STARTED 
      </button>
    </div>
  );
}
