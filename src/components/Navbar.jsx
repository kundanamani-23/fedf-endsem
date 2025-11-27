import React from "react";

export default function Navbar() {
  const styles = {
    nav: {
      width: "100%",
      padding: "15px 20px",
      backgroundColor: "#4B6B7A", // orange
      color: "white",
      fontSize: "22px",
      fontWeight: "bold",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      position: "sticky",
      top: 0,
      zIndex: 99,
    },
    logo: {
      margin: 0,
    }
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Food Delivery System</h1>
    </nav>
  );
}
