import Axios from 'axios';

const url = `${process.env.BASE_API_URL}`;

export const getSaleType = () => {
  return Axios.get(`${url}/saleTypes`).then((response) => response.data);
};

export const getProvinces = () => {
  return Axios.get(`${url}/provinces`).then((response) => response.data);
};

export const getEquipments = () => {
  return Axios.get(`${url}/equipments`).then((response) => response.data);
};

export const insertProperty = (propertyObj) => {
  return Axios.post(`${url}/properties`, propertyObj).then(
    (response) => response.data
  );
};
