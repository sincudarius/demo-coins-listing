import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import useGetCoinsMarkets from '../../hooks/useGetCoinsMarkets';

import Spinner from '../Spinner/Spinner';

import './coinsList.styles.scss';

export const CoinsList: FC = () => {
  const { coins, isLoading } = useGetCoinsMarkets();
  const history = useHistory();

  if (isLoading) return <Spinner />;

  return (
    <div className="coinListContainer">
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Current Price</th>
              <th>High 24 hour Price</th>
              <th>Low 24 hour Price</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr
                key={coin.id}
                onClick={() => history.push(`/coins/${coin.id}`)}
              >
                <td>
                  <span>
                    <img src={coin.image} alt={coin.name} />
                    {coin.name}
                  </span>
                </td>
                <td>{coin.symbol}</td>
                <td>
                  {coin.current_price ? <span>{coin.current_price}</span> : '-'}
                </td>
                <td>{coin.high_24h ? <span> {coin.high_24h}</span> : '-'}</td>
                <td>{coin.low_24h ? <span> {coin.low_24h}</span> : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinsList;
