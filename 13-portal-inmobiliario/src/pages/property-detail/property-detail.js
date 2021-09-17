import { history } from '../../core/router';
import { getPropertyPerId } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { propertyDetailFromApiToVm } from './property-detail.mappers';
import { onUpdateField, onSubmitForm } from '../../common/helpers';
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
});

onUpdateField('message', (e) => {
  const value = e.target.value;
  contact = {
    ...contact,
    message: value,
  };
});

onSubmitForm('contact-button', () => {
  console.log(contact);
});
