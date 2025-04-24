export function simulateCryptoUpdates(data) {
    return data.map((asset) => {
      const rand = () => (Math.random() * 2 - 1).toFixed(2); // ±1%
      const priceChange = parseFloat(asset.current_price) * (1 + rand() / 100);
      const volumeChange = asset.total_volume * (1 + rand() / 100);
      return {
        ...asset,
        current_price: parseFloat(priceChange.toFixed(2)),
        total_volume: parseFloat(volumeChange.toFixed(2)),
        price_change_percentage_1h_in_currency: parseFloat(rand()),
        price_change_percentage_24h_in_currency: parseFloat(rand()),
        price_change_percentage_7d_in_currency: parseFloat(rand())
      };
    });
  }
  