import React from "react";

export default function MainErrorMessage(props) {
  return (
    <div className="mainError">
      <div className="mainError__container">
        <img src="/images/utilities/error.png" alt="error" />
        <p>{props.message}</p>
      </div>
    </div>
  );
}
