import { findStatusError } from '../httpStatusConfig.js';
import request from './request';
import { store } from '../index.js';

// func: extractMessageFromError
// Relying on 'error.response.data.Message' obj structure never changing, is dangerous.
// So providing some generic fallback message, in case this does change.
const extractMessageFromError = (error) => {
  if (error && error.response && error.response.data && error.response.data.Message) {
    return error.response.data.Message;
  }
  return 'An error occurred';
};

const get = async (uri, queryparams) => {
  try {
    return await request.get(uri, queryparams);
  } catch (error) { // anything that isn't 2xx
    let configStatus = findStatusError(error.response.status);
    store.commit('error/log', configStatus
      ? configStatus.message
      : extractMessageFromError(error));
    return Promise.reject(error);
  }
};

export default {
  get,
  //patch,
  //post,
  //put,
  //delete
};