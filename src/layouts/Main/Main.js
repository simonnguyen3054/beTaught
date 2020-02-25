import React from "react";
import { Topbar } from "./components";

const Main = props => {
  const { children } = props;
  return (
    <div>
      <Topbar />
      <main>{children}</main>
    </div>
  );
};

export default Main;
