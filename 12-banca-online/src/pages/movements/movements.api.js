import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsPerAccountID = (accountId) => {
  return Axios.get(url, { params: { accountId } }).then(
    (result) => result.data
  );
};
