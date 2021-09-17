import { onUpdateField, onSubmitForm } from '../../common/helpers';
import {
  getProvinces,
  getSaleType,
  getEquipments,
} from './upload-property.api';
import {
  setCheckboxList,
  setOptionList,
  onAddFeature,
  onRemoveFeature,
} from './upload-property.helpers';

Promise.all([getProvinces(), getSaleType(), getEquipments()]).then((result) => {
  const [provinces, saleTypes, equipments] = result;
  setOptionList(provinces, 'province');
  setCheckboxList(saleTypes, 'saleTypes');
  setCheckboxList(equipments, 'equipments');
});

let generalData = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  salesTypes: [],
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

let salesTypes = [];
onUpdateField('saleTypes', (e) => {
  const value = e.target.value;
  const checked = e.target.checked;
  if (checked) {
    salesTypes.push(value);
  } else {
    salesTypes = salesTypes.filter((saleType) => saleType != value);
  }
  generalData = {
    ...generalData,
    salesTypes: salesTypes,
  };
});

let propertyData = {
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  newFeature: '',
  mainFeatures: [],
  equipments: [],
};

onUpdateField('address', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    address: value,
  };
});

onUpdateField('province', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    provinceId: value,
  };
});

onUpdateField('city', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    city: value,
  };
});

onUpdateField('squareMeter', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    squareMeter: value,
  };
});

onUpdateField('rooms', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    rooms: value,
  };
});

onUpdateField('bathrooms', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    bathrooms: value,
  };
});

onUpdateField('locationUrl', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    locationUrl: value,
  };
});

onUpdateField('equipments', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    equipments: [value],
  };
});
onSubmitForm('insert-feature-button', () => {
  const newFeature = document.getElementById('newFeature').value;
  if (newFeature) {
    onAddFeature(newFeature);
  }
});

const updateMainFeatures = () => {
  let newMainFeatures = [];
  document
    .getElementById('mainFeatures')
    .querySelectorAll('span')
    .forEach((span) => {
      newMainFeatures.push(span.innerText);
    });
  propertyData = {
    ...propertyData,
    mainFeatures: newMainFeatures,
  };
};

onSubmitForm('save-button', () => {
  updateMainFeatures();
  console.log(propertyData);
});
