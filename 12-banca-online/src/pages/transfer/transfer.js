import { history } from '../../core/router';
import { getAccountList } from '../account-list/account-list.api';
import { setAccountOptions } from './transfer.helpers';
import {
  onSetError,
  onSetFormErrors,
  onSubmitForm,
  onUpdateField,
} from '../../common/helpers';
import { formValidation } from './transfer.validation';
import { isValidTransfer } from './transfer.api';

const params = history.getParams();

getAccountList().then((accountList) => {
  setAccountOptions(accountList, params.id);
  transfer = {
    ...transfer,
    ibanOrigin: document.getElementById('select-account').value,
  };
});

let transfer = {
  ibanOrigin: '',
  iban: '',
  name: '',
  email: '',
  amount: '',
  concept: '',
  notes: '',
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  date: new Date(),
};

onUpdateField('select-account', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    ibanOrigin: value,
  };
  formValidation
    .validateField('ibanOrigin', transfer.ibanOrigin)
    .then((result) => {
      onSetError('accountId', result);
    });
});

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    iban: value,
  };
  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    name: value,
  };
  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    amount: value,
  };
  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    concept: value,
  };

  formValidation.validateField('concept', transfer.concept).then((result) => {
    onSetError('concept', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    notes: value,
  };
  formValidation.validateField('notes', transfer.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    day: value,
  };
});

onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    month: value,
  };
});

onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    year: value,
  };
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    email: value,
  };
  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    day: value,
    date: new Date(`${transfer.year}-${transfer.month}-${transfer.day}`),
  };
  formValidation.validateField('day', transfer.day).then((result) => {
    onSetError('day', result);
  });
  console.log(transfer.date.toLocaleDateString());
});

onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    month: value,
    date: new Date(`${transfer.year}-${transfer.month}-${transfer.day}`),
  };
  formValidation.validateField('month', transfer.month).then((result) => {
    onSetError('month', result);
  });
  console.log(transfer.date.toLocaleDateString());
});

onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    year: value,
    date: new Date(`${transfer.year}-${transfer.month}-${transfer.day}`),
  };
  formValidation.validateField('year', transfer.year).then((result) => {
    onSetError('year', result);
  });
  console.log(transfer.date.toLocaleDateString());
});

onSubmitForm('transfer-button', (event) => {
  console.log(transfer);
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    console.log(result);
    if (result.succeeded) {
      isValidTransfer(transfer).then((result) => {
        history.back();
      });
    }
  });
});
