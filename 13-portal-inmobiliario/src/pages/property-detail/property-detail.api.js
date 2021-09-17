import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyPerId = (propertyId) =>
  Axios.get(url, { params: { id: propertyId } }).then(
    (response) => response.data
  );

const urlEquipments = `${process.env.BASE_API_URL}/equipments`;
export const getEquipments = () =>
  Axios.get(urlEquipments).then((response) => response.data);

const urlContact = `${process.env.BASE_API_URL}/contact`;
export const insertContact = (contact) => {
  return Axios.post(urlContact, contact).then((response) => response.data);
};
