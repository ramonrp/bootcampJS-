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
  onAddImage,
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
  images: [],
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

onSubmitForm('insert-feature-button', () => {
  const newFeature = document.getElementById('newFeature').value;
  if (newFeature) {
    onAddFeature(newFeature);
  }
});
let newEquipments = [];
onUpdateField('equipments', (e) => {
  const value = e.target.value;
  const checked = e.target.checked;
  if (checked) {
    newEquipments.push(value);
  } else {
    newEquipments = newEquipments.filter((equipment) => equipment != value);
  }
  propertyData = {
    ...propertyData,
    equipments: newEquipments,
  };
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

let newImages = [];
onUpdateField('add-image', (e) => {
  const newFile = e.currentTarget.files[0];
  newFile.convertToBase64((base64) => {
    onAddImage(base64);
    newImages.push(base64);
    propertyData = {
      ...propertyData,
      images: newImages,
    };
  });
});

onSubmitForm('save-button', () => {
  updateMainFeatures();
  console.log(propertyData);
});

File.prototype.convertToBase64 = function (callback) {
  var reader = new FileReader();
  reader.onloadend = function (e) {
    callback(e.target.result, e.target.error);
  };
  reader.readAsDataURL(this);
};
