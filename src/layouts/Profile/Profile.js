import React from "react";
import { Cover } from "./components";

const Profile = props => {
  const { children } = props;
  return (
    <div>
      <Cover />
      <main>{children}</main>
    </div>
  );
};

export default Profile;
