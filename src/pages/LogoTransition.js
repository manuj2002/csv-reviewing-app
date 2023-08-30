// LogoTransition.js

import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const LogoTransition = ({ to, delay, logo }) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div style={styles.container}>
      {showLogo && <div style={styles.logo}>{logo}</div>}
      {!showLogo && <Navigate to={to} />}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  logo: {
    animation: "fadeIn 1s ease-in-out",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};

export default LogoTransition;
