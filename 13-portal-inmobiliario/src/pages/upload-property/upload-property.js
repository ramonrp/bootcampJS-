import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
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
import { formValidation } from './upload-property.validators';

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
  saleTypes: [],
};

onUpdateField('title', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    title: value,
  };
  formValidation.validateField('title', generalData.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    notes: value,
  };
  formValidation.validateField('notes', generalData.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    email: value,
  };
  formValidation.validateField('email', generalData.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    phone: value,
  };
  formValidation.validateField('phone', generalData.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (e) => {
  const value = e.target.value;
  generalData = {
    ...generalData,
    price: value,
  };
  formValidation.validateField('price', generalData.price).then((result) => {
    onSetError('price', result);
  });
});

let newSaleTypes = [];
onUpdateField('saleTypes', (e) => {
  const value = e.target.value;
  const checked = e.target.checked;
  if (checked) {
    newSaleTypes.push(value);
  } else {
    newSaleTypes = newSaleTypes.filter((saleType) => saleType != value);
  }
  generalData = {
    ...generalData,
    saleTypes: newSaleTypes,
  };
  formValidation
    .validateField('saleTypes', generalData.saleTypes)
    .then((result) => {
      onSetError('saleTypes', result);
    });
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
  formValidation
    .validateField('address', propertyData.address)
    .then((result) => {
      onSetError('address', result);
    });
});

onUpdateField('province', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    province: value,
  };
  formValidation
    .validateField('province', propertyData.province)
    .then((result) => {
      onSetError('province', result);
    });
});

onUpdateField('city', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    city: value,
  };
  formValidation.validateField('city', propertyData.city).then((result) => {
    onSetError('city', result);
  });
});

onUpdateField('squareMeter', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    squareMeter: value,
  };
  formValidation
    .validateField('squareMeter', propertyData.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    rooms: value,
  };
  formValidation.validateField('rooms', propertyData.rooms).then((result) => {
    onSetError('rooms', result);
  });
});

onUpdateField('bathrooms', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    bathrooms: value,
  };
  formValidation
    .validateField('bathrooms', propertyData.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (e) => {
  const value = e.target.value;
  propertyData = {
    ...propertyData,
    locationUrl: value,
  };
  formValidation
    .validateField('locationUrl', propertyData.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
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
  formValidation
    .validateField('equipments', propertyData.equipments)
    .then((result) => {
      onSetError('equipments', result);
    });
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
  formValidation
    .validateField('mainFeatures', propertyData.mainFeatures)
    .then((result) => {
      onSetError('mainFeatures', result);
    });
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
  formValidation.validateField('images', propertyData.images).then((result) => {
    onSetError('images', result);
  });
});

onSubmitForm('save-button', () => {
  updateMainFeatures();
  formValidation
    .validateForm({ ...generalData, ...propertyData })
    .then((result) => {
      onSetFormErrors(result);
      if (result.succeeded) {
        // mapper propertyvmtoapi
        // post property to server
      }
    });
});

File.prototype.convertToBase64 = function (callback) {
  var reader = new FileReader();
  reader.onloadend = function (e) {
    callback(e.target.result, e.target.error);
  };
  reader.readAsDataURL(this);
};
