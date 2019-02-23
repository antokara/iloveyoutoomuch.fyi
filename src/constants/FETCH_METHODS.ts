/**
 * a collection of fetch methods
 */
interface IFetchMethods {
  readonly [KEY: string]: string;
}

/**
 * the application's fetch methods
 */
export const FETCH_METHODS: IFetchMethods = {
  GET: 'GET',
  POST: 'POST'
};
