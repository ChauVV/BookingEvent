import axios from 'axios';

const TIME_OUT = 1000 * 90; // 1 minute 30 seconds

export const get = ({url = '', headers = {}}, timeout = TIME_OUT) => {
  const config = {headers, timeout};
  return axios
    .get(url, config)
    .then((response) => response)
    .catch((e) => e);
};

export const post = ({
  url = '',
  data = {},
  headers = {},
  timeout = TIME_OUT,
}) => {
  const config = {headers, timeout};
  return axios
    .post(url, data, config)
    .then((response) => response)
    .catch((e) => e);
};

export const put = ({
  url = '',
  data = {},
  headers = {},
  timeout = TIME_OUT,
}) => {
  const config = {headers, timeout};
  return axios
    .put(url, data, config)
    .then((response) => response)
    .catch((e) => e);
};
