import * as React from "react";
import fetchTickerData from "../../utils/fetchTickerData";

interface IProps {
  symbol: string;
}

function Ticker(props: IProps): JSX.Element {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [tickerInfo, setTickerInfo] = React.useState({});

  React.useEffect(() => {
    const { symbol } = props;
    const makeFetchCall = async () => {
      try {
        const tickerData = await fetchTickerData(symbol);
        setIsLoaded(true);
        const { price, percent_change_24h: percentChng } = tickerData;
        setTickerInfo({ price, percentChng });
      } catch (error) {
        setError(true);
        throw new Error(`Problem in fetching the ticker data ${error}`);
      }
    };

    makeFetchCall();
  }, []);

  return (
    <div>
      <h1>{props.symbol}</h1>
      <p>{tickerInfo.price}</p>
      <p>{tickerInfo.percentChng}</p>
    </div>
  );
}

export default Ticker;
