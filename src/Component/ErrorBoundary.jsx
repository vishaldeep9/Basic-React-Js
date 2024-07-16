import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleCatchError = (errorEvent) => {
      console.error(errorEvent.error);  // Log the error to an error reporting service
      setError(true);     // Update state to indicate error
    };
    // handleCatchError is called when an error is caught in the child components
    window.addEventListener("error", handleCatchError);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("error", handleCatchError);
  }, []);

  if (error) {
   // setError(false)
    // You can customize the error UI here
    return <div> Something is wrong!</div>;
  } else {
    return children;
  }
};
export default ErrorBoundary;
