import axios from 'axios';

// TODO: Implement a queryparams to querystring function, or take a look
// at 'qs' package and see what that has to offer.
const get = (uri, queryparams) => {
  return axios.get(uri);
};

export default {
  get,
  //patch,
  //post,
  //put,
  //delete
};
