const clear = (state) => {
  state.errorMessage = '';
};

const log = (state, errorMessage) => {
  state.errorMessage = errorMessage;
};

export default {
  clear,
  log
};