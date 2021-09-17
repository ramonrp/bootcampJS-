import { onUpdateField, onSubmitForm } from '../../common/helpers';
import { getProvinces, getSaleType } from './upload-property.api';
import { setCheckboxList, setOptionList } from './upload-property.helpers';

Promise.all([getProvinces(), getSaleType()]).then((result) => {
  const [provinces, saleTypes] = result;
  setOptionList(provinces, 'province');
  setCheckboxList(saleTypes, 'equipments');
});

let generalData = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
};

onUpdateField('title', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    title: value,
  };
});

onUpdateField('notes', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    notes: value,
  };
});

onUpdateField('email', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    email: value,
  };
});

onUpdateField('phone', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    phone: value,
  };
});

onUpdateField('price', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    price: value,
  };
});

onSubmitForm('save-button', () => {
  console.log(generalData);
});
