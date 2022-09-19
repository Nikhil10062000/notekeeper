import React from "react";
import Cardpin from "./Cardpin";
const Pin = ({ pin, get }) => {
  console.log(pin);
  return <>{get ? <h4 className="App happ"> Pin</h4> : <Cardpin pin={pin} />}</>;
};

export default Pin;
