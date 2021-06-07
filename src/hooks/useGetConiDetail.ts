import { useState, useEffect } from 'react';
import { coinApi } from '../api/coinApi';
import { ICoinDetail } from '../interfaces/interfaces';
import { transformCoinDetail } from '../utils/utils';

const useGetCoinDetail = (id: string) => {
  const [coin, setCoin] =
    useState<ICoinDetail<string, string, string[]> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!id) return;
    coinApi
      .getCoinDetail(id)
      .then(({ data }) => setCoin(transformCoinDetail(data)))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { coin, error, isLoading };
};

export default useGetCoinDetail;
