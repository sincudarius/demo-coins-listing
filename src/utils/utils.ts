import { ICoinDetail, ICoinsMarkets } from '../interfaces/interfaces';

/**
 * Transform the data wee need to render
 * @param data
 * @returns
 */
export const transformCoinsMarkets = (data: ICoinsMarkets<number>[]) =>
  data.map(({ id, name, symbol, image, high_24h, low_24h, current_price }) => ({
    id,
    name,
    symbol,
    image,
    high_24h: `€${high_24h.toLocaleString()}`,
    low_24h: `€${low_24h.toLocaleString()}`,
    current_price: `€${current_price.toLocaleString()}`,
  }));

/**
 * Transform the data wee need to render
 * @param data
 * @returns
 */
export const transformCoinDetail = ({
  name,
  symbol,
  hashing_algorithm,
  description,
  market_data,
  links,
  genesis_date,
}: ICoinDetail): ICoinDetail<string, string, string[]> => ({
  name,
  symbol,
  hashing_algorithm,
  description: description.en,
  market_data: ` €${market_data.market_cap.eur.toLocaleString()}`,
  links: links.homepage,
  genesis_date: new Date(genesis_date).toLocaleDateString(),
});
