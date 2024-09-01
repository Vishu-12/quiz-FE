import React from "react";

export default function ThankYou() {
  return (
    <div
      className="congrats"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="thanks-msg">Thank you for participating in the Poll</div>
    </div>
  );
}
