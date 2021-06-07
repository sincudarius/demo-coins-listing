import MockAdapter from 'axios-mock-adapter';
import { axiosInstance } from '../api/axiosClient';

const axiosMock = new MockAdapter(axiosInstance, { delayResponse: 100 });

type TFunctions = keyof Pick<typeof axiosMock, 'onGet'>;

/**
 * Mocks the return of any api call with {@param method} at {@param url} with {@param mockData}
 *
 * @param url
 * @param mockData
 * @param method
 */
export const mockApiCall = <T>(
  url: string,
  mockData?: T,
  method: TFunctions = 'onGet'
): void => {
  axiosMock[method](new RegExp(url)).reply(200, mockData);
};
