import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData, updateAssets } from './Features/Crypto/CryptoSlice';
import { simulateCryptoUpdates } from './Utils/mockUpdater';
import CryptoTable from './Components/CryptoTable';

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);
  const status = useSelector((state) => state.crypto.status);

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'succeeded') {
      const interval = setInterval(() => {
        const updatedAssets = simulateCryptoUpdates(assets);
        dispatch(updateAssets(updatedAssets));
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [assets, dispatch, status]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;

