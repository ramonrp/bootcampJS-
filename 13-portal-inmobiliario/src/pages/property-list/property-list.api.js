import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = () => {
  return Axios.get(url).then((response) => {
    return response.data;
  });
};
