import { getMovementsPerAccountID } from './movements.api';
import { history, routes } from '../../core/router';
import { addMovementRows, addGeneralAccountData } from './movements.helpers';
import {
  movementListFromApitoVM,
  accountFromApiToVM,
} from './movements.mappers';
import { getAccount } from '../account/account.api';

const params = history.getParams();
const isOneAccount = Boolean(params.id);

const getInfo = () => {
  if (isOneAccount) {
    getMovementsPerAccountID(params.id).then((movementListApi) => {
      const movementList = movementListFromApitoVM(movementListApi);
      addMovementRows(movementList);
    });

    getAccount(params.id).then((account) => {
      addGeneralAccountData(accountFromApiToVM(account));
    });
  }
};

getInfo();
