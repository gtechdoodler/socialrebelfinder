let statusConfig = [];

const registerStatusError = ({ status, message }) => {
  statusConfig.push({ status, message });
};

const findStatusError = (statusCode) => {
  return statusConfig.find(({ status }) => status == statusCode);
};

export { registerStatusError, findStatusError };