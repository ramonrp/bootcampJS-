import {
  getPropertyList,
  getSaleType,
  getProvinces,
} from './property-list.api';
import { addPropertyRows, setOptions } from './property-list.helpers';
import { propertyListFromApiToVm } from './property-list.mappers';
import {
  roomOptions,
  bathOptions,
  maxPrice,
  minPrice,
} from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';

Promise.all([getPropertyList(), getSaleType(), getProvinces()]).then(
  ([propertyListApi, saleTypeList, provincesList]) => {
    addPropertyRows(propertyListFromApiToVm(propertyListApi));
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provincesList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathOptions, 'select-bathroom', '¿Baños?');
    setOptions(minPrice, 'select-min-price', 'Min (EUR)');
    setOptions(maxPrice, 'select-max-price', 'Max (EUR)');
  }
);

let filter = {
  saleType: '',
  province: '',
  rooms: '',
  bathrooms: '',
  minPrice: '',
  maxPrice: '',
};

onUpdateField('select-province', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    province: value,
  };
});

onUpdateField('select-sale-type', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    saleType: value,
  };
});

onUpdateField('select-room', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    rooms: value,
  };
});

onUpdateField('select-bathroom', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    bathrooms: value,
  };
});

onUpdateField('select-min-price', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    minPrice: value,
  };
});

onUpdateField('select-max-price', (e) => {
  const value = e.target.value;
  filter = {
    ...filter,
    maxPrice: value,
  };
});
