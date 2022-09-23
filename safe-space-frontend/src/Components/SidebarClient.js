import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function SidebarClient() {
  const [name, getName] = useState();
  const { user } = useAuth0();

  useEffect(() => {});
  //loggout Auth0 will be here
  return <div></div>;
}
