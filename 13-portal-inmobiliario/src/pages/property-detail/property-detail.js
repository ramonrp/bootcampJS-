import { history } from '../../core/router';
import { getPropertyPerId, getEquipments } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { propertyDetailFromApiToVm } from './property-detail.mappers';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidator } from './property-detail.validators';
import { insertContact } from './property-detail.api';

const params = history.getParams();

if (params.id) {
  let reducedEquipment;
  getEquipments().then((equipmentsArr) => {
    reducedEquipment = equipmentsArr.reduce((acc, equipment) => {
      const id = equipment.id;
      const name = equipment.name;
      const newEquipment = { [id]: name };
      return { ...acc, ...newEquipment };
    }, {});
  });
  getPropertyPerId(params.id).then((propertyArray) => {
    if (propertyArray[0]) {
      const propertyApi = propertyArray[0];
      propertyApi.equipmentIds = propertyApi.equipmentIds.map(
        (equipmentId) => reducedEquipment[equipmentId]
      );
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
      insertContact(contact).then((result) => {
        history.back();
      });
    }
  });
});
