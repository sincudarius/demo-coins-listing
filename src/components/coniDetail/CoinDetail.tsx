import React, { FC } from 'react';
import { useParams } from 'react-router';

import useGetCoinDetail from '../../hooks/useGetConiDetail';

import Spinner from '../Spinner/Spinner';

import './coinDetail.styles.scss';

const CoinDetail: FC = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const { coin, isLoading } = useGetCoinDetail(coinId);

  if (isLoading) return <Spinner />;

  return (
    <div className="coinContainer">
      <div className="coinTitleContainer">
        <span>
          {coin?.name || ''} ({coin?.symbol || ''})
        </span>
      </div>
      <div className="coinDetailContent">
        <div>
          <span className="contentTitle">Hashing algorithm:</span>
          <span>{coin?.hashing_algorithm || ' -'}</span>
        </div>
        <div>
          <span className="contentTitle">Market cap in Euro:</span>
          {coin ? <span>{coin?.market_data}</span> : ' -'}
        </div>
        <div>
          <span className="contentTitle">Genesis date:</span>
          <span>{coin?.genesis_date || ' -'}</span>
        </div>
        <div>
          <span className="contentTitle">For more details check:</span>
          {coin?.links.map((link) => (
            <span>
              <a target="blank" href={link}>
                {link}
              </a>
            </span>
          )) || ' -'}
        </div>
      </div>
      <div className="coinDetailContainer">
        <span className="contentTitle">Description: </span>
        <span dangerouslySetInnerHTML={{ __html: coin?.description || '' }} />
      </div>
    </div>
  );
};

export default CoinDetail;
