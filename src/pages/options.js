import React, { useState } from "react";
import { Navigate } from "react-router";

export default function Options() {
  const [state, changeState] = useState(0);

  function todo() {
    changeState(1);
  }

  if (state === 1) {
    return <Navigate to="/choice" />;
  }

  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Upload Options</h1>
      </header>
      <div style={styles.container}>
        <button style={styles.button} type="button" onClick={todo}>
          Upload CSV
        </button>
        <button style={styles.button} type="button" onClick={todo}>
          Upload Excel
        </button>
      </div>
      <footer style={styles.footer}>
        <p style={styles.footerText}>© {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  headerTitle: {
    margin: 0,
    fontSize: "24px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 160px)", // Adjust the height to leave space for header and footer
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  footer: {
    backgroundColor: "#f4f4f4",
    padding: "10px 0",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerText: {
    margin: 0,
    fontSize: "14px",
  },
};
