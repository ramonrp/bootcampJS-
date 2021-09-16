import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/transfer`;

export const isValidTransfer = (transfeObj) =>
  Axios.post(url, transfeObj).then((result) => {
    result.data;
  });
