import React, { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";

export default function CalendarModalDashboard(props) {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
    }
  }, [user]);

  const { id, end, start, title } = props.item;

  const endTime = end.toString();
  const startTime = start.toString();

  const handleClose = () => {
    props.setModalVisible(false);
  };

  return (
    <>
      <div key={id}>
        <button onClick={handleClose}>Go back to Dashboard</button>
        <h4> {title}</h4>
        <h5>Start: {startTime}</h5>
        <h5>End: {endTime}</h5>
      </div>
    </>
  );
}
