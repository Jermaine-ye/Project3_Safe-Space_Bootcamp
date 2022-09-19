import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function EvaluationResults() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  const handleClick = async () => {
    // Req user to sign up if they are not logged in when they submit the ev form
    if (isAuthenticated) {
      console.log(user);
      // setEmail(user.email);
      // Navigate to DashBoard
      // Nav to Evaluation Form if not done (state management)
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div>
      EvaluationResults
      <button>Submit Results!</button>
    </div>
  );
}
