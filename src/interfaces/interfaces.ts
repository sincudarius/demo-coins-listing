export interface ICoinsMarkets<T = string> {
  id: string;
  name: string;
  symbol: string;
  image: string;
  high_24h: T;
  low_24h: T;
  current_price: T;
}

export interface ICoinDetail<
  T = { [key: string]: { eur: number } },
  D = { en: string },
  L = { homepage: string[] }
> {
  name: string;
  symbol: string;
  hashing_algorithm: string;
  description: D;
  market_data: T;
  links: L;
  genesis_date: string;
}
