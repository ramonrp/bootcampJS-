import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyPerId = (propertyId) =>
  Axios.get(url, { params: { id: propertyId } }).then(
    (response) => response.data
  );
