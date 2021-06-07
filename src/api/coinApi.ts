import { AxiosPromise } from 'axios';
import { ICoinDetail, ICoinsMarkets } from '../interfaces/interfaces';
import { axiosInstance } from './axiosClient';

interface IFilters {
  vs_currency: string;
  order: string;
  page: number;
  per_page: number;
}

export const coinApi: {
  getCoinsMarkets: (filters: IFilters) => AxiosPromise<ICoinsMarkets<number>[]>;
  getCoinDetail: (id: string) => AxiosPromise<ICoinDetail>;
} = {
  getCoinsMarkets: (filters) =>
    axiosInstance.get('coins/markets', {
      params: {
        ...filters,
      },
    }),
  getCoinDetail: (id) => axiosInstance.get(`coins/${id}`),
};
