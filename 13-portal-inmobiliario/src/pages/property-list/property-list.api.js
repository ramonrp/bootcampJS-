import Axios from 'axios';

const url = `${process.env.BASE_API_URL}`;

export const getPropertyList = (query = '') => {
  return Axios.get(`${url}/properties${query}`).then((response) => {
    return response.data;
  });
};

export const getSaleType = () => {
  return Axios.get(`${url}/saleTypes`).then((response) => response.data);
};

export const getProvinces = () => {
  return Axios.get(`${url}/provinces`).then((response) => response.data);
};
