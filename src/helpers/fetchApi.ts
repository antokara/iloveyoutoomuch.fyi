import { FETCH_METHODS } from 'Constants/FETCH_METHODS';

/**
 * makes an API Request and returns the raw Promise
 *
 * If no config options are provided, it will default to GET request
 * without Cookies, it will not follow any redirection(s) and
 * request headers will be Accept: 'application/json', 'Content-Type': 'application/json'
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 * @param url API URL with protocol
 * @param init fetch init request options @see https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @returns Promise @see https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
export const fetchApi = (url, init = {}) => {
  const initObj = { ...init };

  // method
  if (initObj.method === undefined) {
    initObj.method = FETCH_METHODS.GET;
  }

  // redirection
  if (initObj.redirect === undefined) {
    initObj.redirect = 'manual';
  }

  // cookies
  if (initObj.credentials === undefined) {
    initObj.credentials = 'omit';
  }

  // handle headers
  if (initObj.headers === undefined) {
    initObj.headers = {};
  }

  // in case no Accept header was provided
  if (initObj.headers.Accept === undefined) {
    initObj.headers.Accept = 'application/json';
  }

  // in case no Content-Type header was provided
  if (initObj.headers['Content-Type'] === undefined) {
    initObj.headers['Content-Type'] = 'application/json';
  }

  // return our fetch promise
  return fetch(url, initObj);
};
