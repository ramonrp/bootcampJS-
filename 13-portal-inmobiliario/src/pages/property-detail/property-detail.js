import { history } from '../../core/router';
import { getPropertyPerId } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { propertyDetailFromApiToVm } from './property-detail.mappers';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidator } from './property-detail.validators';
const params = history.getParams();

if (params.id) {
  getPropertyPerId(params.id).then((propertyArray) => {
    if (propertyArray[0]) {
      const propertyVm = propertyDetailFromApiToVm(propertyArray[0]);
      setPropertyValues(propertyVm);
    }
  });
}

let contact = {
  email: '',
  message: '',
};

onUpdateField('email', (e) => {
  const value = e.target.value;
  contact = {
    ...contact,
    email: value,
  };
  formValidator.validateField('email', contact.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (e) => {
  const value = e.target.value;
  contact = {
    ...contact,
    message: value,
  };
  formValidator.validateField('message', contact.message).then((result) => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  formValidator.validateForm(contact).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
    }
  });
});
