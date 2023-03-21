import React from "react";
import Navbar from "@/components/Navbar";

function Container(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Container;
