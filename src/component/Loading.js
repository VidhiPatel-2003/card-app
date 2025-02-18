import React from "react";

function Loading({ load }) {
  console.log(load);
  return (
    <div className="text-center">
      <p className="loading">Loading...</p>
    </div>
  );
}

export default Loading;
