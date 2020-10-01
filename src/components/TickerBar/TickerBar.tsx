import * as React from "react";
import TickerBarStyles from "./TickerBarStyles";
import Ticker from "../Ticker/Ticker";

const currenciesToFetch = ["BTC", "ETH", "XRP", "LTC", "POOP"];

const TickerBar: React.FunctionComponent = () => {
  return (
    <TickerBarStyles>
      {currenciesToFetch.map((coin, i) => (
        <Ticker key={i} symbol={coin} />
      ))}
    </TickerBarStyles>
  );
};

export default TickerBar;
