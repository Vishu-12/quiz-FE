import React from "react";
import SingleQues from "./SingleQues";
import "./QuesAndAns.css";
import Congrats from "./Congrats";
import ThankYou from "./ThankYou";

export default function QuesAndAns() {
  return (
    <div className="play-ques">
      {/* <SingleQues /> */}
      {/* <Congrats /> */}
      <ThankYou />
    </div>
  );
}
