import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  const formatNum = (num) =>
    num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border text-sm text-left">
        <thead className="bg-gray-200">
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, idx) => (
            <tr key={asset.id} className="border-t hover:bg-slate-300">
              <td>{idx + 1}</td>
              <td>
                <img src={asset.image} alt={asset.symbol} className="w-6 h-6" />
              </td>
              <td>{asset.name}</td>
              <td>{asset.symbol.toUpperCase()}</td>
              <td>${formatNum(asset.current_price)}</td>
              <td
                className={
                  asset.price_change_percentage_1h_in_currency >= 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {asset.price_change_percentage_1h_in_currency?.toFixed(2)}%
              </td>
              <td
                className={
                  asset.price_change_percentage_24h_in_currency >= 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {asset.price_change_percentage_24h_in_currency?.toFixed(2)}%
              </td>
              <td
                className={
                  asset.price_change_percentage_7d_in_currency >= 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                {asset.price_change_percentage_7d_in_currency?.toFixed(2)}%
              </td>
              <td>${formatNum(asset.market_cap)}</td>
              <td>${formatNum(asset.total_volume)}</td>
              <td>
                {formatNum(asset.circulating_supply)} {asset.symbol.toUpperCase()}
              </td>
              <td>
                <img src={`https://thumbs.dreamstime.com/b/abstract-financial-bar-chart-green-uptrend-line-graph-white-color-background-119268430.jpg`} alt="chart" className="h-8" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
