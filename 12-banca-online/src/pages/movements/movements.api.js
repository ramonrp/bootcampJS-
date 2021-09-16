import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsPerAccountID = (accountId) => {
  return Axios.get(url)
    .then((response) => response.data)
    .then((data) => {
      return data.filter((movement) => movement.accountId === accountId);
    });
};
