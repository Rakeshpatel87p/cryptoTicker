import * as React from "react";
import TickerBarStyles from "./TickerBarStyles";
import Ticker from "../Ticker/Ticker";

const currenciesToFetch = ["BTC", "ETH", "XRP"];

class TickerBar extends React.Component {
  render() {
    return (
      <TickerBarStyles>
        <Ticker symbol={"BTC"} />
      </TickerBarStyles>
    );
  }
}

export default TickerBar;
