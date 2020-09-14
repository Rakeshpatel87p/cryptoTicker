import React from "react";
import HolaMundoStyles from "./HolaMundoStyles";

interface IProps {
  msg: string;
}

const HolaMundo: React.FunctionComponent<IProps> = props => (
  <HolaMundoStyles>
    <h1>{props.msg}</h1>
  </HolaMundoStyles>
);

export default HolaMundo;
