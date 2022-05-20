import React from "react";
import styled from "styled-components";

function GarbageBin() {
  return (
    <div>
      <img
        style={{
          display: "flex",
          position: "relative",
          top: 60,
          left: 10,
          width: 450,
          height:300,
          objectFit: "contain",
        }}
        src="/GarbageBin.svg"
      />
    </div>
  );
}
export default GarbageBin;
