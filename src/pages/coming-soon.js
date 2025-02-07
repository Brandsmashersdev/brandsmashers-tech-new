import React from "react";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      textAlign: "center",
      background: "#343333",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      <h1 style={{
        fontSize: "2.5rem", 
        fontWeight: "600", 
        marginBottom: "1rem", 
        color: "#24c0e3"
      }}>
        🚧 Coming Soon 🚧
      </h1>
      <p style={{
        fontSize: "1.2rem", 
        marginBottom: "2rem", 
        color: "white", 
        maxWidth: "450px"
      }}>
        We’re working hard to bring something exciting your way! Stay tuned for updates!
      </p>
      <Link href="/" legacyBehavior>
        <a style={{
          padding: "12px 30px", 
          backgroundColor: "#24c0e3", 
          color: "#fff", 
          borderRadius: "6px", 
          textDecoration: "none", 
          fontSize: "1rem", 
          fontWeight: "500", 
          transition: "background-color 0.3s",
        }}>
          Go Back Home
        </a>
      </Link>
    </div>
  );
};

export default ComingSoon;
