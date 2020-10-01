interface IQueryParams {
  symbol: string;
}

const fetchTickerData = async (symbol: string) => {
  const params: IQueryParams = {
    symbol,
  };

  const query = Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&");

  const response = await fetch(`/api?${query}`);
  const tickerData = await response.json();
  const currencyToQuery = "USD";
  const currencyQuote = tickerData.data[symbol].quote[currencyToQuery];

  return currencyQuote;
};

export default fetchTickerData;
