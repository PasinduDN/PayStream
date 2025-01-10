import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./Firebase.js";
import LoadingIndicator from "./assets/LoadingIndicator.jsx"; // Import LoadingIndicator

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  if (loading) {
    return <LoadingIndicator />; // Replace with the custom loading indicator
  }

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
